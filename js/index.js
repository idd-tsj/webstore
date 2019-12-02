//product data//

const products = [
    {
      id: `01`,
      name: `English Breakfast Tea`,
      image: `img/english-breakfasst-tea.jpg`,
      description: `A traditional black tea blend typically served with milk and sugar. It is bitter and malty.`,
      price: `$10.99`,
      quantity: `10`,
      caffinated: `yes`,
      type: `Black-Tea`,
    }, {
      id: '02',
      name: `Cream of Earl Grey`,
      image: 'img/cream-of-earl-grey-tea.jpg',
      description: 'One of the most popular tea blends in the world. It is a mix of black tea, bergamot and lavender and vanilla.',
      price: `$12.99`,
      quantity: `8`,
      caffinated: `yes`,
      type: `Black-Tea`,
    }, {
      id: `03`,
      name: `Jasmin Pearl`,
      image: `img/jasmin-pearl-green-tea.png`,
      description:`Hand rolled tea buds from spring harvested tea plants scented with jasmine blossoms.`,
      price: `$30.00`,
      quantity: `3`,
      caffinated: `yes`,
      type: `Green-Tea`,
    }, {
      id: `04`,
      name: `Oolong`,
      image: `img/oolong-tea.jpg`,
      description: `A traditional chinese tea that is left to oxidize halfway between black and green tea.`,
      price: `$20.00`,
      quantity: `3`,
      caffinated: `yes`,
      type: `Oolong`,
    }, {
      id: `05`,
      name: `Mint`,
      image: `img/mint-tea.jpg`,
      description: `A herbal infusion of dried mint leaves. Refreshing!`,
      price: `$5.00`,
      quantity: `20`,
      caffinated: `no`,
      type: `Herbal`,
      }, {
      id: `06`,
      name: `Nutty Berry`,
      image: `img/nutty-herbal.jpg`,
      description: `A hebral infusion of nuts and berries. Spicy and sweet!`,
      price: `$7.00`,
      quantity: `20`,
      caffinated: `no`,
      type: `Herbal`,
      }, {
      id: `07`,
      name: `Ginger Lemon`,
      image: `img/ginger-lemon-tea.jpg`,
      description: `A herbal infusion of dried ginger, lemon grass and lemon peel. Citrusy and spicy!`,
      price: `$5.00`,
      quantity: `20`,
      caffinated: `no`,
      type: `Herbal`,
      }, {
      id: `08`,
      name: `Very Berry`,
      image: `A herbal infusion of rose hips and berries. Bold and fruity!`,
      description: `img/berry-tea.jpg`,
      price: `$5.00`,
      quantity: `20`,
      caffinated: `no`,
      type: `Herbal`,
      }, {
      id: `09`,
      name: `Green Rooibus`,
      image: `img/green-rooibus.jog`,
      description: `Like the more common red rooibus, green rooibus comes from the same plant but is not allowed to oxidize. Tastes grassy, sweet and fruity.`,
      price: `$12.00`,
      quantity: `20`,
      caffinated: `no`,
      type: `Rooibos`,
      }, {
      id: `10`,
      name: `Red Rooibos`,
      image: `img/red-rooibos.jpg`,
      description: `From the South African red tea bush the leaves are allowed to oxidize into a rich red colour. Naturally sweet and nutty!`,
      price: `$7.00`,
      quantity: `20`,
      caffinated: `no`,
      type:`Rooibos`,
      }
]

/************* FUNCTIONS *************/

function getProductHtmlString(product) {

    return `<article class="product ${product.id}">
              <h3 class="product-name">${product.name}</h3>
              <img src="${product.image}" alt="image of ${product.name}" class="product-img">
              <ul class="product-info">
                <li>Description: ${product.description}</li>
                <li>Price: <strong>${product.price}</strong></li>
                <li>Quantity in Stock: <strong>${product.quantity}</strong></li>
                <li>Caffinated: <stong>${product.caffinated}</strong></li>
                <li>Type: <strong>${product.type}</strong></li>
              </ul>
            </article>`;
}

function renderProducts(arr) {

    //* 1. map() Array to a new Array
    const arrOfHtml = arr.map(getProductHtmlString);
  
    //* 2. join() Array into a String
    const strOfHtml = arrOfHtml.join('\n');
  
    //* 3. innerHTML String into Elements
    document.getElementById('products').innerHTML = strOfHtml;
  
}
  
function toggleLayoutView() {
    document.getElementById('products').classList.toggle('grid-view')
}

/************* EXECUTABLE *************/
renderProducts(products);

document.getElementById('layout').addEventListener('click', event => toggleLayoutView())