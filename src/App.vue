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
    fetchData() {
      axios.get( "http://127.0.0.1:8000/api/projects").then((response) => {

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
    <div class="container p-5">
      <div class="row">
        <div v-for="project in projects" :key="project.id" class="col-md-4">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>

  </main>

</template>

<style>
</style>
