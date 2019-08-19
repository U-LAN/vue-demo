<template>
  <div class="shop">
    <div class="shop-main">
      <!-- <table width="80%" border="1" cellspacing="1" cellpadding="4" align="center">
        <tr bgcolor="#cccccc">
          <td>序号</td>
          <td>名称</td>
          <td>价格(元/千克)</td>
          <td>数量</td>
        </tr>
        <tr v-for="(item,index) in shops" v-bind:key="index">
          <td>{{index}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <input
              type="button"
              v-bind:disabled="item.count === 0"
              v-on:click="item.count-=1"
              value="-"
            />
            &nbsp;{{item.count}}&nbsp;
            <input
              v-on:click="item.count++"
              type="button"
              value="+"
            />
          </td>
        </tr>
        <tr>
          <td>总计(元)：</td>
          <td colspan="3" style="color:red;">{{total}}</td>
        </tr>
      </table>-->

      <el-table :data="shops" style="width: 100%" :summary-method="getSummaries" show-summary>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="名称" width="180"></el-table-column>
        <el-table-column prop="price" label="单价" width="180"></el-table-column>
        <el-table-column prop="count" label="数量"></el-table-column>
        <el-table-column label="￥">
          <template slot-scope="scope">{{scope.row | calculate}}</template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-minus"
              :disabled="scope.row.count===0"
              @click="minus(scope.row)"
            ></el-button>
            <el-button size="mini" type="primary" icon="el-icon-plus" @click="plus(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Shop',
  data () {
    return {
      // shops: [
      //   {
      //     name: '苹果',
      //     price: '5.6',
      //     count: '1'
      //   },
      //   {
      //     name: '香蕉',
      //     price: '7.4',
      //     count: '1'
      //   },
      //   {
      //     name: '橘子',
      //     price: '9.8',
      //     count: '1'
      //   },
      //   {
      //     name: '火龙果',
      //     price: '16',
      //     count: '1'
      //   }
      // ]
    }
  },
  created () {
    this.$store.dispatch('shop/getAllProducts')
  },
  methods: {
    minus (row) {
      row.count--
    },
    plus (row) {
      row.count++
    },
    getSummaries (param) {
      const { data } = param
      const sums = []
      sums[0] = '合计'
      sums[2] = 0
      sums[3] = 0
      sums[4] = 0
      data.forEach(item => {
        sums[2] += Number(item.price)
        sums[3] += Number(item.count)
        sums[4] += Number(item.count * item.price)
      })
      sums[4] = sums[4].toFixed(2)
      return sums
    }
  },
  filters: {
    calculate (row) {
      return (row.count * row.price).toFixed(2)
    }
  },
  computed: mapState({
    shops: state => state.shop.shops,
    total: function () {
      var total = 0
      for (var i = 0; i < this.shops.length; i++) {
        total += this.shops[i].price * this.shops[i].count
      }

      return total.toFixed(2)
    }
  })
}
</script>
<style scoped>

</style>
