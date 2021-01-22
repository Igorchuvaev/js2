const products = [
  { id: 1, title: 'Ballantines', price: 1500, img: 'images/1.jpg' },
  { id: 2, title: 'Jameson', price: 1500, img: 'images/2.jpg' },
  { id: 3, title: 'MACALLAN', price: 3500, img: 'images/3.jpg' },
  { id: 4, title: 'Jack Daniels', price: 2000, img: 'images/4.jpg' },
];

const renderProduct = (title, price, img) => {
  return `<div class="product-item">
                <img src="${img}" alt="${title}">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class=" ">Добавить в корзину</button>
              </div>`;
};

const renderProducts = (list) => {
  const productList = list.map((product) =>
    renderProduct(product.title, product.price, product.img)
  );
  document.querySelector('.products').innerHTML = productList.join('');
};

renderProducts(products);
