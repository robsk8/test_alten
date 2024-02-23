const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getProducts(){
    const rows = await db.query(  
        `SELECT *
        FROM Product`
    );
    const data = helper.returnRows(rows);

    return {
        data
    }
}

async function getProduct(id){
    const rows = await db.query(  
        `SELECT *
        FROM Product
        WHERE Product.id = ${id}`
    );
    data = helper.returnRows(rows);
    return {
        data
    }
}

async function deleteProduct(id){
    const result = await db.query(  
        `DELETE FROM Product 
        WHERE Product.id = ${id}`
    );

    let message = 'Error in updating product';
  
    if (result.affectedRows) {
      message = 'Product updated successfully';
    }
  
    return {message};
}

async function updateProduct(id,product){
    const result = await db.query(  
        `UPDATE Product
        SET code = '${product.code}', name = '${product.name}', description = '${product.description}', price = ${product.price}, category = '${product.category}', quantity = ${product.quantity}, inventoryStatus = '${product.inventoryStatus}'
        WHERE Product.id = ${id}`
    );
    let message = 'Error in updating product';
  
    if (result.affectedRows) {
      message = 'Product updated successfully';
    }
  
    return {message};
}


async function createProduct(product){
    const result = await db.query(
      `INSERT INTO Product(code, name, description, price, category, quantity, inventoryStatus)
       VALUES ('${product.code}','${product.name}', '${product.description}', ${product.price}, '${product.category}', ${product.quantity}, '${product.inventoryStatus}')`
    );
  
    let message = 'Error in creating product';
  
    if (result.affectedRows) {
      message = 'Product created successfully';
    }
  
    return {message};
}


module.exports = {
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct
}