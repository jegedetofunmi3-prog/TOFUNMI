const likeIcons =
document.querySelectorAll(".like-icon");

likeIcons.forEach(icon=>{
    icon.addEventListener("click", function(e){
        e.preventDefault();
        icon.classList.toggle("liked");
    });
});


// const cartButtons =
// document.querySelectorAll(".cart-btn");
// const cartCount =
// document.getElementById("cart-count");

// let count = localStorage.getItem("cartCount")
// || 0;
// cartCount.textContent = count;

// cartButtons.forEach(button =>{
//     button.addEventListener("click", function(e)
//     {
// e.preventDefault();
// count++;
// cartCount.textContent =count;
// localStorage.setItem("cartCount", count);


// button.textContent = "Added";
// setTimeout(() => {
//     button.textContent = "Add to Cart";
// }, 1000);
//     });
// });






// const cartButtons =
// document.querySelectorAll(".cart-btn");
// const cartCount =
// document.getElementById("cart-count");


// let cart = 
// JSON.parse(localStorage.getItem("cart"))||
// [];
// cartCount.textContent = cart.length;

// cartButtons.forEach(button =>{
//     button.addEventListener("click", function(e)
//     {
//         e.preventDefault();
//         const name =
//         button.getAttribute("data-name");
//         const price =
//         Number (button.getAttribute("data-price"));
//         const image =
//         button.getAttribute("data-image");
//         cart.push({name, price, image });
//         localStorage.setItem("cart",JSON,stringify(cart));
//         cartCount.textContent = "Added!";
//         setTimeout(() => button.textContent = "Add to Cart", 1000);
//     });
// });




// const cartButtons =
// docyment.querySelectorAll(".cart-btn");
// const cartCount =
// document.getElementById("cart-count");


// let cart =
// JSON.parse(localStorage.getItem("cart"))||
// [];
// cartCount.textContent = cart.reduce((acc,item) => acc + item.gty, 0);

// cartButtons.forEach(button => {
//     button.addEventListener("click", function(e)
//     {
//         e.preventDefault();
//         const card = button.closest(".box");
//         const mainImg = CDATASection.querySelector(".image img").src;
//         const name =
//         card.querySelector ("h4").textContent;
//         const price =
//         Number(card.querySelector(".price").textContent.replace(/[^0-9]/g, ""));


//         let existing = cart.find(item => item.name === name && item.image === mainImg,qty: 1});
//     }

//        localStorage.setItem("cart",
//         JSON.stringify(cart));
// cartCount.textContent = cart.reduce((acc,item) => acc + item.qty, 0);


// button.textContent = "Added!";
// setTimeout(() => button.textContent = "Add to cart", 1000);
// );
// ;

function shareProduct(event) {
event.preventDefault();
alert("Product link copied! You can now share it.");
}


// function addToCart(button) {
//     let name =
//     button.getAttribute("data-name");
//     let price =
//     button.getAttribute("data-price");


//     let cart =
//     JSON.parse(localStorage.getItem("cart"))||
//     [];

//     cart.push({
//         name:name,
//         price:Number(price)
//     })

//     localStorage.setItem("cart",
// JSON.stringify(cart));

// notifyCartIcon();
// setTimeout(() =>{
//     window.location.href = "cart.html";
// },800);
// }

// function notifyCartIcon(){
//     let icon = 
//     document.getElementById("cart-icon");

//     icon.classList.add("cart-notify");

//     setTimeout(() => {
//         icon.classList.remove("cart-notify");
//   }, 1000);
// }





// // cart place


// function displayCart(){
//     let cart =
//     JSON.parse(localStorage.getItem("cart"))||
//     [];
//     let container = 
//     document.getElementById("cart-items");
//     let totalDisplay =
//     document.getElementById("total-price");

//     let total = 0;
//     container.innerHTML +=

//     <div class="cart-item">
//         <h3><i class="fa-solid fa-naira-sign"></i>{item.name}</h3>
//         <p><i class="fa-solid fa-naira-sign"></i>{item.price.toLocaleString()}</p>
//     </div>
//     ;
//     total += item.price;
// });
// totalDisplay.textContent =
// total.toLocaleString();
// function clearCart(){
//     localStorage.removeItem("cart");
//     displayCart();
// }

// document.querySelectorAll('.share-icon').forEach(icon => {
//     icon.addEventListener('click',function(){
//         const link = window.location.href;
//         navigator.clipboard.writeText(link)
//         .then(() => {
//             alert("link copied!")
//         })
//             .catch(() => {
//                 alert("Failed to copy.");
//             });
//         });
//     });


const form =
document.getElementById("contactForm");
const successMessage =
document.getElementById("successMessage");

form.addEventListener("submit", function(event){
    event.preventDefault();


    successMessage.textContent = "Message sent successfully"
    successMessage.style.color = "green"

    form.reset();
});