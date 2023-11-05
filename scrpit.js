//Easy

function exerciseOfTheDay() {
    let exercise1 = "rest";

    return function (newExercise) {
        if (newExercise) {
            exercise1 = newExercise;
        } else {
            exercise1 = "rest";
        }

        console.log(`Today's exercise: ${exercise1}`);
    }
}
const getExerciseOfTheDay = exerciseOfTheDay();

getExerciseOfTheDay();
getExerciseOfTheDay("running");
getExerciseOfTheDay();

//version 2 
function exercise(input) {
    function exerciseClosure(closureInput) {
        return `Today's exercise: ${closureInput}`;
    }
    return exerciseClosure(input);
};
console.log(exercise("Running"));
console.log(exercise());


//Medium 

function sharePizza(pizzaSlices, persons) {
    function divide() {
        return Math.round(pizzaSlices / persons * 100) / 100;
    }
    return `Each person gets ${divide()} slices of pizza; from our ${pizzaSlices}-slice pizza`;
}

// Output: Each person gets 4 slices of pizza; from our 8 slice pizza
console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
// Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
console.log(sharePizza(21, 20));
// Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
console.log(sharePizza(10, 3)); 


//Hard 
function PII() {
    let PII = {
        name: "Hassan Niang",
        SSN: "123-45-6789"
    };

    return {
        getName: function() {
            return PII.name;
        }
    };
}

const piiFinal = PII();

console.log(piiFinal.name); 
console.log(piiFinal.SSN);  // Output: undefined (since SSN is not accessible at all)
console.log(piiFinal.getName()); // Output: "Hassan Niang" 

//Very Hard
class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log(`${this.name} says: Running is fun! - said no one ever`);
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true; // Default value for busy property
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }

    learnLanguage(newLanguage) {
        this.languages.push(newLanguage);
    }

    listLanguages() {
        console.log(`${this.name} knows: ${this.languages.join(', ')}`);
    }
}

// Example usage
const john = new Person("John Doe", "Designer", 30);
john.exercise();
john.fetchJob(); 

const mark = new Programmer("Mark Smith", "Developer", 25, ["JavaScript", "Python"]);
mark.listLanguages(); // Output: "Mark Smith knows: JavaScript, Python"
mark.completeTask();
mark.offerNewTask(); // Output: "Mark Smith would love to take on a new responsibility."
mark.acceptNewTask();
mark.offerNewTask(); // Output: "Mark Smith can't accept any new tasks right now."

