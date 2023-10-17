import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Project from "./pages/Project.vue";
import ProjectShow from "./pages/ProjectShow.vue";

const routes = [

    {
        path: "/", 
        name: "home", 
        component: Home,
    },
    {
        path: "/project", 
        name: "project", 
        component: Project,
    },
    {
        path: "/project/:id", 
        name: "project.show", 
        component: ProjectShow,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router };