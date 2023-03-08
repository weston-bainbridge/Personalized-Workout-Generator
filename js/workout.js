import { exerciseList } from "./exerciseList.js";

export class Workout {

    constructor(muscleGroups, hours) {
        //determine this workout's exercise options by the input of muscle groups
        this.exercises = exerciseList.filter(exercise => {
            return muscleGroups.includes(exercise.muscleGroup);
        });
        this.hours = hours;
    }

    //Random amount of exercises from the options above based on the input of workout length (hours) unless that is 0
    getExerciseCount(hours) {
        return Math.floor((hours * 6) + Math.random() * 2);
    }

    //Sets range randomly from 3 to 5
    getSetCount() {
        return Math.floor(3 + Math.random() * 3);
    }

    //Random rep and weight counts. Each rep count is associated with a weight depending on the strength of the user
    getRepsAndWeight(exercise){
        const i = Math.floor(Math.random() * exercise.range.reps.length);
        return `${exercise.range.reps[i]} reps at ${exercise.range.weight[i]} lbs.`
    }

    //Shuffle all exercise options, then select the first bunch depending on the exercise count for this workout
    getExercisesForWorkout() {
        const shuffledExercises = this.shuffle(this.exercises);
        const selections = shuffledExercises.filter(exercise => {
            return shuffledExercises.indexOf(exercise) < this.getExerciseCount(this.hours);
        });
        return selections;
    }

    shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }
   
    createWorkout() {
        const exercisesForWorkout = this.getExercisesForWorkout();
        exercisesForWorkout.forEach(exercise => {
            exercise.isSingleSided //if the exercise is to be performed one side at a time, display it as such
                ? console.log(`${exercise.title}: ${this.getSetCount()} sets ${this.getRepsAndWeight(exercise)} each side`)
                : console.log(`${exercise.title}: ${this.getSetCount()} sets ${this.getRepsAndWeight(exercise)}`)
        });
    }
}