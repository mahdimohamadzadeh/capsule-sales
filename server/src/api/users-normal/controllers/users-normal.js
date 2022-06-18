'use strict';

/**
 *  users-normal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::users-normal.users-normal');
