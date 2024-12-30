"use strict";

// ! ======================================== ЗМІННІ ========================================

/*Пограймо у флориста. Оголосіть шість змінних, не забуваючи називати їх відповідно до їх призначення:

ціна однієї троянди (8) і кількість троянд, які у вас є (70)
ціна однієї лілії (10) і кількість лілій, які у вас є (50)
ціна одного тюльпана (2) і кількість тюльпанів, які у вас є (120)
Тепер оголосіть три змінні, по одній для троянд, лілій і тюльпанів, які у вас є, в які ви помістите їх загальну ціну. Вставте відповідні значення у змінні, використовуючи змінні, оголошені на попередньому кроці. Нарешті, оголосіть змінну, в якій ви будете зберігати ціну всіх ваших квітів (знову ж таки, використовуйте попередні змінні для ініціалізації). Відобразіть всю інформацію про інвентар у консолі у наступному вигляді:

Rose — unit price: 8 , quantity: 70 , value: 560
Lily — unit price: 10 , quantity: 50 , value: 500
Tulip — unit price: 2 , quantity: 120 , value: 240
Total: 1300*/

const rosePrice = 8;
let roseAmount = 70;
let roseTotalPrice = rosePrice * roseAmount;

const lilyPrice = 10;
let lilyAmount = 50;
let lilyTotalPrice = lilyPrice * lilyAmount;

const tulipPrice = 2;
let tulipAmount = 120;
let tulipTotalPrice = tulipPrice * tulipAmount;

let totalPrice = roseTotalPrice + lilyTotalPrice + tulipTotalPrice;

// console.log(`
// Rose — unit price: ${rosePrice}, quantity: ${roseAmount}, value: ${roseTotalPrice}.
// Lily — unit price: ${lilyPrice}, quantity: ${lilyAmount}, value: ${lilyTotalPrice}.
// Tulip — unit price: ${tulipPrice}, quantity: ${tulipAmount}, value: ${tulipTotalPrice}.
// Total: ${totalPrice}.`);

// ------------------------------------------------------------------------------------------

/*Змінимо код з попереднього прикладу.

Припустимо, що ціни на квіти будуть постійними (вони не змінюватимуться). Оголосіть та ініціалізуйте решту змінних так само, як у попередньому прикладі. Виведіть всю зібрану інформацію в консоль. Тепер зменшіть кількість троянд на 20 і лілій на 30.

Знову виведіть всю зібрану інформацію в консоль. */

roseAmount -= 20;
lilyAmount -= 30;

roseTotalPrice = rosePrice * roseAmount;
lilyTotalPrice = lilyPrice * lilyAmount;
tulipTotalPrice = tulipPrice * tulipAmount;

totalPrice = roseTotalPrice + lilyTotalPrice + tulipTotalPrice;

// console.log(`
// Rose — unit price: ${rosePrice}, quantity: ${roseAmount}, value: ${roseTotalPrice}.
// Lily — unit price: ${lilyPrice}, quantity: ${lilyAmount}, value: ${lilyTotalPrice}.
// Tulip — unit price: ${tulipPrice}, quantity: ${tulipAmount}, value: ${tulipTotalPrice}.
// Total: ${totalPrice}.`);

// ! =================================== ЛАБОРАТОРНА РОБОТА ===================================

/*Нашим завданням буде створення списку контактів. Спочатку список буде досить простим: ми впишемо до нього лише трьох людей, використовуючи дані, наведені в таблиці нижче. Протягом всього курсу ви будете повертатися до цього скрипту і систематично розширювати його новим функціоналом, використовуючи вивчені елементи JavaScript.

Оголосіть та ініціалізуйте змінні, в яких ви будете зберігати всю інформацію (всього дев'ять змінних). Виведіть в консолі інформацію про перший та останній контакт у вигляді: ім'я/телефон/електронна пошта.*/

const contacts = {
    name1: "Maxwell Wright",
    phone1: "(0191) 719 6495",
    email1: "Curabitur.egestas.nunc@nonummuyac.co.uk",

    name2: "Rija Vilarreal",
    phone2: "0866 398 2895",
    email2: "posuere.vulputate@sed.com",

    name3: "Helen Richards",
    phone3: "0800 1111",
    email3: "libero@convallis.com",
};

// console.log(
//     `Name: ${contacts.name1}. Phone: ${contacts.phone1}. Email: ${contacts.email1}`
// );
// console.log(
//     `Name: ${contacts.name3}. Phone: ${contacts.phone3}. Email: ${contacts.email3}`
// );
