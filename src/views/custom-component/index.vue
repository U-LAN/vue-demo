<template>
  <div>
    <el-card>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="IP地址" ref="ip" prop="ip">
          <input-multiple
            :validate-err="validateErr"
            v-model="form.ip"
            placeholder="请输入ip地址,多个ip请以逗号隔开"
            @change="inputMultipleChange"
          ></input-multiple>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import InputMultiple from "./components/input-multiple";
export default {
  components: {
    InputMultiple
  },
  data() {
    let validateIp = (rule, value, callback) => {
      if (value.length === 0) {
        this.validateErr = true;
        callback(new Error("请输入IP地址"));
      } else {
        let i = 0;
        for (; i < value.length; i++) {
          let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
          if (!reg.test(value[i])) {
            break;
          }
        }
        if (i === value.length) {
          this.validateErr = false;
          callback();
        } else {
          this.validateErr = true;
          callback(new Error("请输入正确的IP地址"));
        }
      }
    };
    return {
      validateErr: false,
      form: {
        name: "",
        ip: []
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        ip: { required: true, validator: validateIp, trigger: "blur" }
      }
    };
  },
  methods: {
    inputMultipleChange(val) {
      this.$refs.form.validateField("ip", err => {
        if (err) this.validateErr = true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.el-card {
  width: 300px;
  height: 300px;
}
</style>