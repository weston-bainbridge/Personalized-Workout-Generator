import { Workout } from "./workout.js";

export class SupersetWorkout extends Workout{

    constructor(muscleGroups, hours){
        super(muscleGroups, hours);
    }

    //randomly select the index of an exercise that will be supersetted with the following exercise
    getSuperSetIndicies(exerciseListLength){
        const numberOfSuperSets = Math.floor(1 + Math.random() * (this.hours + 1));
        let i = 0;
        let superSetIndicies = [];
        while (i < numberOfSuperSets){
            let temp = Math.floor(Math.random() * (exerciseListLength - numberOfSuperSets));
            if (!superSetIndicies.includes(temp)){
                superSetIndicies.push(temp);
                i++;
            }
        }
        return superSetIndicies;
    }

    createSuperSetWorkout() {

        const exercisesForWorkout = this.getExercisesForWorkout();
        const superSetIndicies = this.getSuperSetIndicies(exercisesForWorkout.length);
        
        // when we reach an exercise that is to be supersetted with the next exercise, replace the two individual exercises with an array containing those exercises
        let i = 0;
        while (i < exercisesForWorkout.length){
            if (superSetIndicies.includes(i)){
                exercisesForWorkout.splice(i, 2, [exercisesForWorkout[i], exercisesForWorkout[i + 1]]);
            } 
            i++;
        }

        exercisesForWorkout.forEach(exercise => {
            if (exercise.length === 2){
                console.log(`Superset (${this.getSetCount()} sets):`);
                exercise[0].isSingleSided
                    ? console.log(`\t${exercise[0].title}: ${this.getRepsAndWeight(exercise[0])} each side`)
                    : console.log(`\t${exercise[0].title}: ${this.getRepsAndWeight(exercise[0])}`);
                exercise[1].isSingleSided
                    ? console.log(`\t${exercise[1].title}: ${this.getRepsAndWeight(exercise[1])} reps each side`)
                    : console.log(`\t${exercise[1].title}: ${this.getRepsAndWeight(exercise[1])} reps`);
            } else {
                exercise.isSingleSided
                    ? console.log(`${exercise.title}: ${this.getSetCount()} sets ${this.getRepsAndWeight(exercise)} each side`)
                    : console.log(`${exercise.title}: ${this.getSetCount()} sets ${this.getRepsAndWeight(exercise)}`)
            }
        });
    }
}