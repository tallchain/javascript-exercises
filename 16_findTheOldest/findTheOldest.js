const findTheOldest = function(people) {
const d = new Date().getFullYear()
people.forEach(e=> {
    if(!e.hasOwnProperty("yearOfDeath")){e.yearOfDeath=d}
})
people.sort((a, b) => {
    const currentPerson = a.yearOfDeath - a.yearOfBirth
    const nextPerson = b.yearOfDeath - b.yearOfBirth
    return (currentPerson > nextPerson) ? -1 : 1})
    return people[0]
}

// Do not edit below this line
module.exports = findTheOldest;
