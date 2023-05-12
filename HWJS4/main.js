// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//  function calc(a,b) {
//      return a*b;
//  }
// console.log(calc(2,2))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calc(r) {
//     return 3.14 * r ** 2;
// }
// console.log(calc(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function calc(h,r) {
//     return (2 * 3.14) * (r * h);
// }
//
// console.log(calc(8,2))


// - створити функцію яка приймає масив та виводить кожен його елемент
// function item (arg) {
//     for (item of arg){
//         console.log(item)
//     }
// }
// let mas = [1,2,3,4,5,6]
// item(mas)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(liters) {
//     document.write(`${liters}`)
// }
// text("Голова кипит уже")


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function xxx(text) {
//     document.write(`<ul>
//
//      <li>${text}</li>
//      <li>${text}</li>
//       <li>${text}</li>
//
//                     </ul>`)
//     }
// xxx("Я рижа мавпа, я плавлюсь вже");
//


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function xxx(text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`
//            <li>${text}</li>
//         `)
//     }
//     document.write(`</ul>`)
// }
//
// xxx("Я рижа мавпа, я плавлюсь вже", 7);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function xxx(slov) {
//     document.write(`<ul>`)
//     for (let item of slov) {
//         document.write(`<li>${item}</li>`)
//     }
//         document.write(`</ul>`)
// }
// let mas = [1,2,"sad", "saer", true, false]
// xxx(mas)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let mas = [
//     {id: 2, name: "artem", age: 22},
//     {id: 4, name: "danya", age: 26},
//     {id: 3, name: "oleg", age: 32},
//     {id: 1, name: "kiril", age: 12},
//     {id: 6, name: "sasha", age: 62}
// ]

// function xxx(reb) {
//
//     for (let item of reb) {
//         document.write(`
//             <div>
//         <h3> id - ${item.id}</h3>
//         <p> Name - ${item.name} Age - ${item.age}</p>
//         </div>
//         `)
//     }
// }
// xxx(mas);
// - створити функцію яка повертає найменьше число з масиву
// function xxx(num) {
//     let min = num[0]
//     for (let i = 0; i < num.length; i++) {
//         if (min > num[i+1]) {
//             min = num[i + 1]
//         }
//     }
//     return min
// }
// let mas = [5,7,34,1]
// console.log(xxx(mas));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr) {
//     let suma = 0
//     for (let i = 0; i < arr.length; i++) {
//         suma += arr[i]
//     }
//   return suma
// }
//
// let mas = [5,7,3,5]
// console.log(sum(mas));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr,index1,index2) {
// let item = arr[index1];
// let item2 = arr[index2];
// arr[index1] = item2;
//     arr[index2] = item;
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     for (let item of currencyValues){
//         if (item.currency === exchangeCurrency) {
//             return sumUAH / item.value;
//         }
//     }
// }
//
//
//
// let result = exchange
// (10000,
//     [{currency:'USD',value:40},{currency:'EUR',value:42}],
//     'USD');
//
// console.log(result);