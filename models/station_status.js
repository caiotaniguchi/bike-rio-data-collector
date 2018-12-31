const mongoose = require('mongoose');

const StationStatusSchema = new mongoose.Schema({
    station_id: String,
    num_bikes_available: String,
    num_bikes_available_types: Object,
    num_bikes_disabled: Number,
    num_docks_available: Number,
    num_docks_disabled: Number,
    is_installed: Number,
    is_renting: Number,
    is_returning: Number,
    is_charging_station: Boolean,
    last_reported: Number,
});

module.exports = mongoose.model('StationStatus', StationStatusSchema);
