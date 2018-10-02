<template>
  <div class="agendar-wrapper section">
    <img alt="Vue logo" width="100px" src="../assets/vcalendar.png">
    <p>
      The library we will use in this guide is Vcalendar
      <a href="https://vcalendar.io/" target="_blank" rel="noopener">Vcalendar.io</a>.
    </p>
    <h3>Example 1: Calender Picker</h3>
    <div class="calendar-picker">
      <v-calendar-picker :is-inline="calendar.isInline" :mode="calendar.mode" v-model="calendar.dates" />
      <p><span v-for="(date, index) of calendar.dates" :key="index">{{date + ''}}</span></p>
    </div>
    
  </div>
</template>

<script>
import {setupCalendar, DatePicker} from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css';

setupCalendar({
  firstDayOfWeek: 2  // Monday,
})

export default {
  name: 'CalendarPicker',
  components: {
    'v-calendar-picker': DatePicker
  },
  props: {
    msg: String
  },
  data() {
    return {
      calendar: {
        isInline: true,
        mode: 'multiple',
        dates: []
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  border-top: dashed 2px #42b983;
  padding-top: 50px;
  margin-top: 50px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
