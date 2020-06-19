let carts = document.querySelectorAll('.shop-item-button')

let product = [
    {
        nombre: 'fruta seca',
        tag:'frutaSeca',
        price:30,
        incart: 0
    },
    {
        nombre: 'paquete de verdura mixto',
        tag:'VerduraMix',
        price:90,
        incart: 0
    },
    {
        nombre: 'Jugo de Verdura',
        tag:'jugo',
        price:25,
        incart: 0
    },
    {
        nombre: 'Mango Manila',
        tag:'mango',
        precio:30,
        incart: 0
    },
    {
        nombre: 'Carne para Hamburgesa',
        tag:'hamburgesa',
        price:160,
        incart: 0
    },
    {
        nombre: 'Uva con Semilla',
        tag:'uva',
        price:90,
        incart: 0
    },
    {
        nombre: 'Carne para Brochetas',
        tag:'Brochetas',
        price:100,
        incart: 0
    },
    {
        nombre: 'Plátano Tabasco',
        tag:'platano',
        price:30,
        incart: 0
    },
    {
        nombre: 'Guayaba Rosa',
        tag:'guayaba',
        price:60,
        incart: 0
    },
    {
        nombre: 'Sandía',
        tag:'sandia',
        price:30,
        incart: 0
    },
    {
        nombre: 'manzana roja',
        tag:'manzana',
        price:45,
        incart: 0
    },
    {
        nombre:'Pasas',
        tag:'pasas',
        price:60,
        incart: 0
    },
    {
        nombre: 'Pollo empanizado',
        tag:'pollo',
        price:30,
        incart: 0
    },
    {
        nombre: 'Jugo de Naranja',
        tag:'jugoNaranja',
        price:35,
        incart: 0
    },
    {
        nombre: 'Canasta de Fruta',
        tag:'canasta',
        price:100,
        incart: 0
    }
];

for (let i=0; i < carts.length; i++){
    carts [i].addEventListener('click',()=>{
        cartnumbers(product[i]);
        totalCost(product[i])
    })
}

function onLoadCartNumbers(){
    let productnumbers = localStorage.getItem('cartnumbers');

    if(productnumbers){
        document.querySelector('.cart span').textContent= productnumbers;
    }
}


function cartnumbers(product){
    console.log("que producto", product);
    let productnumbers = localStorage.getItem('cartnumbers')


    productnumbers = parseInt(productnumbers);
    
    if(productnumbers){
        localStorage.setItem('cartnumbers',productnumbers + 1);
        document.querySelector('.cart span').textContent= productnumbers +1;
    }else{
        localStorage.setItem('cartnumbers', 1); 
        document.querySelector('.cart span').textContent=1;
    }
    
    setItems(product);

}
function setItems(product){
   let cartItems = localStorage.getItem('productInCart');
   cartItems =JSON.parse(cartItems);

   if(cartItems != null){

       if(cartItems[product.tag] ==undefined){
           cartItems =  {
               ...cartItems,
               [product.tag]: product
           }
       }
       cartItems[product.tag].incart += 1;   
   }else{
       product.incart =1;
       cartItems = {
           [product.tag]: product
       }  
 }

    localStorage.setItem("productInCart", JSON.stringify (cartItems));
}

function totalCost(product){
    console.log("el costo del producto es", product.price);
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
    

    if(cartCost != null){
        cartCost= parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItems("totalCost",product.price);
    }
    console.log("el costo es", cartCost);
    console.log(typeof cartCost);
}
/*___________________*/

/*function totalCost(product){
    console.log("el costo del producto es", product.price);
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
    console.log("el costo es", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost= parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItems("totalCost",product.price);
    }
/*}
function displaycart(){
let cartItems = localStorage.getItem("productInCart");
cartItems = JSON.parse(cartItems);
let productContainer = docuemnt.querySelector
(".products");

/*console.log(cartItems);
if(cartItems && productContainer){
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item =>{
        productContainer.innerHTML +=
        <div>
        <div class="product">
            <ion-icon name="close-circle"></ion-icon>
            <img src="./img/cart/${item.tag}.jpg"></img>
            <span>${item.name}</span>
        </div>
        
        <div class="price">$${item.price}</div>,00
        <div class="quantity">
            <ion-icon class="decrese"
            name="arrow-dropleft-circle"></ion-icon>
            <span>${item.incart}</span>
            <ion-icon class="increse"
            name="arrow-dropright-circle"></ion-icon>
         </div>
         <div class="total">    
         $${item.incart},00
        </div>
        </div>
    })
    productContainer.innerHTML +=
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Total 
        </h4>
         <h4 class="basketTotal">
        $${cartCost},00
    </h4>
    </div>
}*/

   onLoadCartNumbers();