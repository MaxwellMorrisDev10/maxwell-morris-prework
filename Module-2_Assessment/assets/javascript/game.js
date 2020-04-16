// Define answers 
const dictionary = ['Bear', 'Lion', 'Tiger', 'Elephant', 'Monkey', 'Alligator', 'Wolf', 'Snake'];

// Generate random answer 
const word = dictionary[Math.floor(Math.random() * dictionary.length)]

// Generate dashes for #word-space  
const wordField = document.querySelector('#word-space')

let wordDashes = [];
for (i = 0; i < word.length; i++) {
    wordDashes = "_"
}

wordField.innerHTML = wordDashes;

//Generate remaining letters 
let remainingLetters = word.length