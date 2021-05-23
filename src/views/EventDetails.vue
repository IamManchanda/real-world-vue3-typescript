<template>
  <div v-if="event && loading">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <p>
      <router-link class="go-back-link" :to="{ name: 'EventList' }"
        >Go Back</router-link
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EventItem } from "../types";
import EventService from "../services/EventService";

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      event: {} as EventItem,
      loading: false,
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data;
        this.loading = true;
      })
      .catch(error => {
        console.log(error);
      });
  },
});
</script>
<style scoped>
.go-back-link {
  color: #2c3e50;
  font-size: 110%;
  font-weight: bold;
  text-decoration: underline;
}
</style>
