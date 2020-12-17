'use strict';

module.exports = () => {
  return async function antuer(ctx, next) {
    ctx.state.csrf = ctx.csrf;
    await next();
  };
};