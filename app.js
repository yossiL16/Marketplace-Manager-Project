import { addProdact, removeProduct, editPrice, showByPriceOrder, filterByCategory } from "./services.js"
import { showProductDetails } from "./utils.js"
import readlineSync from 'readline-sync'


let flag = true
while (flag) {
    console.log("=== Marketplace Manager ===");
    console.log(" ");
    console.log("1. Add a new product for sale");
    console.log("2. Edit an existing product price");
    console.log("3. Show all products (sorted from most expensive to least expensive)");
    console.log("4. Show full details about a product (by ID)");
    console.log("5. Delete product (sold/not applicable)");
    console.log("6. Filter by category");
    console.log("0. Exit");

    let answer = readlineSync.questionInt("enter your answer: ")

    switch (answer) {

        case 1:
            const title = readlineSync.question("enter title: ");
            const price = readlineSync.questionInt("enter price: ");
            const description = readlineSync.question("enter description: ");
            const category = readlineSync.question("enter category: ")
            addProdact(title, price, description, category);
            break

        case 2:
            const id = readlineSync.questionInt("enter ID: ");
            const newPrice = readlineSync.questionInt("enter price: ");
            editPrice(id, newPrice);
            break

        case 3:
            console.log(showByPriceOrder());
            break

        case 4:
            const ID = readlineSync.questionInt("enter id: ");
            showProductDetails(ID)
            break

        case 5:
            const delId = readlineSync.questionInt("enter id: ");
            removeProduct(delId)
            break

        case 6:
            const categ = readlineSync.question("enter category: ");
            filterByCategory(categ)
            break

        case 0:
           flag = false
            break
            
    }
}

