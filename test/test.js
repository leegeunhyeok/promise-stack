/**
 * @description Test code
 * @author Leegeunhyeok
 * @version 1.0.0
 */

const createPromiseStack = require('../index')
const ps = createPromiseStack()

// Sample async work 1
const asyncWork_1 = (done, failed) => {
  setTimeout(() => {
    console.log('Work 1')

    // Work done! (with value)
    done('Work 1 return value!!')
  }, 1000)
}

// Sample async work 1
const asyncWork_2 = (done, failed) => {
  setTimeout(() => {
    console.log('Work 2')

    // Work done! (without value)
    done()
  }, 1000)
}

// Sample async work 1
const asyncWork_3 = (done, failed) => {
  setTimeout(() => {
    console.log('Work 3')

    // Oops! Error
    failed(new Error('Work 3 error T.T'))
  }, 1000)
}

// init(option)
ps.init({
  nonStop: true // Will be no exceptions throw (default: false)
})
.add(asyncWork_1)
.add(asyncWork_2)
.add(asyncWork_3)
.run()
.then(result => {
  console.log(result)
})
