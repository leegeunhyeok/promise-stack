/**
 * @description Multiple asynchronous processing libraries
 * @author Leegeunhyeok
 * @version 1.0.0
 */

const PromiseStack = require('./src/PromiseStack')

const createPromiseStack = function () {
  return new PromiseStack()
}

module.exports = createPromiseStack
