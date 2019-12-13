<template>
  <div class="app">
    <!-- <a href="schedule.html"> -->
    <router-link to="/schedule">
      <div class="item ">
        <span class="el-icon-date logo"></span>
      </div>
    </router-link>
    <div class="text">会议室使用日程表</div>
    
    <router-link to="/apply">
      <div class="item ">
        <span class="el-icon-edit logo"></span>
      </div>
    </router-link>
    <div class="text">会议室预约申请</div>


    <router-link to="/applylist">
      <div class="item ">
        <span class="el-icon-document logo"></span>
      </div>
    </router-link>
    <div class="text">申请记录</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped="scoped">
  .app {
    background-color: white;
    background-repeat: no-repeat;
    padding: 20px;
  }

  .logo {
    color: white;
    font-size: 50px;
    padding: 2px;
  }

  .item {
    width: 55px;
    height: 55px;
    background-color: #66CCFF;
    margin-bottom: 1px;
    margin-left: auto;
    margin-right: auto;
    padding: 45px;
    border-radius: 50%;
    /* display: flex; */
  }

  .text {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 25px;
    width: 150px;
    color: #5BC0DE;
  }
</style>
