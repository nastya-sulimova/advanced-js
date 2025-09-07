// // // 1 шаг урока
// // const videoForInstaBloggers = {
// //     title: 'Как раскрутить свой профиль в инстаграм за один месяц',
// //     description: 'В видео я расскажу как активно взаимодействовать с аудиторией, публиковать качественный контент, использовать все доступные инструменты Instagram и по-настоящему эффективно пользоваться платным продвижением, а также раскрою море другой полезной информации и важных лайфхаков, на которые многие просто не обращают внимания',
// //     videoURL: 'https://www.top-blogger.ru/instagram/video',
// //     duration: 3600,
// //     views: 17529,
// //     likes: 1228,
// //     live: false,
// //     author: {
// //         name: 'Татьяна Сидельникова',
// //         channelURL: 'https://youtube.com/@sidelnikova?v=wvZ6nB3cl1w',
// //         subscribers: 146075,
// //     },
// //     tags: ['#sidelnikova', '#instagram', '#promotion', '#trends', '#bloggers', '#topbloggers'],
// //     comments: [
// //         {
// //             userName: 'petrovalex',
// //             commentText: 'очень доходчиво и информативно, спасибо',
// //             commentLikes: 15,
// //         },
// //         {
// //             userName: 'petrovalex',
// //             commentText: 'очень доходчиво и информативно, спасибо',
// //             commentLikes: 15,
// //         },
// //         {
// //             userName: 'petrovalex',
// //             commentText: 'очень доходчиво и информативно, спасибо',
// //             commentLikes: 15,
// //         },
// //     ]
// // }

// // // 2 шаг урока
// // const array = ["Петр", "Василий", "Владислав", 100, true, "1000", "Владимир"];
// // const newArrayWithV = array.filter((name)=>{
// //     return typeof name==='string' && name.startsWith('В');
// // });
// // console.log(newArrayWithV);

// // const newArrayWithVSurname = newArrayWithV.map((nameSurname)=>{
// //     // return nameSurname+=' Иванов';
// //     return `${nameSurname} Иванов`;
// // })
// // console.log(newArrayWithVSurname);

// // // newArrayWithVSurname.forEach((userDates)=>{
// // //     console.log(userDates);
// // // })

// // for (const userDates of newArrayWithVSurname) {
// //     console.log(userDates);
// // }

// // const notString = array.find((item)=>{
// //     return typeof item !== 'string';
// // });
// // console.log(notString);

// // // 3 шаг урока
// // const user = {
// //   name: "Иван",
// //   age: 28,
// //   contact: {
// //       email: "ivan@example.com",
// //       phone: "+7-123-456-7890"
// //   },
// //   address: {
// //       city: "Москва",
// //       street: "ул. Ленина",
// //       building: "10"
// //   }
// // };

// // const {name: newName, age}=user;
// // console.log(newName);
// // console.log(age);

// // const {contact: {email,phone}}=user;
// // console.log(email);
// // console.log(phone);

// // const {address: {city: userCity, street: userStreet}}=user;
// // console.log(userCity);
// // console.log(userStreet);

// // function displayUserInfo({name,age,address: {city},contact: {email}}) {
// //     console.log(`Имя: ${name}, Возраст: ${age}, Город: ${city}, Email: ${email}`);
// // }
// // displayUserInfo(user);

// // // "Имя: Иван, Возраст: 28, Город: Москва, Email: ivan@example.com"

// // // 4 шаг урока
// // const productInfo = ["Кресло VILORA", "серый", 21000, "в наличии", "скидка 10%"];

// // const [productName, color, price, availability, discount]=productInfo;
// // console.log(productName);
// // console.log(price);

// // console.log(availability);
// // console.log(discount);

// // // const productInfo = ["Кресло VILORA", "серый", 21000, "в наличии", "скидка 10%"];

// // // const [productName, color, ...otherDetails]=productInfo;
// // // console.log(otherDetails);

// // function displayProductDetails([productName,color,price,availability,discount]) {
// //     console.log(`Название: ${productName}, Цена: ${price}, Статус: ${availability}, Скидка: ${discount}`);
// // }
// // displayProductDetails(productInfo);

// // // "Название: Кресло VILORA, Цена: 21000, Статус: в наличии, Скидка: скидка 10%"

// // --------------------------------------------------------------------Практика-----------------------------------
// // // Задача 1. Фильтрация и сортировка товаров
// // const products = [
// //     { id: 1, title: "Кресло VILORA", price: 21000, stock: true },
// //     { id: 2, title: "Диван TULIP", price: 35000, stock: false },
// //     { id: 3, title: "Столик MANGO", price: 12000, stock: true },
// //     { id: 4, title: "Кровать BALI", price: 40000, stock: true },
// //     { id: 5, title: "Стул HUGO", price: 8000, stock: false },
// // ];

// // // const availableProducts = products.filter(product=>{
// // //     return product.stock;
// // // });

// // // console.log(availableProducts);

// // const priceByGrowing = products.sort((a,b)=>a.price-b.price);
// // console.log(priceByGrowing);

// // const productNames = products.map(product=>{
// //    return product.title;
// // });
// // console.log(productNames);

// // // Задача 2. Подсчет общей стоимости доступных товаров
// // const availableProducts = products
// //     .filter(product=>{
// //     return product.stock;
// // })
// //     .reduce((total,product)=>{
// //         return total+product.price;
// //     },0);
// //     console.log(availableProducts);

// // // Задача 3. Найти товар с самой высокой ценой
// // const mostExpensiveProduct = products.reduce((expensive, product) => {
// //     return product.price > expensive.price ? product : expensive;
// // });

// // console.log("Самый дорогой товар:", mostExpensiveProduct.title, "—",
// // mostExpensiveProduct.price);

// // Задача 4. Подсчитать количество товаров в наличии и не в наличии
// // const products = [
// //     { id: 1, title: "Кресло VILORA", price: 21000, stock: true },
// //     { id: 2, title: "Диван TULIP", price: 35000, stock: false },
// //     { id: 3, title: "Столик MANGO", price: 12000, stock: true },
// //     { id: 4, title: "Кровать BALI", price: 40000, stock: true },
// //     { id: 5, title: "Стул HUGO", price: 8000, stock: false },
// // ];

// // const availabilityProduct = products.reduce((acc, product) => {
// //     if (product.stock) {
// //         acc.available ++;
// //     } else {
// //         acc.unavailable ++;
// //     }
// //         return acc;
// // }, { available: 0, unavailable: 0 });
// // console.log("Количество товаров:", availabilityProduct);

// // Задача 5. Преобразование данных с изменением ключей и вложенных значений
// const products = [
//     { id: 1, title: "Кресло VILORA", price: 21000, stock: true, details: { category: "Мебель" } },
//     { id: 2, title: "Диван TULIP", price: 35000, stock: false, details: { category: "Мебель" } },
//     { id: 3, title: "Столик MANGO", price: 12000, stock: true, details: { category: "Мебель" } },
//     { id: 4, title: "Кровать BALI", price: 40000, stock: true, details: { category: "Спальня" } },
//     { id: 5, title: "Стул HUGO", price: 8000, stock: false, details: { category: "Мебель" } },
// ];

// const Newproducts =products.map(object=>{
//     return {
//             id: object.id,
//             productName: object.title,
//             price: object.price,
//             stock: object.stock,
//             details: object.details};
//     });

// // const Newproducts =products.map(({title, ...rest})=>({
// //     ...rest,
// //     productName: title
// // })
// // );

// const priceInUSD =Newproducts.map(object=>{
//     return {
//             id: object.id,
//             productName: object.productName,
//             price: object.price/100,
//             stock: object.stock,
//             details: object.details};
//     });

// // const priceInUSD =Newproducts.map(object=>({
// //             price: object.price/100,
// //             ...object
// //     })
// // );

// const newCategory =priceInUSD.map(object=>{
//     return {
//             ...object,
//             details:{
//                 productCategory: object.details.category
//             }};
//     });

// console.log(newCategory);
