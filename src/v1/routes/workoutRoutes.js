const express = require('express');
const router = express.Router();

const {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
} = require('../../controllers/workoutController');

const { getRecordForWorkout } = require('../../controllers/recordController');

router.get('/', getAllWorkouts);
router.get('/:workoutId', getOneWorkout);
router.get('/:workoutId/records', getRecordForWorkout);
router.post('/', createNewWorkout);
router.patch('/:workoutId', updateOneWorkout);
router.delete('/:workoutId', deleteOneWorkout);

module.exports = router;
