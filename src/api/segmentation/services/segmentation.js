'use strict';

/**
 * segmentation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::segmentation.segmentation');
