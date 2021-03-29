const express = require('express');

const controllers = require('../controllers/admin');
const middlewares = require('../middlewares');

const admin = express.Router();

// Swagger Schemas

// Swagger tags

/**
* @swagger
* tags:
*   - name: Admin
*     description: The sales endpoint
*/

// Swagger endpoint

/**
 * @swagger
 * /admin/sales/{id}:
 *   get:
 *     security:
 *      - apiKeyAuth: []
 *     summary: Get the sale by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The sale id
 *     responses:
 *       200:
 *         description: The sale by id
 *       404:
 *         description: The sale was not found
 */

admin.get('/sales/:id', middlewares.authToken, middlewares.authAdmin, controllers.details);

/**
 * @swagger
 * /admin/sales:
 *   get:
 *     security:
 *      - apiKeyAuth: []
 *     summary: Returns the list of all the sales
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: The list of the sales
 *       500:
 *         description: Server error. Please, contact support or try again later.
 */

admin.get('/sales', middlewares.authToken, middlewares.authAdmin, controllers.sales);



admin.put('/sales/:id', middlewares.authToken, middlewares.authAdmin, controllers.editSale);

module.exports = admin;
