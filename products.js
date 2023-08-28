fetch("https://kea-alt-del.dk/t7/api/products?limit=30")
    .then(res=>res.json())
    .then(showProducts)

function showProducts(products){
    products.forEach(showProduct)
}

function showProduct(product){
    // console.log(product);
    const template = document.querySelector("#productTemplate").content;

    const copy = template.cloneNode(true);

    copy.querySelector("h3").textContent=product.productdisplayname;
    
    copy.querySelector(".prodPrice").textContent=product.price;

    copy.querySelector(".prodBrand").textContent=product.brandname;

    copy.querySelector("a img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    if(product.discount){
        let discount = product.price/100*product.discount;
        let newPrice = Math.round(product.price-discount);
        console.log(newPrice)

        copy.querySelector("div").classList.add("saleProd")
        copy.querySelector(".prodPrice").textContent=newPrice;
        copy.querySelector(".prodPriceBefore").textContent=product.price;
        copy.querySelector("#priceBef").classList.remove("hiddenBef");
    }

    if(product.soldout){
        copy.querySelector("div").classList.add("soldProd")
    }
    
    document.querySelector("main #cards").appendChild(copy);
}



/* <div class="product">
                    <a href="product.html">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/1573.webp" alt="">
                    </a>
                    <p class="soldP">UDSOLGT</p>
                    <p class="saleP">Tilbud</p>
                    <div class="prodInfo">
                        <p>(navn)</p>
                        <p>(pris)</p>
                    </div>
                </div>
                
{"id":1163,"gender":"Men","category":"Apparel","subcategory":"Topwear","articletype":"Tshirts","season":"Summer","productionyear":2011,"usagetype":"Sports","productdisplayname":"Sahara Team India Fanwear Round Neck Jersey","price":895,"discount":null,"brandname":"Nike","soldout":0},{"id":1164,"gender":"Men","category":"Apparel","subcategory":"Topwear","articletype":"Tshirts","season":"Winter","productionyear":2015,"usagetype":"Sports","productdisplayname":"Blue T20 Indian Cricket Jersey","price":1595,"discount":28,"brandname":"Nike","soldout":1}

id	1163
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Tshirts"
season	"Summer"
productionyear	2011
usagetype	"Sports"
productdisplayname	"Sahara Team India Fanwear Round Neck Jersey"
price	895
discount	null
brandname	"Nike"
soldout	0
*/
