// let extractStr = "Extract the word 'coding'  from coding this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line
// console.log(result);



/**
 * wild card
 */ 
// let exampleStr = "Let's have sun with regular expressions!";
// let unRegex = /.un/; // Change this line
// let result = unRegex.test(exampleStr);
// console.log(result);

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result);


// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);

// negated 
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou|0-9]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result[1] );



// one or more
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/gi; // Change this line
// let result = difficultSpelling.match(myRegex);

// console.log(result);



// zero or more *










// lazy matching
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.+?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);






// character class shortcut => \w
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;

// console.log(result);

// the opposite of an alphanumeric character class shortcut => \W
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\W/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2);

// console.log(result);



// the  alphanumeric digit[0-9] class shortcut => \d
// let quoteSample = "2020 is a special year";
// let alphabetRegexV2 = /\d/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2);

// console.log(result);




// the opposite  alphanumeric digit[0-9] class shortcut => \D
// let quoteSample = "2020 is a special year";
// let alphabetRegexV2 = /\D/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2);

// console.log(result);


//   the  whitespace class shortcut => \s
// let quoteSample = "2020 is a special year";
// let alphabetRegexV2 = /\s/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2);

// console.log(result);












//the   non-whitespace class shortcut => \S
// let quoteSample = "2020 is a special year";
// let alphabetRegexV2 = /\S/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2);

// console.log(result);















