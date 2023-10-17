<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue"

export default {

    components: {
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
    <div class="container p-5">
        <div class="row">
            <div v-for="project in projects" :key="project.id" class="col-md-4">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-center">
        <a v-for="singlePageLink in pagination.links" class="btn btn-link" @click="fetchData(singlePageLink.url)"
            v-html="singlePageLink.label"></a>
    </div>
</template>

<style scoped></style>
