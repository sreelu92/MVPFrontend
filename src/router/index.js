import Vue from "vue";
import VueRouter from "vue-router";
import WelcomePage from "../views/Welcome.vue";
import SignupPage from "../views/Signup.vue";
import HomePage from "../views/Home.vue";
import LoginPage from "../views/Login.vue";
import ProfilePage from "../views/Profile.vue";
import NotesPage from "../views/Notes.vue";
import TaskPage from "../views/Tasks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome-page",
    component: WelcomePage
  },
  {
    path:"/signup",
    name:"signup-page",
    component:SignupPage
  },
  {
    path:"/home",
    name:"home-page",
    component:HomePage
  },
  {
    path:"/login",
    name:"login-page",
    component:LoginPage
  },
  {
    path:"/profile",
    name:"profile-page",
    component:ProfilePage
  },
  {
    path:"/notes",
    name:"notes-page",
    component:NotesPage
  },
  {
    path:"/task",
    name:"task-page",
    component:TaskPage
  }
 
];

const router = new VueRouter({
  routes
});

export default router;
