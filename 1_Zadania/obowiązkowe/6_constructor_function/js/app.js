// zadanie 0
function Basket(){
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(name, price){
    this.products.push({name, price});
    this.sum += price;
}

Basket.prototype.showBasket = function(){
    for(let i = 0; i < this.products.length; i++){
        console.log(this.products[i]);
    }
    console.log(`Total: ${this.sum}`);
}

