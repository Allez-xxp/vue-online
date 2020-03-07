
<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- 表单 -->
    <div class="info-form">
      <!-- Form组件由iview提供；在mvvm里数据第一，Form获取数据
      ref属性相当于dom里的id；
      :model="formValidate":进行双向绑定，表单验证
      prop:参数;
      在FormItem组件中，双向绑定某一特定属性：v-model
      -->
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
        <FormItem label="手机号" prop="phone">
          <i-input placeholder="请输入手机号" size="large" 
          v-model="formValidate.phone"></i-input>
        </FormItem>
        <FormItem label="验证码" prop="checkNum">
          <i-input placeholder="请输入验证码" size="large" 
          v-model="formValidate.checkNum">
            <Button slot="append" @click="getcheckNum">获取验证码</Button>
          </i-input>
        </FormItem>
        <Button type="error" size="large"
         long @click="handleSubmit('formValidate')">验证手机号</Button>
      </Form>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        phone: '',     //手机号
        checkNum: '',  //验证码
      },
      ruleValidate: {
        phone: [
          {
            required: true,//必填
            message: '手机号不能为空',
            trigger: 'blur',  //触发，失去焦点
          },
          {
            types: 'string',
            pattern: /^1[3|5|7|8|9][0-9]{9}$/,  //正则
            message: '手机号格式出错',
            trigger: 'blur',
          }
        ],
        checkNum: [
          {
            required : true,
            message: '验证码不能为空',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 4,
            max: 4,
            message: '验证码长度错误',
            trigger: 'blur'
          },
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      // 验证表单
      // console.log(this.formValidate);
      // 是否通过验证？
      this.$refs.formValidate.validate((valid) =>{
        // console.log(valid);
        if(valid) {
          this.$Message.success({
          content: '成功激活手机号',
          durtain: 12,
          closable: true
          })
        } else {
          this.$Message.error({
          content: '表单有问题',
          durtain: 12,
          closable: true
          })
        } 
      })
    },
    getcheckNum() {
      if(this.formValidate.phone.length === 11) {
        this.$Message.success({
          // this(沿着原型链) ->vue -> use(引用iview) ->Message js 声明调用
          // 消息提示组件：$Message
          content:'验证码为：1123',
          durtain:12,
          closable:true
        });
      } else {
          this.$Message.error({
            content: '请输入正确的手机号',
            durtain:12,
            closable:true
          }); 
        }
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
