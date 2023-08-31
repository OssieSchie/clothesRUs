fetch("https://kea-alt-del.dk/t7/api/categories")
    .then(res=>res.json())
    .then(showCats)

    function showCats(Cats){
        Cats.forEach(showCat);
    }

    
    function showCat(cat){
        const catTemp = document.querySelector("#catTemplate").content;
        const copy = catTemp.cloneNode(true);
        
        copy.querySelector("a").textContent = cat.category;
        
        copy.querySelector("a").href = `productlist.html?category=` + cat.category;
        
        document.querySelector(".grid6-2").appendChild(copy);
    }