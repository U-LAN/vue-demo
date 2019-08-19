const _produccts = [
  {
    name: '苹果',
    price: '5.6',
    count: '1'
  },
  {
    name: '香蕉',
    price: '7.4',
    count: '1'
  },
  {
    name: '橘子',
    price: '9.8',
    count: '1'
  },
  {
    name: '火龙果',
    price: '16',
    count: '1'
  }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_produccts), 100)
  }
}
