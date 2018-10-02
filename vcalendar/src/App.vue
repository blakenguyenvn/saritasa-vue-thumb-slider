<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- Hello World -->
    <HelloWorld msg="Welcome to How to use Vcalendar guide!"/>
    
    <!-- Calendar Picker -->
    <CalendarPicker/>

    <!-- Full Calendar -->
    <FullCalendar/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CalendarPicker from './components/CalendarPicker.vue'
import FullCalendar from './components/FullCalendar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    CalendarPicker,
    FullCalendar
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
  margin-top: 60px;
}
</style>
