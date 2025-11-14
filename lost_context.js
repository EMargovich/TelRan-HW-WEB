//
// class User {
//     constructor(nickName) {
//         this.nickName = nickName;
//     }
//     infoFunction = function () {
//         console.log(`${this.nickName}`);
//     }
// }
//
// const kir = new User('Kir');
//
// kir.infoFunction();
//
// const name = kir.infoFunction.bind(kir);
// console.log(name);
// name();
//
// kir.infoFunction.call({ nickName: "Kir" }, "Mrs", "!");
// kir.infoFunction.apply({ nickName: "Kir" }, ["Mrs", "!"]);

let group = {
    title: "Carmiel 2025 - 2026",
    students: ['Kir', 'Masha', 'Oleg'],
    showList: function () {
        const show = function (name){
            console.log(`${this.title}: ${name}`)
        }
        this.students.forEach(show)
    }
};

group.showList();

console.log('First try: use bind()');

let group1 = {
    title: "Carmiel 2025 - 2026",
    students: ['Kir', 'Masha', 'Oleg'],
    showList: function () {
        const show = function (name){
            console.log(`${this.title}: ${name}`)
        }
        this.students.forEach(show.bind(this));
    }
};

group1.showList();

console.log('Second try: set parameter with link to this in outer function');

let group2 = {
    title: "Carmiel 2025 - 2026",
    students: ['Kir', 'Masha', 'Oleg'],
    showList: function (t = this.title) {
        const show = function (name){
            console.log(`${t}: ${name}`)
        }
        this.students.forEach(show);
    }
};

group2.showList();

console.log('Third try: second parameter in inner function');

let group3 = {
    title: "Carmiel 2025 - 2026",
    students: ['Kir', 'Masha', 'Oleg'],
    showList: function () {
        const show = function (name, t){
            console.log(`${t}: ${name}`)
        }
        this.students.forEach((name) => show(name, this.title));
    }
};

group3.showList();

console.log('Four try: use const instead of function in inner function');

let group4 = {
    title: "Carmiel 2025 - 2026",
    students: ['Kir', 'Masha', 'Oleg'],
    showList: function () {
        const show = (name) => {
            console.log(`${this.title}: ${name}`)
        }
        this.students.forEach(show)
    }
};

group4.showList();

console.log('Five try: save this in const in outer function and use this constant in inner function === second try');

let group5 = {
    title: "Carmiel 2025 - 2026",
    students: ['Kir', 'Masha', 'Oleg'],
    showList: function () {
        const newThis = this;
        const show = function (name){
            console.log(`${newThis.title}: ${name}`)
        }
        this.students.forEach(show)
    }
};

group5.showList();
//Repair bag four ways