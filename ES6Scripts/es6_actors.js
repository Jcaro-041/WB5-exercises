let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
];

// Who is the Academy Member whose ID is 187?
// Who has been in at least 3 films?
// Who has a name that starts with "Bob"?
// HARDER: Which Academy Members have been in a film
// that starts with "A"

// 1 
let memberId = academyMembers.find(i => i.memID == 187);
console.log(memberId.name);

// 2
let filmThree = academyMembers.filter(f => f.films.length >= 3);
actorsThree = filmThree.map(function(actors){
    return{
        names: academyMembers.name
    }
});
console.table(actorsThree);