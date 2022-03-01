// LOCAL STORAGE
// SESSION STORAGE

// stringify / parse

if(localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]))
}

let btnAdd = document.querySelectorAll('.btn-add');


for(let btn of btnAdd) {
    btn.onclick = function(e){
        e.preventDefault();

        if(JSON.parse(localStorage.getItem('basket')) === null) {
            localStorage.setItem('basket', JSON.stringify([]));
        }
        

        let basket = JSON.parse(localStorage.getItem("basket"));
        let table = document.querySelector('.tbody1');

       
        let id = this.parentElement.getAttribute("data-id");
        let img = this.parentElement.previousElementSibling.getAttribute('src');
        let name = this.parentElement.firstElementChild.innerText;
        let existProd = basket.find(p => p.id == id);

        for(let prod of basket) {


            let tr = document.createElement('tr');
            let tdImg = document.createElement('td');
            let tdName = document.createElement('td');
            let tdCount = document.createElement('td');
            

            let img = document.createElement('img');
            img.setAttribute('src', prod.image);
            
            tdImg.appendChild(img);
            tdName.innerText = prod.name;
            tdCount.innerText = prod.count

            tr.append(tdImg,tdName,tdCount)
            console.log(tr)
        }

        // basket.forEach(data => {
            

        // })

        if(existProd === undefined) {
            basket.push({
                id: id,
                count: 1,
                name: name,
                image: img
            })
        }
        else{
            existProd.count += 1;
        }
       
        localStorage.setItem('basket',JSON.stringify(basket))
        countBasket();
    }
}

// map,filter,reduce,forEach => High Order Functions

function countBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    //document.getElementById('productCount').innerText = basket.reduce((x,y) => { return x+y.count},0)
    document.getElementById('productCount').innerText = basket.length
}


countBasket();

