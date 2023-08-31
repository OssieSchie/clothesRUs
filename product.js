const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// console.log(id)
fetch("https://kea-alt-del.dk/t7/api/products/" + id)
    .then(res=>res.json())
    .then(showId)

// function showIds(Ids){
//     Ids.forEach(showId);
// }

    
function showId(id){
    // const template = document.querySelector("#productTemplate").content;
    
    // const copy = template.cloneNode(true);
    
    document.querySelector("h2").textContent=id.productdisplayname;
    
    document.querySelector(".prodPrice").textContent=id.price + " DKK";
    
    document.querySelector(".prodBrand").textContent=id.brandname;

    document.querySelector(".prodSubCat").textContent=id.subcategory;
    
    document.querySelector("#prodImg").src = `https://kea-alt-del.dk/t7/images/webp/640/${id.id}.webp`;
    
    if(id.discount){
        let discount = id.price/100*id.discount;
        let newPrice = Math.round(id.price-discount);
        console.log(newPrice)
        
        document.querySelector("#prodView").classList.add("saleProd")
        document.querySelector(".prodPrice").textContent=newPrice;
        document.querySelector(".prodPriceBefore").textContent=id.price;
        document.querySelector("#priceBef").classList.remove("hiddenBef");
    }
    
    if(id.soldout){
        document.querySelector("#prodView").classList.add("soldProd")
    }
    
    // document.querySelector("main #cards").appendChild(copy);
}



// function showId(id){
//     const catTemp = document.querySelector("#catTemplate").content;
//     const copy = catTemp.cloneNode(true);
    
//     document.querySelector("a").textContent = cat.category;
    
//     copy.querySelector("a").href = `productlist.html?category=` + cat.category;
    
//     document.querySelector(".grid6-2").appendChild(copy);
// }


// kopier koden fra products.js til sold, sale osv
// lav css til sold, sale osv