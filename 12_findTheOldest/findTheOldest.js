function age(person) {
    if(person.yearOfDeath === undefined) {
        const currentYear = (new Date()).getFullYear() ; 
        return currentYear - person.yearOfBirth; 
    }

    return person.yearOfDeath - person.yearOfBirth;
}

function compareAge(person1, person2) {
    const age1 = age(person1);
    const age2 = age(person2);
    if(age1 > age2) {
        return 1;
    }
    else if(age1 == age2) {
        return 0;
    }
    else {
        return -1;
    }
}

const findTheOldest = function(people) {
    return people.
        sort((person1, person2) => compareAge(person1, person2))[people.length-1]; 
};

// Do not edit below this line
module.exports = findTheOldest;
