<template>
  <div id="app">
    <hello></hello>
    <input type="text" v-model="btnTxt">
    <hi txt="hellotomorrow" v-bind:dddd="btnTxt"></hi>
  </div> 
</template>

<script>
import Hello from './components/Hello'
import hi from './components/hi'
export default {
  name: 'app',
  components: {
    Hello,hi
  },
  data(){
    return{
      btnTxt:"你好吗"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
