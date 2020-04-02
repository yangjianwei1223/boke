<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <a-layout>
      <a-layout-header>
        <div class="logo"></div>
        <a-menu
          theme="dark"
          mode="horizontal"
          @click="navClick"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">博客</a-menu-item>
          <a-menu-item key="2">Github</a-menu-item>
          <a-menu-item key="3">网站</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['sub1']"
            :style="{ height: '100%', borderRight: 0 }"
          >
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="user" />JavaScript</span>
              <a-menu-item key="1">总数增加动画</a-menu-item>
              <a-menu-item key="2">option2</a-menu-item>
              <a-menu-item key="3">option3</a-menu-item>
              <a-menu-item key="4">option4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="laptop" />CSS</span>
              <a-menu-item key="5">导航动画</a-menu-item>
              <a-menu-item key="6">option6</a-menu-item>
              <a-menu-item key="7">option7</a-menu-item>
              <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <span slot="title"><a-icon type="notification" />subnav 3</span>
              <a-menu-item key="9">option9</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 24px">
          <a-layout-content
            :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
          >
            <router-view />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    navClick (e) {
      console.log(e);
      let url = 'https://www.cnblogs.com/mojin/';
      if (e.key == 2) {
        url = 'https://github.com/yangjianwei1223';
      } else if (e.key == 3) {
        url = 'http://meiqingshuma.top/';
      }
      window.open(url, '_target');
    }
  }
}
</script>

<style lang="scss">
  #app{
    height: 100%;
    .ant-layout{
      height: 100%;
      .ant-layout-has-sider{
        height: 100%;
      }
    }
  }
  .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
</style>
