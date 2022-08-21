const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({ status: 'OK', data: allWorkouts });
};

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send('Get an existing workout');
};

const createNewWorkout = (req, res) => {
    const { name, mode, equipment, exercises, trainerTips } = req.body;

    if (!name || !mode || !equipment || !exercises || !trainerTips) return;

    const newWorkout = {
        name,
        mode,
        equipment,
        exercises,
        trainerTips,
    };

    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: 'Ok', data: createdWorkout });
};

const updateOneWorkout = (req, res) => {
    const updateWorkout = workoutService.updateOneWorkout();
    res.send('Update an existing workout');
};

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send('Delete an existing workout');
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
