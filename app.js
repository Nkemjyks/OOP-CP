//class for product
let product = class {
    constructor(id, name, price){
        this.id = id
        this.name = name
        this.price = price
    }

}

// class for the cart
let cart = class {
    constructor(name){
        this.owner = name
    }
    coll = []

    //method to add item to cart    
    add_item(y){   
        const p = {...y}     
        

        // chk if item exist and add
        if(this.coll.find(e=>p.name==e.name)){
        this.coll.forEach(e=>{e.name==y.name?e.qty++:true})
        }
        else{
            p.qty = 1
            this.coll.push(p)
        }        
    }

    // method to remove item from cart
    del_item(y){
        //check if it exists and del      
        this.coll.forEach((e,i)=>{y.name==e.name?e.qty>0?e.qty--:this.coll.splice(i,1):true})        
    }

    // method to remove prod from cart
    del_prod(y){
        //check if it exists and del      
        this.coll.forEach((e,i)=>{y.name==e.name?this.coll.splice(i,1):true})        
    }

    // method to display item in cart
    updateView = () => {
        //reset
        shoeQty.textContent = socksQty.textContent = bagQty.textContent = 0
        this.coll.forEach(e=>e.name=='shoe'?shoeQty.textContent =e.qty:true)
        this.coll.forEach(e=>e.name=='socks'?socksQty.textContent =e.qty:true) 
        this.coll.forEach(e=>e.name=='bag'?bagQty.textContent =e.qty:true) 
        tPrice.textContent = mycart.t_price();
    }
    //method to return total price from cart
    t_price(){
        let tp = 0
        this.coll.forEach(e=>tp+=e.qty*e.price)
        return tp
    }
}

//create products shoe, socks and bag and cart
let shoe = new product(0,'shoe',100)
let socks = new product(1,'socks',20)
let bag = new product(2,'bag',50)
let mycart = new cart('nkem')

// DOM var declarations

// var declarations total price
let tPrice = document.querySelector('#totP');
// var declarations shoe
let addShoe = document.querySelector('#shoePlus');
let remShoe = document.querySelector('#shoeMinus'); 
let delSh = document.querySelector('#delSh');

// var declarations socks
let addSocks = document.querySelector('#socksPlus');
let remSocks = document.querySelector('#socksMinus'); 
let delSo = document.querySelector('#delSo');


// var declarations bag
let addBag = document.querySelector('#bagPlus');
let remBag = document.querySelector('#bagMinus'); 
let delBa = document.querySelector('#delBa');

// other declarations- views
let heartArr = document.querySelectorAll('.fa-heart');
let shoeQty = document.querySelector('#shoeQty');
let socksQty = document.querySelector('#socksQty'); 
let bagQty = document.querySelector('#bagQty'); 

//event listeners
// shoe +/_ operation
addShoe.addEventListener('click', ()=>{
    mycart.add_item(shoe)
    mycart.updateView()
    
})
remShoe.addEventListener('click', () => {   
    mycart.del_item(shoe)
    mycart.updateView()
})

// socks +/_ operation
addSocks.addEventListener('click', ()=>{
    mycart.add_item(socks)
    mycart.updateView()
})
remSocks.addEventListener('click', () => {
    mycart.del_item(socks)
    mycart.updateView()
})

// bag +/_ operation
addBag.addEventListener('click', ()=>{
    mycart.add_item(bag)
    mycart.updateView()
})
remBag.addEventListener('click', () => {
    mycart.del_item(bag)
    mycart.updateView()
})

// delete functions
delSh.addEventListener('click', () => {
    mycart.del_prod(shoe)
    mycart.updateView()
})

delSo.addEventListener('click', () => {
    mycart.del_prod(socks)
    mycart.updateView()
})

delBa.addEventListener('click', () => {
    mycart.del_prod(bag)
    mycart.updateView()
})

// heart ops
heartArr.forEach((e)=>{
    e.addEventListener('click', () => {
             
        if(e.style.color == 'red'){
            e.style.color = 'black';
            
        }
        else{
            e.style.color = 'red';
             
        }
    })
})
