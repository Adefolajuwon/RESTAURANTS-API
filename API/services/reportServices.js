const moment = require('moment');
async function calculateUptimeLastHour(storeId, timestamp) {
	// Get store timezone from database
	const {
		rows: [{ timezone_str }],
	} = await client.query(
		'SELECT timezone_str FROM timezones WHERE store_id = $1',
		[storeId]
	);

	// Convert timestamp to store timezone
	const momentTimestamp = moment.utc(timestamp).tz(timezone_str);

	// Get store business hours from database
	const {
		rows: [businessHours],
	} = await client.query(
		'SELECT start_time_local, end_time_local FROM storestatuses WHERE store_id = $1 AND day_of_week = $2',
		[storeId, momentTimestamp.day()]
	);

	if (!businessHours) {
		// Store is open 24*7
		return moment.duration(1, 'hour').asMinutes();
	}

	// Convert business hours to store timezone
	const start = momentTimestamp
		.clone()
		.startOf('day')
		.add(businessHours.start_time_local, 'minutes');
	const end = momentTimestamp
		.clone()
		.startOf('day')
		.add(businessHours.end_time_local, 'minutes');

	// Query database for observations within last hour
	const { rows: observations } = await client.query(
		'SELECT timestamp_utc, status FROM store_observations WHERE store_id = $1 AND timestamp_utc >= $2',
		[storeId, momentTimestamp.clone().subtract(1, 'hour').toDate()]
	);

	// Calculate uptime within business hours
	let uptime = 0;
	for (const observation of observations) {
		const momentObserved = moment
			.utc(observation.timestamp_utc)
			.tz(timezone_str);
		if (
			momentObserved.isBetween(start, end, null, '[]') &&
			observation.status === 'active'
		) {
			const duration = moment.duration(momentObserved.diff(start));
			uptime += duration.asMinutes();
		}
	}

	// Return uptime in minutes
	return uptime;
}
module.exports = { calculateUptimeLastHour };
