//product data//

const products = [
    {
      id: `01`,
      name: `English Breakfast Tea`,
      image: `img/english-breakfasst-tea.jpg`,
      description: `A traditional black tea blend typically served with milk and sugar. It is bitter and malty.`,
      price: 10.99,
      quantity: 10,
      caffinated: true,
      type: `Black-Tea`,
    }, {
      id: '02',
      name: `Cream of Earl Grey`,
      image: 'img/cream-of-earl-grey-tea.jpg',
      description: 'One of the most popular tea blends in the world. It is a mix of black tea, bergamot and lavender and vanilla.',
      price: 12.99,
      quantity: 8,
      caffinated: true,
      type: `Black-Tea`,
    }, {
      id: `03`,
      name: `Jasmin Pearl`,
      image: `img/jasmin-pearl-green-tea.png`,
      description:`Hand rolled tea buds from spring harvested tea plants scented with jasmine blossoms.`,
      price: 30.00,
      quantity: 3,
      caffinated: true,
      type: `Green-Tea`,
    }, {
      id: `04`,
      name: `Oolong`,
      image: `img/oolong-tea.jpg`,
      description: `A traditional chinese tea that is left to oxidize halfway between black and green tea.`,
      price: 20.00,
      quantity: 3,
      caffinated: true,
      type: `Oolong`,
    }, {
      id: `05`,
      name: `Mint`,
      image: `img/mint-tea.jpg`,
      description: `A herbal infusion of dried mint leaves. Refreshing!`,
      price: 5.00,
      quantity: 20,
      caffinated: false,
      type: `Herbal`,
      }, {
      id: `06`,
      name: `Nutty Berry`,
      image: `img/nutty-herbal.jpg`,
      description: `A hebral infusion of nuts and berries. Spicy and sweet!`,
      price: 7.00,
      quantity: 20,
      caffinated: false,
      type: `Herbal`,
      }, {
      id: `07`,
      name: `Ginger Lemon`,
      image: `img/ginger-lemon-tea.jpg`,
      description: `A herbal infusion of dried ginger, lemon grass and lemon peel. Citrusy and spicy!`,
      price: 5.00,
      quantity: 20,
      caffinated: false,
      type: `Herbal`,
      }, {
      id: `08`,
      name: `Very Berry`,
      image: `img/berry-tea.jpg`,
      description: `A herbal infusion of rose hips and berries. Bold and fruity!`,
      price: 5.00,
      quantity: 20,
      caffinated: false,
      type: `Herbal`,
      }, {
      id: `09`,
      name: `Green Rooibus`,
      image: `img/green-rooibus.jpg`,
      description: `Like the more common red rooibus, green rooibus comes from the same plant but is not allowed to oxidize. Tastes grassy, sweet and fruity.`,
      price: 12.00,
      quantity: 20,
      caffinated: false,
      type: `Rooibos`,
      }, {
      id: `10`,
      name: `Red Rooibos`,
      image: `img/red-rooibos.jpg`,
      description: `From the South African red tea bush the leaves are allowed to oxidize into a rich red colour. Naturally sweet and nutty!`,
      price: 7.00,
      quantity: 20,
      caffinated: false,
      type:`Rooibos`,
      }, {
      id: `11`,
      name: `Honey Vanilla`,
      image: `img/honey-vanilla-rooibos.jpg`,
      description: `A wonderful rooibos tea with a sweet vanilla finish.`,
      price: 5.00,
      quantity: 12,
      caffinated: false,
      type:`Rooibos`,
      }, {
      id: `12`,
      name: `Honey Chocolate`,
      image: `img/chocolate-honey-rooibos.jpg`,
      description: `A wonderful rooibis tea with strong chocolate flavour and a naturally sweet aftertaste.`,
      price: 5.00,
      quantity: 12,
      caffinated: false,
      type:`Roobios`,
      }, {
      id: `13`,
      name: `Pineapple Sage Oolong`,
      image: `img/pineapple-sage-oolong.jpg`,
      description: `Bright and fresh with a touch of earth this oolong is a best seller.`,
      price: 15.00,
      quantity: 20,
      caffinated: true,
      type:`Oolong`,
      }, {
      id: `14`,
      name: `Black Apple Spice`,
      image: `img/apple-spice-black-tea.jpg`,
      description: `A black tea blend with warm spices and a hint of apple.`,
      price: 6.00,
      quantity: 4 ,
      caffinated: true,
      type:`Black-Tea`,
      }, {
      id: `15`,
      name: `Chai`,
      image: `img/chai-black.jpg`,
      description: `A blend of black tea and warm spices. Wake up comfy.`,
      price: 8.00,
      quantity: 23,
      caffinated: true,
      type:`Black-Tea`,
      }, {
      id: `16`,
      name: `White Monkey Paw`,
      image: `img/white-monkey-paw-green.jpg`,
      description: `A yummy green tea so delicate it is almost a white tea.`,
      price: 23.99,
      quantity: 2,
      caffinated: true,
      type:`Green-Tea`,
      }, {
      id: `17`,
      name: `Cucumber Melon`,
      image: `img/cucumber-green-melon.jpg`,
      description: `A green tea with a cool cucumber and melon flavour`,
      price: 7.00,
      quantity: 12,
      caffinated: true ,
      type:`Green-Tea`,
      }, {
      id: `18`,
      name: `Spiced Rooibus Chai`,
      image: `img/spiced-rooibus-chai`,
      description: `A great decaf alternative to a cup of traditional chai. Tastes warm and spicy!`,
      price: 4.99,
      quantity: 24,
      caffinated: false,
      type:`Rooibos`,
      }, {
      id: `19`,
      name: `Camomile`,
      image: `img/camomile.jpg`,
      description: `A calming herbal tea with bright floral notes.`,
      price: 3.99,
      quantity: 40,
      caffinated: false ,
      type:`Herbal`,
      }, {
      id: `20`,
      name: `Crandberry Orange`,
      image: `img/crandberry-orange.jpg`,
      description: `A citrus and berry herbal tea. Perfect for after dinner!`,
      price: 4.99,
      quantity: 3,
      caffinated: false,
      type:`Herbal`,
      }
]

/************* FUNCTIONS *************/

function getProductHtmlString(product) {

    return `<article class="product ${product.id}">
              <h3 class="product-name">${product.name}</h3>
              <img src="${product.image}" alt="image of ${product.name}" class="product-img">
              <ul class="product-info">
                <li class="product-description"> ${product.description}</li>
                <li class="product-price">Price: <strong>${product.price}</strong></li>
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
  


/************* EXECUTABLE *************/
/*renderProducts(products);*/

renderProducts(products);

document.getElementById('layout').addEventListener('click', event => toggleLayoutView())


/*****************FILTER BY COST***************/
function lowCostProducts(p) {
  return p.price < 10.00;
}

const arrLowCosties = products.filter(lowCostProducts);
renderProducts(arrLowCosties);



/* ******Filter by Caffeine******** */
function filterByCaff(p) {
  return p.caffinated;
}

const arrcaffTea = products.filter(filterByCaff);

renderProducts(arrcaffTea);

/********FILTER BY TYPE */
//document.getElementById('typeSearch').addEventListener('change',searchbyType)



/*****FILTER BY NAME*******/

//******TOGGLE VIEW******* *//



function toggleLayoutView() {
  document.getElementById('products').classList.toggle('grid-view')
}