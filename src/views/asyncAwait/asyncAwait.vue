<template>
  <div>
    <el-button @click="start">开始演示</el-button>
    <el-button @click="reset">重置数据</el-button>
    <p>num1：{{num1}}</p>
    <p>num2：{{num2}}</p>
    <p>num3：{{num3}}</p>
    <p>num4：{{num4}}</p>
    <hr />
    <p style="color:green;">{{count}}</p>
  </div>
</template>
<script>
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      count: null
    }
  },
  methods: {
    reset () {
      this.num1 = 0
      this.num2 = 0
      this.num3 = 0
      this.num4 = 0
      this.count = null
    },
    start () {
      let aa = async () => {
        let first = await this.addCount('num1')
        let second = await this.addCount('num2')
        let third = await this.addCount('num3')
        let fourth = await this.addCount('num4')
        this.count = first + second + third + fourth
      }
      aa()
        .then(() => {
          console.log('success')
        })
        .catch(() => {
          console.log('filed')
        })
    },
    addCount (name) {
      return (async () => {
        let n1 = await this.add1(this[name])
        this[name] = n1
        let n2 = await this.add1(n1)
        this[name] = n2
        let n3 = await this.add1(n2)
        this[name] = n3
        let n4 = await this.add1(n3)
        this[name] = n4
        return n4
      })()
    },
    add1 (num) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(num + 1)
        }, 500)
      })
    }
  }
}
</script>
<style scoped>
</style>
