import {createProdact} from "./models.js"
import {products} from "./data.js"


export function addProdact(title,price,description,category){
    const id = products[products.length -1].id + 1;
    const newProduct = createProdact(id, title,price,description,category)
    products.push(newProduct)
    console.log("The product has been successfully added");
    
    
}


export function removeProduct (id) {
    for(let p in products){
    if (list[p].id === id) {
        list.splice(p,1) 
        console.log("The product has been successfully deleted");
        
    }
}
}


export function editPrice (id, price) {
    const product = products.find((element) => element.id === id)
    product.price = price
    console.log("The product has been updated successfully");
    

}
    

export function showByPriceOrder() {
    let newProducts = products.slice()
    return newProducts.sort((a,b)=> b.price - a.price)
}


export function filterByCategory (category) {
    let filter = products.filter((item)=> item.category === category)
    console.log(filter);
    
}



