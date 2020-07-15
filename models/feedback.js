const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema ({
    name: String,
    feedbackText: String
})

module.exports = Feedback = mongoose.model('feedback', FeedbackSchema);