'use strict';

/**
 * users-normal service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::users-normal.users-normal');
