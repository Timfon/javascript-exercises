const findTheOldest = function(people) {

    //returns a person object
    oldPeople = {}
    maxAge = 0
    for (let i = 0; i < people.length; i++) { //store the index!
        if ("yearOfDeath" in people[i]) {
            age = people[i].yearOfDeath - people[i].yearOfBirth
            oldPeople[age] = people[i] 
            maxAge = Math.max(maxAge, age)
        } else {
            age = 2023 - people[i].yearOfBirth
            oldPeople[age] = people[i]
            maxAge = Math.max(maxAge, age)
        }
    }
    return oldPeople[maxAge]

};

// Do not edit below this line
module.exports = findTheOldest;
