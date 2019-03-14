<template>
  <el-form class="price-form" ref="form" :model="form" :rules="rules">
    <el-form-item prop="min">
      <el-input-number :controls="false" v-model="form.min" @change="handleMinChange" placeholder="0"></el-input-number>
    </el-form-item>
    —
    <el-form-item prop="max">
      <el-input-number :controls="false" v-model="form.max" @change="handleMaxChange" placeholder="0"></el-input-number>
    </el-form-item>
    <i class="el-icon-error" @click="resetForm"></i>
  </el-form>
</template>
<script>
const MIN_NUMBER = 1
const MAX_NUMBER = 100000

export default {
  props: {
    index: {
      type: Number,
      default: 0,
      required: true
    },
    popform: {
      type: Object,
      default: () => { return { min: '', max: '' } }
    }
  },
  data () {
    return {
      form: this.popform,
      rules: {
        min: [
          { required: true, message: ' 必填项', trigger: 'blur' },
          { validator: this.validateCom, trigger: 'blur' },
          { validator: this.validateMin, trigger: 'blur' }
        ],
        max: [
          { required: true, message: ' 必填项', trigger: 'blur' },
          { validator: this.validateCom, trigger: 'blur' },
          { validator: this.validateMax, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getFormData () {
      const ret = {}
      this.$refs.form.validate((valid) => {
        ret.valid = valid
        ret.form = this.form
      })
      return ret
    },
    resetForm () {
      this.$refs.form.resetFields()
    },
    handleMinChange () {
      this.$refs.form.validateField('max')
      this.emitValue()
    },
    handleMaxChange () {
      this.$refs.form.validateField('min')
      this.emitValue()
    },
    emitValue () {
      if (this.form.min !== '' && this.form.max !== '') {
        this.$emit('comFormList', {
          index: this.index,
          value: this.form
        })
      }
    },
    validateCom (rule, value, callback) {
      const one = Number(value)
      if (Number.isInteger(one)) {
        if (one < MIN_NUMBER) {
          return callback(new Error('输入值必须大于0'))
        } else if (one > MAX_NUMBER) {
          return callback(new Error('输入值必须小于100000'))
        }
        return callback()
      }
      return callback(new Error('必须为正数'))
    },
    validateMin (rule, value, callback) {
      const one = Number(value)
      const max = Number(this.form.max)
      if (!max || one < max) {
        return callback()
      }
      return callback(new Error('输入值不得大于最大阈值'))
    },
    validateMax (rule, value, callback) {
      const one = Number(value)
      const min = Number(this.form.min)
      if (!min || one > min) {
        return callback()
      }
      return callback(new Error('输入值不得小于最小阈值'))
    }
  }
}
</script>

<style lang="less">
@import '~assets/styles/qkwyq';

.el-form.price-form {
  border: 1px solid #e1e5ee;
  background: #fff;
  border-radius: 4px;
  width: 160px;
  height: 38px;
  line-height: 36px;
  box-sizing: border-box;
  padding: 0 10px;
  display: inline-flex;
  justify-content: space-between;
  position: relative;
  &:hover .el-icon-error {
    display: block;
  }
  .el-icon-error {
    position: absolute;
    top: 50%;
    right: 5px;
    color: #dde3e8;
    transform: translate(0, -50%);
    cursor: pointer;
    font-size: 10px;
    display: none;
  }
  .el-form-item {
    width: 60px;
    margin: 0;
    .el-form-item__content {
      line-height: 34px;
    }
    .el-input-number {
      width: 46px;
      line-height: 34px;
    }
    input {
      border: 0;
      padding: 0;
      text-align: center;
    }
  }
}
</style>
