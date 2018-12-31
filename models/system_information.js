const mongoose = require('mongoose');

const SystemInformationSchema = new mongoose.Schema({
    system_id: String,
    language: String,
    name: String,
    timezone: String,
    build_version: String,
    build_label: String,
    build_hash: String,
    build_number: String,
    mobile_head_version: String,
    mobile_minimum_supported_version: String,
});

module.exports = mongoose.model('SystemInformation', SystemInformationSchema);
