import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home.vue"
import AboutView from "../views/About.vue"
import JobsView from "../views/jobs/Jobs.vue"
import JobDetailsView from "../views/jobs/JobDetails.vue"
import NotFoundView from "../views/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: AboutView
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView
  },
  {
    path: "/jobs/:id",
    name: "jobDetails",
    component: JobDetailsView,
    props: true
  },
  {
    path: "/home",
    redirect: "/"
  },
  {
    path: "/all-jobs",
    redirect: "/jobs"
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
