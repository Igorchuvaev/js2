class productItem {
  constructor(
    title = 'Бурбон',
    price = 'нет на складе',
    img = 'images/empty.jpg'
  ) {
    this.title = title;
    this.price = price;
    this.img = img;
  }
  render() {
    return `<div class="product-item">
                <div class="product-info">
                  <img src="${this.img}" alt="${this.title}">
                  <h3>${this.title}</h3>
                  <p>${this.price}</p>
                </div>
                <button class='addClick'>Добавить</button>
              </div>`;
  }
}

class productsList {
  constructor() {
    this.products = [];
  }
  getProducts() {
    this.products = [
      {
        title: 'Ballantines',
        price: 1500,
        img: 'images/1.jpg',
      },
      {
        title: 'Jameson',
        price: 1500,
        img: 'images/2.jpg',
      },
      {
        title: 'MACALLAN',
        price: 3500,
        img: 'images/3.jpg',
      },
      {
        title: 'Jack Daniels',
        price: 2000,
        img: 'images/4.jpg',
      },

      {},
    ];
  }
  render() {
    let listHtml = '';
    this.products.forEach((product) => {
      const productItemNew = new productItem(
        product.title,
        product.price,
        product.img
      );
      listHtml += productItemNew.render();
    });
    document.querySelector('.productsList').innerHTML = listHtml;
  }
  calculateproductsAll() {
    let totalPrice = 0;
    this.products.forEach((product) => {
      if (product.price !== undefined) {
        totalPrice += product.price;
        // console.log(product.price);
      }
    });
    let busketTotal = 'В корзине товаров на сумму: ' + totalPrice;
    document.querySelector('.productsPrice').innerHTML = busketTotal;
  }
}

const list = new productsList();
list.getProducts();

window.onload = () => {
  list.render();
  list.calculateproductsAll();
};
