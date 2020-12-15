'use strict';

const Controller = require('egg').Controller;
const getSkeleton = require('auto-skeleton');
const initOptions = {
  pageName: 'mySkeletonPage',
  pageUrl: '',
  openRepeatList: true,
  device: 'iPhone X',
  minGrayBlockWidth: 0,
  minGrayPseudoWidth: 0,
  writeFile: false,
  debug: false,
  debugTime: 1000000,
  cookies: [],
};

class SkeletonController extends Controller {
  async home() {
    const { ctx } = this;
    await ctx.render('skeleton.tpl');
  }

  async getContentByUrl() {
    try {
      const { ctx } = this;
      const { pageUrl, options = {} } = ctx.request.body;
      options.pageUrl = pageUrl;
      const finalOptions = {
        ...initOptions,
        ...options,
      };

      try {
        const res = await getSkeleton(finalOptions);

        ctx.body = {
          code: '0',
          content: {
            ...res,
            message: '骨架屏生成成功，感谢使用',
          },
        };
      } catch {
        this.body = {
          code: '500',
          content: { message: '生成失败，请重试' },
        };
      }
    } catch (e) {
      this.body = {
        code: '500',
        content: { message: '生成失败，请重试' },
      };
    }
  }
}

module.exports = SkeletonController;
