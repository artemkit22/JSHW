// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// let lenght = []
// str.forEach(item => lenght.push(item.length))
// console.log(lenght)

//
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// str.forEach(item => console.log(item.toUpperCase()))
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// str.forEach(item => console.log(item.toLowerCase()))

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.slice(1, str.indexOf('  ')));

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// function stringToArray(str) {
//     return str.split(' ')
// }
// console.log(stringToArray(str));


//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let num = [10,8,-7,55,987,-1011,0,1050,0]
// console.log(num.map(num => num.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// function sortNums(nums, direction) {
//     if(direction === 'ascending'){
//         console.log( nums.sort((num1, num2) => num1-num2));
//     }
//     else if (direction === 'descending') {
//         console.log(nums.sort((num1, num2) => num2 - num1));
//     }
// }
// sortNums([11,21,3], 'ascending')
// //
// ==========================


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

// coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration)
// console.log(coursesAndDurationArray)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// console.log(coursesAndDurationArray.map((value, index) => ({
//     id: index + 1,
//     title: value.title,
//     monthDuration: value.monthDuration
// })));

// =========================


//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];

// - знайти піковий туз

// console.log(cards.find(value => value.cardSuit === "spade" && value.value === 'ace'));

// - всі шістки
// cards.find(value => value.value === "6" ? console.log(value) : null)

// - всі буби
// cards.find(value => value.cardSuit === "diamond" ? console.log(value) :null)

// - всі червоні карти
// cards.find(value => value.color === "red" ? console.log(value) : null)
// =========================

// - всі трефи від 9 та більше
// cards.find(value => value.value !=="6" && value.value !=="7" && value.value !=="8" && value.cardSuit == "clubs" ? console.log(value) : null)

//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// console.log(cards.reduce((accumulator, card) => {
//     if (card.cardSuit === 'spade') {
//         accumulator.spades.push(card);
//     } else if (card.cardSuit === 'diamond') {
//         accumulator.diamonds.push(card);
//     } else if (card.cardSuit === 'heart') {
//         accumulator.hearts.push(card);
//     } else {
//         accumulator.clubs.push(card);
//     }
//     return accumulator;
// }, {spades: [], diamonds: [], hearts: [], clubs: []}))

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// --написати пошук всіх об'єктів, в який в modules є sass
// coursesArray.forEach(item => {
//     if (item.modules.find(element => element === 'sass')){
//         console.log(item.modules);
//     }
// })

// --написати пошук всіх об'єктів, в який в modules є docker
// coursesArray.forEach(item =>{
//     if (item.modules.find(element => element === 'docker')){
//         console.log(item.modules);
//     }
// })