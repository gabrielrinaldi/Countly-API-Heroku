var countlyConfig = {
    mongodb: process.env.COUNTLYDB,
    api: {
        workers: 0,
        port: process.env.PORT,
        safe: false,
        session_duration_limit: 120,
        max_sockets: 1024,
        city_data: true
    },
    apps: {
        country: "US",
        timezone: "America/Los_Angeles",
        category: "6"
    }
};

// Set your host IP or domain to be used in the emails sent
countlyConfig.host = process.env.EMAIL_DOMAIN;

module.exports = countlyConfig;
