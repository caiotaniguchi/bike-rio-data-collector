const mongoose = require('mongoose');

const SystemPricingPlanSchema = new mongoose.Schema({
    plan_id: String,
    name: String,
    currency: String,
    price: String,
    is_taxable: Number,
    description: String,
});

module.exports = mongoose.model('SystemPricingPlan', SystemPricingPlanSchema);
