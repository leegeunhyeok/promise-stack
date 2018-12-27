/**
 * @description Multiple asynchronous processing libraries
 * @author Leegeunhyeok
 * @version 1.0.0
 */


class PromiseStack {
  constructor () {
    this._works = []
  }

  init (option) {
    this._option = option
    return this
  }

  add (target, option = {}) {
    this._works.push({ target, option })
    return this
  }

  async run () {
    const result = []
    for (let [index, targetWork] of this._works.entries()) {
      try {
        result.push(await new Promise((resolve, reject) => {
          try {
            targetWork.target(value => {
              resolve(value)
            }, e => {
              reject(new Error(`Error at index ${index} work\n${e}`))
            })
          } catch (e) {
            reject(e)
          }
        }))
      } catch (e) {
        if (this._option['nonStop']) {
          console.error(e)
        } else {
          throw e
        }
      }
    }
    return result
  }
}

module.exports = PromiseStack
