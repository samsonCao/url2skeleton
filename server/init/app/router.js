'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/skeleton/home', controller.skeleton.home);
  router.post('/skeleton/getContentByUrl', controller.skeleton.getContentByUrl);
};
