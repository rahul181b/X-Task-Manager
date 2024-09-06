const Task = require('../Model/taskModel')

const setTask = async (req, res) => {
    const body = req.body
    if (Object.keys(body).length === 0) {
        return res.status(400).json({ message: "please add text " })
    }
    console.log(req.body)
    const task = await Task.create({ text: req.body.text })
    res.status(200).json(task)
}

const getTask = async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
}

const updateTask = async (req, res) => {
    const { id } = req.params

    const updateTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updateTask);
}

const deleteTask = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const findTask = await Task.findById(id);
    if (!findTask) {
        return res.status(400).json({ message: "task not found" })
    }
    await Task.findByIdAndDelete(id)
    res.status(200).json({ message: "task deleted ", id })
}

module.exports = {
    setTask,
    getTask,
    updateTask,
    deleteTask
}