//takes in a string and returns an array of words
function tokenize(inputString) {
    return inputString.split(' ');
}

//takes in an array of words and returns an object with the frequency of each word
function findWordFreq(words) {
    // Initialize a word count object
    const wordCounts = {};

    // Loop through the words and increment the counter for each one
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (word.length > 0) {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
    }

    return wordCounts;
}

function combineWordAndFreq(wordCounts, wordCountArray) {
    const top5 = {};

    //loop through wordCountArray and add the words and their frequencies to top5
    for (let i = 0; i < wordCountArray.length; i++) {
        let commonWord = wordCountArray[i].toLowerCase();
        if (commonWord.length > 0) {
            top5[commonWord] = wordCounts[commonWord];
        }
    }

    return top5;
}

function findMostCommonWords(inputString) {
    // Split the string into words
    const words = tokenize(inputString);

    //Find the frequency of each word
    const wordCounts = findWordFreq(words);

    // Convert the word count object to an array of [word, count] pairs
    const wordCountArray = Object.entries(wordCounts);

    // Sort the array by count in descending order
    wordCountArray.sort((a, b) => b[1] - a[1]);

    // Return the top 5 most common words
    const top5 = wordCountArray.slice(0, 5).map(pair => pair[0]); 

    //combine the top 5 words with their frequencies
    const top5Freq = combineWordAndFreq(wordCounts, top5);
    console.log(top5Freq);
}

//DOMContentLoaded to prevent error on unloaded content
document.addEventListener('DOMContentLoaded', function() {
    
    //create textarea
    const textarea = document.createElement('textarea');

    //create submit button
    const submit = document.createElement('button');
    submit.innerHTML = "SUBMIT";
    submit.onclick = function(){
        findMostCommonWords(textarea.value);
    }


    // Append the "li" node to the list:
    document.getElementById("root").appendChild(textarea);
    document.getElementById("root").appendChild(submit);
});



