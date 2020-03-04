<template>
  <div>
    <div class="header">
      利率：
      <el-input class="profit" v-model="profit" placeholder="请设置利率"></el-input>
      <el-form
        :inline="true"
        :model="formInline"
        :rules="rules"
        ref="ruleForm"
        class="demo-form-inline"
      >
        <el-form-item label="存入数量" prop="num">
          <el-input type="number" v-model="formInline.num" placeholder="输入存入数量"></el-input>
        </el-form-item>
        <el-form-item label="存入时间" prop="time">
          <el-date-picker
            v-model="formInline.time"
            align="right"
            type="date"
            value-format="timestamp"
            placeholder="选择存入时间"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('ruleForm')">存入</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table :data="tableData" show-summary>
      <el-table-column prop="time" label="存入时间">
        <template slot-scope="scope">{{util.formatDate.format(new Date(scope.row.time))}}</template>
      </el-table-column>
      <el-table-column prop="num" label="存入数量"></el-table-column>
      <el-table-column prop="get" label="累计收益(复利计算)"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import util from '../../assest/methods/util'
export default {
  data () {
    return {
      util,
      profit: 0.1,
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }
        ]
      },
      formInline: {
        time: '',
        num: ''
      },
      rules: {
        time: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        num: [{ required: true, message: '请输入存入数量', trigger: 'blur' }]
      },
      tableData: [
        // {
        //   time: 11,
        //   num: 2,
        //   get: 2
        // }
      ]
    }
  },
  watch: {
    profit (val) {
      if (val === '') {
        this.profit = 0.1
      }
      this.tableData.forEach(item => {
        item.get = this.getProfit(
          parseInt(item.num),
          this.getCountDays(item.time)
        ).toFixed(1)
      })
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { time, num } = this.formInline
          this.tableData.push({
            num,
            time,
            get: this.getProfit(parseInt(num), this.getCountDays(time)).toFixed(
              1
            )
          })
        } else {
          return false
        }
      })
    },
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
    },
    getProfit (num, time) {
      if (time === 0) return num
      return this.getProfit(num * (1 + parseFloat(this.profit)), time - 1)
    },
    getCountDays (time) {
      let now = new Date().getTime()
      let oneDay = 1 * 24 * 60 * 60 * 1000
      return parseInt((now - time) / oneDay)
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  .profit {
    width: 150px;
    margin-right: 24px;
  }

  .demo-form-inline {
    float: right;
  }
}
</style>
