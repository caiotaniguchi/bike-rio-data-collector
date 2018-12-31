const mongoose = require('mongoose');

const StationInformationSchema = new mongoose.Schema({
    station_id: String,
    name: String,
    lat: Object,
    lon: Number,
    address: Number,
    rental_methods: [String],
    last_updated: Number,
});

module.exports = mongoose.model('StationInformation', StationInformationSchema);
