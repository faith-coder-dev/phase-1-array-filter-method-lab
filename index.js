// Code your solution here
// Function 1: Case-insensitive match
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function 2: Match beginning of the string
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Function 3: Match object's name property
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

// Export functions for testing
module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};
