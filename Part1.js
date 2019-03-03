/* Lab 5, Part 1 - write the code requested by lines marked //TODO  */
// I have changed completed tasks from "TODO" to "TODONE".

console.log("");


/* a. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */

var rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194,
    "CHF": 1.1787
};

// TODONE add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
// TODONE if you had 100 Euros, calculate the equivalent value in Australian Dollars (AUD)
// TODONE write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

var valueOf100EurosInAustralianDollars = (100 * rates.AUD).toFixed(2);
console.log("100 Euros is worth " + valueOf100EurosInAustralianDollars + " Australian dollars.");

function getCheapestCurrency() {
    const countriesArray = Object.keys(rates);
    const ratesArray = Object.values(rates);

    //console.log(countriesArray[0]);
    //console.log(ratesArray[0]);

    var cheapestCurrency = countriesArray[0];
    var cheapestExchangeRate = 0;
    for (index = 0; index < ratesArray.length; index++) {
        if (ratesArray[index] > cheapestExchangeRate) {
            cheapestExchangeRate = ratesArray[index];
            cheapestCurrency = countriesArray[index];
        }
    }

    console.log("The code for the currency with the highest exchange rate is " + cheapestCurrency + " at " + cheapestExchangeRate + " per Euro.")
}

getCheapestCurrency();
console.log("");

/* b. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th, fetched from http://api.open-notify.org/iss-now.json.
 */

var iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
};

// TODONE Extract the latitude value, and log it to the console.
// TODONE Extract the longitude value, and log it to the console.

console.log("Latitude of ISS at 1pm on Jan 12: " + iss_location.iss_position.latitude);
console.log("Longitude of ISS at 1pm on Jan 12 " + iss_location.iss_position.longitude);
console.log("");


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

var cats_and_owners = [
    { name: 'Bill Clinton', cat : 'Socks' },
    { name: 'Gary Oldman', cat : 'Soymilk' },
    { name: 'Katy Perry', cat : 'Kitty Purry' },
    { name: 'Snoop Dogg', cat : 'Miles Davis' },
    { name: "Taylor Swift", cat: "Meredith"}
];

// TODONE print Gary Oldman's cat's name
// TODONE Taylor Swift's cat is called  'Meredith'. Add this data to the array.
// TODONE write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.

function printCatIfGaryOldman(entry) {
    //console.log(entry)
    if (entry.name == "Gary Oldman") {
        console.log("Gary Oldman's cat is named " + entry.cat);
    }
}

function printOwnerAndCat(entry) {
    console.log(entry.name + " has a cat named " + entry.cat);
}

cats_and_owners.forEach(printCatIfGaryOldman);
console.log("");
cats_and_owners.forEach(printOwnerAndCat);
console.log("");



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

// TODONE print the full name of the Literature Nobel laureate.
// TODONE print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// TODONE write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODONE write code to print the total number of prize categories
// TODONE write code to count the total number of laureates from 2017. (have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.)

var nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
};

const prizes = nobel_prize_winners_2017.prizes;

//Print name of Literature laureat:
function printIfLiterature(entry) {
    if (entry.category == "literature") {
        const laureate = entry.laureates[0];
        console.log("Literature Laureate: " + laureate.firstname + " " + laureate.surname)
    }
}

prizes.forEach(printIfLiterature);
console.log("");


// Print IDs for physics laureates:
function printIDs(entry) {
    console.log("A Nobel in physics awarded to " + entry.firstname + " " + entry.surname + " with ID of:  " + entry.id);
}

function printIDsIfPhysics(entry) {
    if (entry.category == "physics") {
        const laureatesList = entry.laureates;
        //console.log(laureatesList);
        laureatesList.forEach(printIDs);
    }
}

prizes.forEach(printIDsIfPhysics);
console.log("");


// Print all the categories:
function printCategory(entry) {
    console.log(entry.category);
}
console.log("Prize Categories:")
prizes.forEach(printCategory);
console.log("");


// Print the number of prize categories:
var numCategories = 0;
function incrementNumCategories(entry) {
    numCategories++;
}
prizes.forEach(incrementNumCategories);
console.log("Number of prize categories: " + numCategories);


// Print the total number of laureates since 2017:
var numLaureates = 0;
function incrementNumLaureates(entry) {
    numLaureates++;
    //console.log(entry.firstname + " " + entry.surname);   // testing.
}
function countNumLaureates(category) {
    const laureatesList = category.laureates;
    laureatesList.forEach(incrementNumLaureates);
}
prizes.forEach(countNumLaureates);
console.log("Total number of laureates since 2017: " + numLaureates);
console.log("");

