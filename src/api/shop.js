import _products from './products.json'

const TIMEOUT = 100

export default {
    getProducts: (callback, timeout) => {
      setTimeout(() => callback(_products), timeout || TIMEOUT) // mocking async behaviour using setTimeout
    },
    buyProducts: (payload, callback, timeout) => {
        setTimeout(() => callback(), timeout || TIMEOUT)
    }
}
