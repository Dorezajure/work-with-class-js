"use strict";

//В конструктор перечисляем параметры которые будут меняться в зависимости от макета карточки товара 
//Создаем метод render для того чтобы появились новые карточки на странице
class Card {
    constructor(src,alt, price, oldPrice, type, descr, parent) {
        this.src = src;
        this.alt = alt; 
        this.price = price;
        this.oldPrice = oldPrice;
        this.type = type; 
        this.descr = descr;
        this.sale = Math.floor((this.price / this.oldPrice) * 100 - 100);
        this.parent = parent;
    }
    render() {
        document.querySelector(this.parent).insertAdjacentHTML(
            "beforeend",
            `
        <div class="card">
            <img class="card__img" src="${this.src}" alt="${this.alt}" />
            <div class="card__sale">${this.sale}</div>
            <div class="card__price">
                ${this.price}p<span class="card__old-Price"> <s>${this.oldPrice}р</s> </span>
            </div>
            <div class="card__type">${this.type}</div>
            <div class="card__descr">${this.descr}</div>
        </div>
        `
        );
    }
}
    document.querySelector(".btn").addEventListener('click', function() {
        for(let i = 0; i < 3; i++) {
            new Card(
                `img/tv-${i + 1}.png`,
                "tv", 
                18800, 
                28500, 
                "Старая коллекция", 
                "Одна из лучших моделей на рынке",
                ".cards" //Точка требуется так как querySelector принимает селектор класса а не информацию строковую
                ).render();
            }
    });

//Создаем экземпляр этого класса и передаем строчные элементы в параметры для this указаные выше, те штуки что мы будем заменять в зависимости от карточки товара. 
// let copyOfCard = new Card(
//     "img/tv-2.png",
//     "tv", 
//     18800, 
//     28500, 
//     "Старая коллекция", 
//     "Одна из лучших моделей на рынке",
//     ".cards" //Точка требуется так как querySelector принимает селектор класса а не информацию строковую
//     );

// copyOfCard.render();
// copyOfCard.render();