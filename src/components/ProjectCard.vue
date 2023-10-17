<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        };
    },
    methods: {
        getImage(project) {
            return `http://127.0.0.1:8000/storage/${project.image}`
        }
    },
}
</script>

<template>
    <div class="project-card card mb-3">
        <img :src="getImage(project)" class="card-img-top" alt="..">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div>{{ project.type.title }}</div>
            <div class="d-flex gap-3 mb-3">
                <span v-for="technology in project.technologies" :key="technology.id" class="badge bg-info">
                    {{ technology.title }}
                </span>
            </div>

            <a :href="project.link" class="btn btn-primary">GitHub Link</a>

        </div>
        <div class="card-footer">
            <router-link :to="{ name: 'project.show', params: { id: project.id } }">Vedi dettagli</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
