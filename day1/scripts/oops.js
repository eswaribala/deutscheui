//constructor
function Product(name,cost){
    //instance variables
    this.name=name;
    this.cost=cost;
    var brand="Samsung";
    this.showBrand=function(){
        console.log(brand);
    }
}

function SeasonalProduct(name,cost,offer){
    Product.call(this,name,cost);//super call
    this.offer=offer;
}

//inheritance
SeasonalProduct.prototype=new Product();


//declare method
Product.prototype.calculateBill=function(qty){
    console.log(this.name,this.cost,this.cost*qty);
    this.showBrand();
}

//create object
var product=new Product('Mobile',56000);
//console.log(product);
//invoke the method
product.calculateBill(837);

//inherited object
var seasonalProduct=new SeasonalProduct('CoolDrinks',60,0.05);
console.log(seasonalProduct.name,seasonalProduct.cost,seasonalProduct.offer);
