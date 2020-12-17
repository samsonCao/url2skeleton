// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnther = require('../../../app/middleware/anther');

declare module 'egg' {
  interface IMiddleware {
    anther: typeof ExportAnther;
  }
}
