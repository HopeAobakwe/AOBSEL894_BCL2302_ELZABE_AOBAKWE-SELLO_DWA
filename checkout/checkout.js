// Quiz Questions
const quizQuestions = [
    {
    question: "What is the standard indentation style in JavaScript?",
    choices: ["2 spaces", "4 spaces", "1 tab", "No indentation"],
    answer:[""]
    },
    {
    question: "What is the purpose of code documentation?",
    choices: [
    "To make the code run faster",
    "To explain the code's functionality and usage",
    "To hide code from other developers",
    "To confuse other developers",
    ],
   answer: [""]
    },
    {
    question: "How can you handle errors in JavaScript?",
    choices: [
    "Using try-catch blocks",
    "Ignoring them and hoping they go away",
    "Deleting the code that causes errors",
    "Praying to the coding gods",
    ],
   answer:[""]
    },
    {
    question: "What does abstraction mean in programming?",
    choices: [
    "Writing code in a foreign language",
    "Hiding unnecessary details and exposing only essential information",
    "Writing code that is impossible to understand",
    "Avoiding writing any code",
    ],
   answer:[""]
    },
    {
    question: "Which programming paradigm focuses on bundling data and methods together in objects?",
    choices: [
    "Functional Programming",
    "Object-Oriented Programming",
    "Procedural Programming",
    "Imperative Programming",
    ],
    answer:[""]
    },
    {
    question: "What is the term for creating new objects based on existing ones?",
    choices: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    answer:[""]
    },
    {
    question: "Which programming paradigm emphasizes the use of pure functions and immutability?",
    choices: [
    "Functional Programming",
    "Object-Oriented Programming",
    "Procedural Programming",
    "Imperative Programming",
    ],
   answer:[""]
    },
    {
    question: "What is the purpose of a state machine in programming?",
    choices: [
    "To make the code more complicated",
    "To confuse other developers",
    "To model complex systems with discrete states and transitions",
    "To replace human decision-making",
    ],
   answer:[""]
    },
    {
        question: "What is the term for bundling data and methods together in a self-contained unit?",
        choices: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    Answer: "",
      },
      {
        question: "What will be the output of the following code snippet?",
        code: `
          const arr = [1, 2, 3, 4, 5];
          for (var i = 0; i < arr.length; i++) {
            setTimeout(() => {
              console.log(arr[i]);
            }, 1000);
          }
        `,
        choices: ["1, 2, 3, 4, 5", "5, 4, 3, 2, 1", "undefined", "Error"],
       
      }
    ];
    
    // Run the Quiz
    function runQuiz() {
    let score = 0;
    
    for (let i = 0; i < quizQuestions.length; i++) {
    const question = quizQuestions[i].question;
    const choices = quizQuestions[i].choices;
    const correctAnswer = quizQuestions[i].correctAnswer;
    console.log(`Question ${i + 1}: ${question}`);
for (let j = 0; j < choices.length; j++) {
  console.log(`${j + 1}. ${choices[j]}`);
}

const userAnswer = prompt("Enter your answer (1, 2, 3, or 4):");

if (userAnswer === correctAnswer) {
  console.log("Correct!");
  score++;
} else {
  console.log(`Incorrect. The correct answer is: ${correctAnswer}`);
}

console.log("\n");
}

console.log(Quiz finished. Your score: ${score}/${quizQuestions.length});
}

// Run the Quiz
runQuiz();

//If they don't wipe the spectacles like i asked them to

class BankAccount {
    constructor(balance) {
      this.balance = balance;
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds!");
      } else {
        this.balance -= amount;
        console.log(`Withdrawn: $${amount}`);
      }
    }
  }
  
  const account = new BankAccount(1000);
  account.balance -= 500; 
  
  console.log(account.balance);

  //wa ba bona akere?

  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log("The animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    speak() {
      console.log("The dog barks");
    }
  }
  
  const animal = new Animal("Max");
  animal.speak(); 
  
  const dog = new Dog("Buddy", "Golden Retriever");
  dog.speak(); 
  
  const animalDog = new Dog("Max", "Labrador");
  animalDog.speak(); 