<script>
import axios from "axios";

export default {
    data() {
        return {
            project: {},
        };
    },
    methods: {
        fetchData() {

            axios.get("http://localhost:8000/api/projects/" + this.$route.params.id)
                .then((response) => {
                    this.project = response.data;
                });
        },
        getImage(project) {
            return `http://127.0.0.1:8000/storage/${project.image}`
        }

    },
    mounted() {
        this.fetchData();
    },
}
</script>

<template>
    <div class="container">
        <div class="card mb-3">
            <img :src="getImage(project)" class="card-img-top" alt="..">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <div>
                    <div class="d-flex gap-3 mb-3">
                        <span v-for="technology in project.technologies" :key="technology.id" class="badge bg-info">
                            {{ technology.title }}
                        </span>
                    </div>
                    <p class="card-text">
                        <a href="{{ project.link }}">{{ project.link }}</a>
                    </p>
                </div>

                <p class="card-text">
                    <small class="text-muted">{{ project.date }}</small>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
