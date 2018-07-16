const ip = require('ip');

module.exports = {
    "ENDPOINT": "http://" + ip.address() + ":3500",
    "ORIGINS": ["http://*:3000", "http://*:3100"],
    "CLIENT": ":3000",
    "NODE_ENV": "development",
    "RIA_SENTRY_APP": "https://23f0e00b78a24ac88450c8261b59ed7c@sentry.io/212515",
    "GOOGLE_API_KEY": "AIzaSyDBosKGKi-BI9Z8vftAwkBRQlSDDNE8PvM",
    "FIREBASE_AUTH_DOMAIN": "letters-social.firebaseapp.com",
    "MAPBOX_API_TOKEN": "pk.eyJ1IjoibWFya3RoZXRob21hcyIsImEiOiJHa3JyZFFjIn0.MwCj8OA5q4dqdll1s2kMiw"
}
