import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
    EnNumber: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    tg_batch: {
        type: String,
        require: true
    },
    reason: {
        type: String,
        require: true
    },
    teacherApproval: {
        type: Boolean,
        default: false
    },
    hodApproval: {
        type: Boolean,
        default: false
    },
    hostelApproval: {
        type: Boolean,
        default: false
    },
    securityApproval: {
        type: Boolean,
        default: false
    },
    isMessageSend: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const RequestModel = mongoose.model('RequestModel', RequestSchema);
export { RequestModel };