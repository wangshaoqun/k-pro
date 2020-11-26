<template>
  <div class="login">
    <div class="m-bg">
      <div class="m-bg-mask m-bg-mask0"></div>
      <div class="m-bg-mask m-bg-mask1"></div>
      <div class="m-bg-mask m-bg-mask2"></div>
      <div class="m-bg-mask m-bg-mask3"></div>
    </div>
    <div class="login-form">
      <div class="val user-after">
        <input
          type="text"
          placeholder="用户名"
          class="login-input"
          v-model="state.user"
          @input="requireUser"
          @blur="requireUser"
        />
        <div class="login-image">
          <UserOutlined />
        </div>
        <label :class="state.userError? 'error' : ''">{{state.userError}}</label>
      </div>
      <div class="val user-after">
        <input
          type="password"
          placeholder="密码"
          class="login-input"
          v-model="state.password"
          @input="requirePwd"
          @blur="requirePwd"
        />
        <div class="login-image">
          <KeyOutlined />
        </div>
        <label :class="state.passwordError ? 'error' : ''">{{state.passwordError}}</label>
      </div>

      <a-button type="primary" block class="login-button" @click="login">登录</a-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { UserOutlined, KeyOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  components: {
    UserOutlined,
    KeyOutlined,
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      user: '',
      password: '',
      userError: '',
      passwordError: '',
    })
    const requireUser = () => {
      if (state.user == '') {
        state.userError = '请填写用户名'
      } else {
        state.userError = ''
      }
    }
    const requirePwd = () => {
      if (state.password == '') {
        state.passwordError = '请填写密码'
      } else {
        state.passwordError = ''
      }
    }
    const login = () => {
      if (!state.user || !state.password) {
        requireUser()
        requirePwd()
      } else {
        console.log(state)
        router.push({
          path: '/',
        })
      }
    }
    return {
      state,
      login,
      requireUser,
      requirePwd,
    }
  },
})
</script>
<style lang="less" scoped src="./index.less"></style>
