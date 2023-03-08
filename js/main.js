import { Workout } from "./workout.js";
import { SupersetWorkout } from "./supersetWorkout.js";

const myWorkout = new Workout(["Chest", "Biceps"], 1);
const mySuperSetWorkout = new SupersetWorkout(["Hamstrings", "Quads", "Calves"], 1);
myWorkout.createWorkout();
//mySuperSetWorkout.createSuperSetWorkout();