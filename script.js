// National Parks Data Lab - Starter File
// U.S. National Park Service Data Analysis Practice
//
// Work through each task in order.
// Your results appear on the page in the browser.
// Save this file and refresh the browser after each change.
//
// Three display functions are available (defined in display.js):
//
//   showSection("title")            - adds a labeled section header to the page
//   show("label", value)            - displays any value on the page
//   showTable("label", array)       - displays an array of objects as a table
//
// Loop tasks still use console.log() inside the loop body.
// Open DevTools (F12 / Cmd+Option+I) to see console output.

// ============================================================
// PART 1: ARRAYS
// ============================================================

showSection("Part 1: Arrays");

// ---- Task 1: Create an Array ----
// Create a const variable called parkNames.
// Assign it an array of at least 6 U.S. national park names as strings.
// Display the array using show().

// TODO: Create the parkNames array here

const parkNames = ["Yellowstone", "Grand Canyon", "Yosemite", "Zion", "Great Smoky Mountains", "Glacier"];

// TODO: show("Task 1: Parks Array", parkNames)

show("Task 1: Parks Array", parkNames);

// ---- Task 2: Access Elements by Index ----
// Remember: the first element is at index 0.
// Display the first park, the last park, and any park in the middle.
// Hint: use parkNames.length - 1 to get the index of the last item.
// Use show() for each one.

// TODO: show the first park using bracket notation

show("Task 2: First Park", parkNames[0]);

// TODO: show the last park using parkNames.length - 1

show("Task 2: Last Park", parkNames[parkNames.length - 1]);

// TODO: show any park in the middle

show("Task 2: Middle Park", parkNames[parkNames.length / 2]);

// ---- Task 3: Loop with a Standard for Loop ----
// Write a for loop that goes through every item in parkNames.
// Inside the loop, use console.log() to log: "Park #0: Yellowstone", etc.
// Use the index variable to show the position number and the value.

show("Task 3: Standard for Loop", "Check console");

// TODO: Write a for loop here

for (let i = 0; i < parkNames.length; i++) {
  const currentPark = parkNames[i];
  console.log("Park #" + i + ": " + currentPark);
}

// ---- Task 4: Loop with for...of ----
// Write a for...of loop that goes through every item in parkNames.
// Use console.log() inside the loop to log each park name.

show("Task 4: for...of Loop", "Check console");

// TODO: Write a for...of loop here

for (const park of parkNames) {
  console.log(park);
}

// ---- Task 5: Loop with forEach ----
// Call .forEach() on parkNames.
// Pass a function that receives each park name and logs it with console.log().

show("Task 5: forEach", "Check console");

// TODO: Call parkNames.forEach() here

parkNames.forEach(function (park) {
  console.log(park);
});

// ---- Task 6: Use map() to Transform the Array ----
// Use .map() to create a new array called officialNames.
// Each item should be the park name with " National Park" added to the end.
// Example: "Yellowstone" becomes "Yellowstone National Park"
// Show both the original and the new array. The original should not change.

// TODO: Create officialNames using .map()

const officialNames = parkNames.map(function (park) {
  return park + " National Park";
});

// TODO: show("Task 6: Original parkNames (unchanged)", parkNames)

show("Task 6: Original parkNames (unchanged)", parkNames);

// TODO: show("Task 6: officialNames from map()", officialNames)

show("Task 6: officialNames from map()", officialNames);

// ---- Task 7: Use filter() to Narrow Down ----
// Use .filter() to create a new array called longParkNames.
// Include only park names that are longer than 7 characters.
// Show the new array.

// TODO: Create longParkNames using .filter()

const longParkNames = parkNames.filter(function (park) {
  return park.length > 7;
});

// TODO: show("Task 7: Names longer than 7 characters", longParkNames)

show("Task 7: Names longer than 7 characters", longParkNames);

// ---- Task 8: Use find() to Locate One Item ----
// Use .find() on parkNames to get the first park name that starts with "G".
// Store the result in a variable called firstGPark.
// Show the result.
// Note: find() returns a single value, not an array.

// TODO: Use .find() here

const firstGPark = parkNames.find(function (park) {
  return park[0] === "G";
});

// TODO: show("Task 8: First park starting with G", firstGPark)

show("Task 8: First park starting with G", firstGPark);

// ============================================================
// PART 2: OBJECTS
// ============================================================

showSection("Part 2: Objects");

// ---- Task 9: Create an Empty Object and Add Properties ----
// Create a const variable called myPark assigned to an empty object {}.
// Then, on separate lines, add these properties one at a time:
//   name, state, established (a year), entranceFee (a number), isWilderness (true)
// Show myPark after adding all the properties.

// TODO: Create myPark as an empty object

const myPark = {};

// TODO: Add name, state, established, entranceFee, isWilderness properties

myPark.name = "Grand Canyon";
myPark.state = "Arizona";
myPark.established = 1919;
myPark.entranceFee = 35;
myPark.isWilderness = true;

// TODO: show("Task 9: myPark (built property by property)", myPark)

show("Task 9: myPark (built property by property)", myPark);

// ---- Task 10: Create an Object with Literal Notation ----
// Create a const variable called otherPark using object literal notation.
// Define these properties inside the curly braces:
//   name, state, established, entranceFee
// Also add a property with a space in its name: "managed by" set to "National Park Service"
// Also add a nested object called location with properties: region and latitude
// Show otherPark after creating it.

// TODO: Create otherPark with object literal notation here

const otherPark = {
  name: "Yosemite",
  state: "California",
  established: 1890,
  entranceFee: 35,
};

otherPark["managed by"] = "National Park Service";

otherPark.location = {
  region: "West",
  latitude: 37.8651,
};

// TODO: show("Task 10: otherPark (object literal)", otherPark)

show("Task 10: otherPark (object literal)", otherPark);

// ---- Task 11: Dot Notation Access ----
// Show the name and the established year from otherPark using dot notation.

// TODO: show("Task 11: otherPark.name", otherPark.name)

show("Task 11: otherPark.name", otherPark.name);

// TODO: show("Task 11: otherPark.established", otherPark.established)

show("Task 11: otherPark.established", otherPark.established);

// ---- Task 12: Bracket Notation Access ----
// Show the state and the entranceFee from otherPark using bracket notation.
// Then create a variable called propertyToAccess set to the string "name"
// and use that variable inside bracket notation to access the property.

// TODO: show("Task 12: otherPark[\"state\"]", otherPark["state"])

show('Task 12: otherPark["state"]', otherPark["state"]);

// TODO: show("Task 12: otherPark[\"entranceFee\"]", otherPark["entranceFee"])

show('Task 12: otherPark["entranceFee"]', otherPark["entranceFee"]);

// TODO: Create propertyToAccess and use it inside bracket notation

const propertyToAccess = "name";

show("Task 12: otherPark[propertyToAccess]", otherPark[propertyToAccess]);

// ---- Task 13: Access a Property with a Space in the Name ----
// Dot notation causes a SyntaxError for property names that contain a space.
// Use bracket notation to show the value of the "managed by" property.

// TODO: show("Task 13: otherPark[\"managed by\"]", otherPark["managed by"])

show('Task 13: otherPark["managed by"]', otherPark["managed by"]);

// ---- Task 14: Delete a Property ----
// Use the delete keyword to remove the entranceFee property from otherPark.
// Show the value of otherPark.entranceFee before and after deletion.
// Show the full otherPark object after deletion to confirm it is gone.

// TODO: show the value of entranceFee BEFORE delete

show("Task 14: otherPark.entranceFee before deletion", otherPark.entranceFee);

// TODO: delete otherPark.entranceFee

delete otherPark.entranceFee;

// TODO: show the value of entranceFee AFTER delete (should be undefined)

show("Task 14: otherPark.entranceFee after deletion", otherPark.entranceFee);

// TODO: show the full otherPark object

show("Task 14: otherPark full object after deletion", otherPark);

// ---- Task 15: Access Nested Objects ----
// Access the region value inside otherPark.location.
// First do it the longhand way (using an intermediate variable),
// then do it the shorthand way (chained dot notation).
// Show both results.

// TODO: Longhand - store otherPark.location in a variable, then access region from it

const locationVariable = otherPark.location;

// TODO: show the region value from your intermediate variable

show("Task 15: Access Nested Objects - Longhand Location Variable", locationVariable);

const regionValue = locationVariable.region;

show("Task 15: Access Nested Objects - Longhand Region Value", regionValue);

// TODO: show("Task 15 shorthand", otherPark.location.region)

show("Task 15: Access Nested Objects - Shorthand Region Value", otherPark.location.region);

// ---- Task 16: Add a Method to an Object ----
// Add a method called getDescription to myPark.
// The method should return a sentence like:
//   "Yellowstone was established in 1872 in Wyoming"
// Call the method and show the result.

// TODO: Add a getDescription method to myPark
// Hint: myPark.getDescription = function() { ... }

myPark.getDescription = function () {
  return myPark.name + " was established in " + myPark.established + " in " + myPark.state + ".";
};

// TODO: show("Task 16: myPark.getDescription()", myPark.getDescription())

show("Task 16: myPark.getDescription()", myPark.getDescription());

// ---- Task 17: Use 'this' Inside a Method ----
// Create a new const variable called featuredPark using object literal notation.
// Give it: name, state, established, annualVisitors, and two methods:
//   getLabel    - returns "[name] National Park ([state])"
//   getAge      - returns how many years since it was established (use 2026)
// Inside both methods, use the 'this' keyword.
// Show both method results.
//
// Important: use the 'function' keyword, not an arrow function.
// Arrow functions do not have their own 'this'.

// TODO: Create featuredPark with getLabel and getAge methods using 'this'

const featuredPark = {
  name: "Zion",
  state: "Utah",
  established: 1919,
  annualVisitors: 4692417,
};

featuredPark.getLabel = function () {
  return this.name + " National Park " + this.state;
};

featuredPark.getAge = function () {
  return 2026 - this.established;
};

// TODO: show("Task 17: featuredPark.getLabel()", featuredPark.getLabel())

show("Task 17: featuredPark.getLabel()", featuredPark.getLabel());

// TODO: show("Task 17: featuredPark.getAge()", featuredPark.getAge())

show("Task 17: featuredPark.getAge()", featuredPark.getAge());

// ============================================================
// PART 3: ARRAYS OF OBJECTS
// ============================================================

showSection("Part 3: Arrays of Objects");

// ---- Task 18: Create an Array of Park Objects ----
// Create a const variable called parks.
// Assign it an array of at least 5 park objects.
// Each object should have: name, state, established, areaSqMiles, annualVisitors, entranceFee
// Display the array as a table using showTable().

// TODO: Create the parks array of park objects

const parks = [
  {
    name: "Yellowstone",
    state: "Wyoming",
    established: 1872,
    areaSqMiles: 3471,
    annualVisitors: 4860552,
    entranceFee: 35,
  },
  {
    name: "Grand Canyon",
    state: "Arizona",
    established: 1919,
    areaSqMiles: 1902,
    annualVisitors: 4732368,
    entranceFee: 35,
  },
  {
    name: "Yosemite",
    state: "California",
    established: 1890,
    areaSqMiles: 1169,
    annualVisitors: 3900000,
    entranceFee: 35,
  },
  {
    name: "Zion",
    state: "Utah",
    established: 1919,
    areaSqMiles: 229,
    annualVisitors: 4600000,
    entranceFee: 35,
  },
  {
    name: "Great Smoky Mountains",
    state: "Tennessee",
    established: 1934,
    areaSqMiles: 816,
    annualVisitors: 13000000,
    entranceFee: 0,
  },
  {
    name: "Glacier",
    state: "Montana",
    established: 1910,
    areaSqMiles: 1583,
    annualVisitors: 2933616,
    entranceFee: 35,
  },
];

// TODO: showTable("Task 18: Parks Inventory", parks)

showTable("Task 18: Parks Inventory", parks);

// ---- Task 19: Loop Through the Array of Objects ----
// Use .forEach() to loop through parks.
// For each park, use console.log() to log a sentence like:
//   "Yellowstone (Wyoming) - Est. 1872"

show("Task 19: Loop through Parks", "Check console");

// TODO: Loop through parks with .forEach() and console.log each one

parks.forEach(function (park) {
  console.log(park.name + " (" + park.state + ") - Est. " + park.established);
});

// ---- Task 20: Filter the Parks Array ----
// Use .filter() twice:
//   1. Create freeParks - parks where entranceFee === 0
//   2. Create busyParks - parks where annualVisitors > 4000000
// Show both results as tables using showTable().

// TODO: Create freeParks using .filter()

const freeParks = parks.filter(function (park) {
  return park.entranceFee === 0;
});

// TODO: showTable("Task 20: Free parks", freeParks)

showTable("Task 20: Free parks", freeParks);

// TODO: Create busyParks using .filter()

const busyParks = parks.filter(function (park) {
  return park.annualVisitors > 4000000;
});

// TODO: showTable("Task 20: Busy parks (4M+ visitors)", busyParks)

showTable("Task 20: Busy parks (4M+ visitors)", busyParks);

// ---- Task 21: Map the Parks Array to Labels ----
// Use .map() to create a new array called parkLabels.
// Each item should be a string in the format:
//   "Yellowstone - Wyoming (1872)"
// Show the result using show().

// TODO: Create parkLabels using .map()

const parkLabels = parks.map(function (park) {
  return park.name + " - " + park.state + " (" + park.established + ")";
});

// TODO: show("Task 21: Park labels from map()", parkLabels)

show("Task 21: Park labels from map()", parkLabels);

// ============================================================
// PART 4: OBJECT MANIPULATION
// ============================================================

showSection("Part 4: Object Manipulation");

// ---- Task 22: Copy an Object with Object.assign() ----
// Create a const variable called basePark with at least 4 properties.
// Use Object.assign() to create a copy called updatedPark.
//   Syntax: Object.assign({}, sourceObject)
// Change one property on updatedPark.
// Show both objects to confirm the original was not affected.

// TODO: Create basePark

const basePark = {
  name: "Yosemite",
  state: "California",
  established: 1890,
  areaSqMiles: 1169,
  annualVisitors: 3900000,
  entranceFee: 35,
};

// TODO: Copy it into updatedPark using Object.assign({}, basePark)

const updatedPark = Object.assign({}, basePark);

// TODO: Change one property on updatedPark

updatedPark.entranceFee = 0;

// TODO: show("Task 22: Original basePark (unchanged)", basePark)

show("Task 22: Original basePark (unchanged)", basePark);

// TODO: show("Task 22: updatedPark with changed property", updatedPark)

show("Task 22: updatedPark with changed property", updatedPark);

// ---- Task 23: Reference vs Value ----
// Part A: Primitive copy by value
//   Create a let variable called originalFee set to 35.
//   Assign it to a new let variable called saleFee.
//   Change saleFee to 0.
//   Show both - originalFee should still be 35.
//
// Part B: Object copy by reference
//   Create a const called parkA with name and entranceFee properties.
//   Assign parkA to a new const called parkB (plain = assignment, no Object.assign).
//   Change entranceFee on parkB.
//   Show both - what do you notice about parkA?
//
// Part C: Object equality
//   Create park1 and park2 with identical properties but as separate objects.
//   Show park1 === park2 - what does it return and why?

// TODO: Part A - primitive copy demo

let originalFee = 35;

let saleFee = originalFee;

saleFee = 0;

show("Task 23 Part A: Primitive Copy Demo - originalFee", originalFee);

show("Task 23 Part A: Primitive Copy Demo - saleFee", saleFee);

// TODO: Part B - object reference demo

const parkA = {
  name: "Yosemite",
  entranceFee: 35,
};

const parkB = parkA;

parkB.entranceFee = 25;

show("Task 23 Part B: Object Copy By Reference - parkA", parkA);

show("Task 23 Part B: Object Copy By Reference - parkB", parkB);

// Both parkA.entranceFee and parkB.entranceFee are changes because both parkA and parkB point to the same object in memory

// TODO: Part C - object equality demo

const park1 = {
  name: "Yosemite",
  entranceFee: 35,
};

const park2 = {
  name: "Yosemite",
  entranceFee: 35,
};

show("Task 23 Part C: Object Equality Demo - park1 === park2", park1 === park2);

// It returns false because these are two different objects in memory although their properties are exactly the same

// ---- Task 24: const with Objects and Arrays ----
// Part A: Create a const object called myFavoritePark with a name property.
//   Change the name property to something different.
//   Show that the change worked.
//
// Part B: Write the line that would try to reassign myFavoritePark to a new object.
//   Comment it out so the file still runs.
//   Add a comment explaining what error it would throw.
//
// Part C: Create a const array called parkList with two park names.
//   Push a third park name onto it using .push().
//   Show that the new item is there.

// TODO: Part A - mutating a const object

const myFavoritePark = {
  name: "Yosemite",
};

show("Task 24 Part A: myfavoritePark.name original", myFavoritePark.name);

// TODO: show("Task 24 Part A: myFavoritePark after property change", myFavoritePark)

myFavoritePark.name = "Glacier";

show("Task 24 Part A: myfavoritePark.name changed", myFavoritePark.name);

// TODO: Part B - commented-out reassignment with error explanation

try {
  myFavoritePark = {
    name: "Glacier",
  };
} catch (error) {
  show("Task 24 Part B: myfavoritePark reassignment error", error.name + ": " + error.message);
}

// const variables cannot be reassigned; only properties within the arrays/objects they contain can be changed; primitives cannot be changed at all

// TODO: Part C - mutating a const array

const parkList = ["Yosemite", "Glacier"];

show("Task 24 Part C: parkList before .push()", parkList);

// TODO: show("Task 24 Part C: parkList after .push()", parkList)

parkList.push("Yellowstone");

show("Task 24 Part C: parkList after .push()", parkList);
