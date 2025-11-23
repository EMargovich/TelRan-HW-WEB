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

debugger;
let group = {
    title: "Carmiel 2025 - 2026",
    students: ['Kir', 'Masha', 'Oleg'],
    showList: function () {
        const show = function (name){
            debugger;
            console.log(`${this.title}: ${name}`)
        }
        this.students.forEach(show)
    }
};

// group.showList();
//
// console.log('First try: use bind()');
//
// let group1 = {
//     title: "Carmiel 2025 - 2026",
//     students: ['Kir', 'Masha', 'Oleg'],
//     showList: function () {
//         const show = function (name){
//             console.log(`${this.title}: ${name}`)
//         }
//         this.students.forEach(show.bind(this));
//     }
// };
//
// group1.showList();
//
// console.log('Second try: set parameter with link to this in outer function');
//
// let group2 = {
//     title: "Carmiel 2025 - 2026",
//     students: ['Kir', 'Masha', 'Oleg'],
//     showList: function (t = this.title) {
//         const show = function (name){
//             console.log(`${t}: ${name}`)
//         }
//         this.students.forEach(show);
//     }
// };
//
// group2.showList();
//
// console.log('Third try: second parameter in inner function');
//
// let group3 = {
//     title: "Carmiel 2025 - 2026",
//     students: ['Kir', 'Masha', 'Oleg'],
//     showList: function () {
//         const show = function (name, t){
//             console.log(`${t}: ${name}`)
//         }
//         this.students.forEach((name) => show(name, this.title));
//     }
// };
//
// group3.showList();
//
// console.log('Four try: use const instead of function in inner function');
//
// let group4 = {
//     title: "Carmiel 2025 - 2026",
//     students: ['Kir', 'Masha', 'Oleg'],
//     showList: function () {
//         const show = (name) => {
//             console.log(`${this.title}: ${name}`)
//         }
//         this.students.forEach(show)
//     }
// };
//
// group4.showList();
//
// console.log('Five try: save this in const in outer function and use this constant in inner function === second try');
//
// let group5 = {
//     title: "Carmiel 2025 - 2026",
//     students: ['Kir', 'Masha', 'Oleg'],
//     showList: function () {
//         const newThis = this;
//         const show = function (name){
//             console.log(`${newThis.title}: ${name}`)
//         }
//         this.students.forEach(show)
//     }
// };
//
// group5.showList();
//
// console.log("6: set global parameter")
//
// title = "Carmiel 2025 - 2026";
//
// let group6 = {
//     //title: "Carmiel 2025 - 2026",
//     students: ['Kir', 'Masha', 'Oleg'],
//     showList: function () {
//         const show = function (name){
//             debugger;
//             console.log(`${this.title}: ${name}`)
//         }
//         this.students.forEach(show)
//     }
// };
//
// group6.showList();
//
// title = undefined;
// console.log("7: use apply")
//
// let group7 = {
//     title: "Carmiel 2025 - 2026",
//     students: ['Kir', 'Masha', 'Oleg'],
//     showList: function () {
//         const show = function (name){
//             console.log(`${this.title}: ${name}`)
//         }
//         //this.students.forEach(st => show.apply({title: "Carmiel 2025 - 2026"}, [st]))
//         this.students.forEach(st => show.apply(this, [st]))
//     }
// };
//
// group7.showList();
//
// console.log("8: use call")
//
// let group8 = {
//     title: "Carmiel 2025 - 2026",
//     students: ['Kir', 'Masha', 'Oleg'],
//     showList: function () {
//         const show = function (name){
//             console.log(`${this.title}: ${name}`)
//         }
//         //this.students.forEach(st => show.apply({title: "Carmiel 2025 - 2026"}, [st]));
//         this.students.forEach(st => show.call(this, st));
//     }
// };
//
// group8.showList();
//
// console.log('9: call group.title parameter')
//
// let group9 = {
//     title: "Carmiel 2025 - 2026",
//     students: ['Kir', 'Masha', 'Oleg'],
//     showList: function () {
//         const show = function (name){
//             console.log(`${group.title}: ${name}`)
//         }
//         this.students.forEach(show)
//     }
// };
//
// group9.showList();
//
// console.log('10: use forEach parameters thisArg')
//
// let group10 = {
//     title: "Carmiel 2025 - 2026",
//     students: ['Kir', 'Masha', 'Oleg'],
//     showList: function () {
//         const show = function (name){
//             console.log(`${this.title}: ${name}`)
//         }
//         this.students.forEach(show, this);
//     }
// };
//
// group10.showList();
//
// console.log('11: use bind when describe the function')
//
// let group11 = {
//     title: "Carmiel 2025 - 2026",
//     students: ['Kir', 'Masha', 'Oleg'],
//     showList: function () {
//         const show = function (name){
//             console.log(`${this.title}: ${name}`)
//         }.bind(this);
//         this.students.forEach(show);
//     }
// };
//
group11.showList();