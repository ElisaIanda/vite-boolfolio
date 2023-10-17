<script>
import axios from "axios";
import TheHeader from "./components/TheHeader.vue";
import ProjectCard from "./components/ProjectCard.vue"

export default {

  components: {
    TheHeader,
    ProjectCard,
  },
  data() {
    return {
      projects: [],
      pagination: {},
    };
  },
  methods: {
    fetchData(url) {
      axios.get(url ?? "http://127.0.0.1:8000/api/projects").then((response) => {

        this.projects = response.data.data;

        // prima cancello la chiave data
        delete response.data.data;
        this.pagination = response.data;
      });
    },
  },
  mounted() {
    this.fetchData();
  },
}
</script>

<template>
  <TheHeader></TheHeader>

  <main>
    <router-view></router-view>
  </main>

</template>

<style>
</style>
