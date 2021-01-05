import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Perceptron from "../views/Perceptron.vue";
import TwoLayer from "../views/TwoLayer.vue";

const history = createWebHistory();
const routes = [
  { 
    path: "/", 
    component: Home,
    name: 'Home'
  },
  { 
    path: "/perceptron", 
    component: Perceptron,
    name: 'Perceptron'
  },
  { 
    path: "/two-layer", 
    component: TwoLayer,
    name: 'Two Layer'
  }
];

const router = createRouter({ history, routes });
export default router;