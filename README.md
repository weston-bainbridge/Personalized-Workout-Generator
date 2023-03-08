# Personalized-Workout-Generator
A JavaScript console application that will create a workout based on specified muscle groups to work, as well as a duration in hours:

- This project is comprised of 4 files:

    - exerciseList.js: All that is contained within this file is a large array of objects, each one representing an individual exercise with the necessary attributes.
        
    - workout.js: Contains the "Workout" class that accepts 2 parameters. The first parameter is an array of strings, each one to represent a muscle group that the ensuing workout will hit on. The second parameter can either be an integer or a floating point number, and it represents the number of hours (estimation) that the user would like the ensuing workout to take. The Workout class will take the parameters, grab the matching exercises from the exerciseList.js based on muscle groups, shuffle them, pick an amount of exercises based on the hours parameter, then display them in the console as the workout with each exercise having between 3-5 sets, and reps and weight that correlate to eachother (a certain rep count will associate with a weight amount) and come from the exercise list.
    
    - supersetWorkout.js: Contains the "SupersetWorkout" class which extends the "Workout" class. "SupersetWorkout" takes the same exact parameters as "Workout", but has two additional methods. The first to randomize which exercises will get supersetted together, and the second to display the workout similarly to the same method in "Workout", just with supersets included.
    
    - main.js: The engine for the program. Instantiates either a Workout or SupersetWorkout object with the necessary parameters, then runs the function in either class to log the workout routine to the console.

As of now, this is just a console application. However, it is intended to eventually become a web application with well-desinged front end UI, and a database on the backend to fetch and save data for users in order to track progress.
