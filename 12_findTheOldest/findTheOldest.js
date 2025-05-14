const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.reduce((oldest, person) => {
        const deathYear = person.yearOfDeath || currentYear;
        const age = deathYear - person.yearOfBirth;
        
        const oldestDeathYear = oldest.yearOfDeath || currentYear;
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;
        
        return age > oldestAge ? person : oldest;
    });
};


// Do not edit below this line
module.exports = findTheOldest;
