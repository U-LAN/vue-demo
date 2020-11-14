<template>
  <div class="input-multiple" :class="stateClass">
    <div class="tag">
      <el-tag v-for="tag in tags" :key="tag" closable @close="tagClose(tag)">{{tag}}</el-tag>
    </div>
    <div class="input">
      <el-input v-model="text" :placeholder="placeholder" @focus="inputFocus" @blur="inputBlur"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: "returnData",
    event: "rep"
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    validateErr: {
      type: Boolean,
      default: false
    },
    returnData: Array
  },
  computed: {
    stateClass() {
      return { focus: this.focusBool, error: this.validateErr };
    }
  },
  data() {
    return {
      text: "",
      tags: [],
      focusBool: false //输入框是否获取焦点
    };
  },
  watch: {
    tags: {
      deep: true,
      handler(val) {
        this.$emit("rep", val);
        this.$emit('change',val)
      }
    },
  },
  methods: {
    inputFocus() {
      this.focusBool = true;
    },
    inputBlur() {
      this.focusBool = false;
      let val = this.checkoutVal(this.text);
      if (val) {
        for (let i = 0; i < val.length; i++) {
          this.tags.indexOf(val[i]) === -1 && this.tags.push(val[i]);
        }
      }
      this.text = "";
    },
    checkoutVal(text) {
      let val = text.trim();
      if (val.length === 0) {
        return false;
      } else {
        return val.split(",");
      }
    },
    tagClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    }
  }
};
</script>
<style lang="scss" scoped>
.input-multiple {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .input {
    flex-grow: 1;
    .el-input {
      /deep/ .el-input__inner {
        padding: 0;
        border: none;
      }
    }
  }
  .tag {
    .el-tag {
      margin: 5px 5px 5px 0;
    }
  }
}
.focus {
  border-color: #1890ff;
}
.error {
  border-color: #ff4949;
}
</style>