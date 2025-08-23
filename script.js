let product = [];
async function getData() {
  try {
    let respone = await fetch("snacks.json");
    let data = await respone.json();
    product = data;
    displayData(product);
  } catch (error) {
    console.log(error);
  }
}
getData();


function displayData(product) {
  let main = document.querySelector("main");
  main.innerHTML = "";
  product.forEach(element => {
    let div = document.createElement("div");
    div.setAttribute("id", "product_container")

    let img = document.createElement("img");
    img.setAttribute("src", element.image);
    div.appendChild(img);
    let details = document.createElement("div");
    details.setAttribute("class", "details")
    let title = document.createElement("div");
    title.innerText = element.title;
    title.setAttribute("class", "snacks_name");
    let weight = document.createElement('div');
    weight.innerText = element.weight;
    weight.setAttribute("class", "weight");
    let rating_price = document.createElement("div");
    rating_price.setAttribute("class", "rating_price")
    let rating = document.createElement("div");
    rating.setAttribute("class", "rating")
    let starRating = document.createElement("span");
    starRating.setAttribute("class", "starRating");
    let ratingCount = document.createElement("span");
    ratingCount.setAttribute("class", "ratingCount");
    ratingCount.innerText = `(${element.rating.count})`;
    let fillStars = parseInt(element.rating.rate);
    let halfStars = (element.rating.rate - fillStars) >= 0.5 ? 1 : 0;
    let emptyStars = 5 - fillStars - halfStars;
    for (let i = 1; i <= fillStars; i++)
      starRating.innerHTML +=
        '<i class="fa-solid fa-star" style="color: #FFD43B;"></i>';

    for (let i = 1; i <= halfStars; i++)
      starRating.innerHTML +=
        '<i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>';

    for (let i = 1; i <= emptyStars; i++)
      starRating.innerHTML +=
        '<i class="fa-regular fa-star" style="color: #FFD43B;"></i>';

    let price = document.createElement("div");
    price.setAttribute("class", "price");
    price.innerText = ` \u20B9${element.price}`;
    let addCart = document.createElement("div");
    addCart.setAttribute("class", "addCart");
    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.setAttribute("class","addCartBtn")
    addCart.appendChild(btn);


    rating.appendChild(starRating);
    rating.appendChild(ratingCount);
    rating_price.appendChild(rating);
    rating_price.appendChild(price);
    details.appendChild(title);
    details.appendChild(weight);
    div.appendChild(details);
    div.appendChild(rating_price);
    main.appendChild(div);
    div.appendChild(addCart);

  });
}
let sweet = ()=>{
  let filteredProducts = product.filter(e => e.category === "sweet");
  displayData(filteredProducts);
  console.log(filteredProducts);
}

let sweetNav = document.getElementById("sweet");
sweetNav.addEventListener("click",()=>{
  sweet();

}); 
let spicy = ()=>{
  let filteredProducts = product.filter(e => e.category === "spicy");
  displayData(filteredProducts);
  console.log(filteredProducts);
}
let spicyNav = document.getElementById("spicy");
spicyNav.addEventListener("click",()=>{
  spicy();

}); 