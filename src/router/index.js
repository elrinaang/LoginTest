import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login.vue";
import Secure from "@/components/Secure.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },

    {
      path: "/Secure",
      name: "Secure",
      component: Secure
    }
  ]
});
