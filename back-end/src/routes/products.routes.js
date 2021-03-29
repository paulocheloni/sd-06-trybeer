const express = require('express');

const controllers = require('../controllers/products');
const middlewares = require('../middlewares');

const products = express.Router();

// Swagger tags

/**
* @swagger
* tags:
*   - name: Products
*     description: The products endpoint
*/

// Swagger endpoints

/**
 * @swagger
 * /products:
 *   get:
 *     security:
 *      - apiKeyAuth: []
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the produts
 *       500:
 *         description: Server error. Please, contact support or try again later.
 */

products.get('/', middlewares.authToken, controllers.products);

module.exports = products;
