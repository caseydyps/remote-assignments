    function calculate(data) {
        // your code here
        let calc= data.discount; //discount
        let total =0;
        for(let i=0;i<data.products.length;i++){
            total=total+data.products[i].price;
            
        }
        result=(1-calc)*(total); //1-calc =1-discount, add up product 1~3's price
        //console.log("Product1: "+(1-calc)*data.products[0].price+" Product2: "+(1-calc)*data.products[1].price+" Product3: "+(1-calc)*data.products[2].price);
        //console.log("Total: "+ result)
        return result;
    

        }
    const discountedPrice = calculate({
    discount: 0.1,
    products: [
    {
    name: "Product 1",
    price: 100
    },
    {
    name: "Product 2",
    price: 700
    },
    {
    name: "Product 3",
    price: 250
    }
    ]
    });
    console.log(discountedPrice) // show the total price of all products after applying a discount