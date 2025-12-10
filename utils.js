import {products} from "./data.js"

export function showProductDetails(id){

    for (let product of products){
        if (product.id === id){
            for(let property in product){
                console.log(`${property} : ${product[property]}`);
                
            }
        }
     }
}

showProductDetails(3)
