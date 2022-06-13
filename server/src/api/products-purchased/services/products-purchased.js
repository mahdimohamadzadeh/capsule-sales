'use strict';

/**
 * products-purchased service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::products-purchased.products-purchased');
