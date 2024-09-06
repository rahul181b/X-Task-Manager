const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        text: { type: String, required: [true, 'please add text value'] },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true }
    },
    {
        timestamps: true
    })

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel