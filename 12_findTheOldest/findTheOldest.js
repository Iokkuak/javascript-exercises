function age(person) {
    if(person.yearOfDeath === undefined) {
        const currentYear = (new Date()).getFullYear() ; 
        return currentYear - person.yearOfBirth; 
    }

    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.
        reduce((oldest, current) => {
            const oldestAge = age(oldest);
            const currentAge = age(current);

            return oldestAge > currentAge? oldest : current;
        });
};

// Do not edit below this line
module.exports = findTheOldest;
