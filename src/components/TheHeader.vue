<script>
export default {

};
</script>

<template>
    <header>
        <nav class="container">
            <div class="py-3 d-flex justify-content-end">
                <ul class="ms-auto d-flex list-unstyled gap-3 align-items-center">
                    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                    <li><router-link :to="{ name: 'project' }">Project</router-link></li>
                    <li><a href="http://127.0.0.1:8000/login" class="btn btn-primary">Accedi</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>