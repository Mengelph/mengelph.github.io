
import mainPortfolio from "./../views/Portfolio.vue";


import mainAttendance from "./../views/Attendance.vue";
import cosplayGallery from "./../views/cosplay.vue";
import portraitGallery from "./../views/portrait.vue";
import themesGallery from "./../views/themes.vue";
import reportGallery from "./../views/report.vue";
import mainContacts from "./../views/Contacts.vue";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import mainPage from "./../views/MainPage";

const routes = [
    {
        path: "/",
        name: "App",
        component: mainPage,
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: mainPortfolio,
    },
    {
        path: "/portfolio/cosplay",
        name: "cosplay",
        component: cosplayGallery,
    },
    {
        path: "/portfolio/portrait",
        name: "portrait",
        component: portraitGallery,
    },
    {
        path: "/portfolio/report",
        name: "report",
        component: reportGallery,
    },
    {
        path: "/portfolio/themes",
        name: "themes",
        component: themesGallery,
    },
    {
        path: "/attendance",
        name: "attendance",
        component: mainAttendance,
    },
    {
        path: "/contacts",
        name: "contacts",
        component: mainContacts,
    },
]

const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router