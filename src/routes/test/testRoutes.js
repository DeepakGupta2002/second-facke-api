const express = require('express');
const { testRouteController } = require('../../controllers/test/testRouteController');
const testRoutes = express.Router();

testRoutes.get('/order', testRouteController);

module.exports = { testRoutes };
