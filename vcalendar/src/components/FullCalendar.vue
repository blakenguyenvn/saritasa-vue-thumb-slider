<template>
  <div class="full-calendar-wrapper section">
    <h3>Example 2: Full Calender</h3>
    <div class="full-calendar">
      <full-calendar :event="calendar.events"></full-calendar>
    </div>
    
  </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css'

export default {
  name: 'FullCalendar',
  components: {
    'full-calendar': FullCalendar
  },
  props: {
    msg: String
  },
  data() {
    return {
      calendar: {
        events: [
          {
              title  : 'event1',
              start  : '2010-01-01',
          },
          {
              title  : 'event2',
              start  : '2010-01-05',
              end    : '2010-01-07',
          },
          {
              title  : 'event3',
              start  : '2010-01-09T12:30:00',
              allDay : false,
          },
        ]
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
