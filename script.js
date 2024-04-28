let FIRSTWORD = "";
let FIRSTFREQ = 0;
let SECONDWORD = "";
let SECONDFREQ = 0;
let THIRDWORD = "";
let THIRDFREQ= 0;
let FOURTHWORD = "";
let FOURTHFREQ = 0;
let FIFTHWORD = ""; 
let FIFTHFREQ = 0;

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

    //Alphabetize the array in increasing order
    wordCountArray.sort((a, b) => a[0] - b[0]);

    // Sort the array by count in descending order
    wordCountArray.sort((a, b) => b[1] - a[1]);

    // Return the top 5 most common words
    const top5 = wordCountArray.slice(0, 5).map(pair => pair[0]); 


    //combine the top 5 words with their frequencies
    const top5Freq = combineWordAndFreq(wordCounts, top5);
    console.log(top5Freq);

    return wordCountArray;
}

//DOMContentLoaded to prevent error on unloaded content
document.addEventListener('DOMContentLoaded', function() {
    
    //create textarea
    const textarea = document.createElement('textarea');
    textarea.innerHTML = "Enter text here...";

    //create the table element
    const table = document.createElement('table');
    table.style.color = "lightblue"; 
        //create the table caption
    const tableCaption = document.createElement('caption'); 
    tableCaption.innerHTML = "Top 5 Most Common Words";
    tableCaption.style.color = "lightblue";

        //create the table header
    const tableHeader = document.createElement('thead');
    const tableRow0 = document.createElement('tr');
    const tableHeader1 = document.createElement('th');
    
    const tableHeader2 = document.createElement('th');
    tableHeader.appendChild(tableRow0);
    tableRow0.appendChild(tableHeader1);
    tableRow0.appendChild(tableHeader2);

        //create the table body
    const tableBody = document.createElement('tbody');

            //create the first row
    const tableRow1 = document.createElement('tr');
    const tableDataWord1 = document.createElement('td');
    const tableDataFreq1 = document.createElement('td');
    tableRow1.appendChild(tableDataWord1);
    tableRow1.appendChild(tableDataFreq1);

            //create the second row
    const tableRow2 = document.createElement('tr');
    const tableDataWord2 = document.createElement('td');
    const tableDataFreq2 = document.createElement('td');
    tableRow2.appendChild(tableDataWord2);
    tableRow2.appendChild(tableDataFreq2);

            //create the third row
    const tableRow3 = document.createElement('tr');
    const tableDataWord3 = document.createElement('td');
    const tableDataFreq3 = document.createElement('td');
    tableRow3.appendChild(tableDataWord3);
    tableRow3.appendChild(tableDataFreq3);

            //create the fourth row
    const tableRow4 = document.createElement('tr');
    const tableDataWord4 = document.createElement('td');
    const tableDataFreq4 = document.createElement('td');
    tableRow4.appendChild(tableDataWord4);
    tableRow4.appendChild(tableDataFreq4);

            //create the fifth row
    const tableRow5 = document.createElement('tr');
    const tableDataWord5 = document.createElement('td');
    const tableDataFreq5 = document.createElement('td');
    tableRow5.appendChild(tableDataWord5);
    tableRow5.appendChild(tableDataFreq5);

    tableBody.appendChild(tableRow1);
    tableBody.appendChild(tableRow2);
    tableBody.appendChild(tableRow3);
    tableBody.appendChild(tableRow4);
    tableBody.appendChild(tableRow5);
    table.appendChild(tableCaption);table.style.color = "darkblue"; 
    table.appendChild(tableHeader);
    table.appendChild(tableBody);

    //create an array of all the table data
    let allWords = [tableDataWord1, tableDataWord2, tableDataWord3, tableDataWord4, tableDataWord5];
    let allFreqs = [tableDataFreq1, tableDataFreq2, tableDataFreq3, tableDataFreq4, tableDataFreq5];

    //create submit button
    const submit = document.createElement('button');
    submit.innerHTML = "SUBMIT";
    submit.onclick = function(){
        let wordCountArray = findMostCommonWords(textarea.value);
        textarea.value = "";
        table.style.color = "darkblue"; //will make ordered list "appear"
        tableCaption.style.color = "darkblue";
        tableHeader1.innerHTML = "Word Name";
        tableHeader1.style.color = "darkblue";
        tableHeader2.innerHTML = "Word Frequency";
        tableHeader2.style.color = "darkblue";
        

        //update the table items with the top 5 most common words
        for (let i = 0; i < 5; i++) {
            
            if (wordCountArray.length > i) {
                allWords[i].innerHTML = wordCountArray[i][0];
                allFreqs[i].innerHTML = wordCountArray[i][1];
                allWords[i].style.color = "darkblue"; 
                allFreqs[i].style.color = "darkblue";
            } else {
                allWords[i].style.color = "lightblue"; 
                allFreqs[i].style.color = "lightblue";
            }
        }
    }

    //append the textarea and submit button to the root div:
    document.getElementById("root").appendChild(textarea);
    document.getElementById("root").appendChild(submit);
    document.getElementById("root").appendChild(table);
});



