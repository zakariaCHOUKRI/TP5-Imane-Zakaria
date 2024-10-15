import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreatePostView from '../views/CreatePostView.vue';
import PostDetailView from '../views/PostDetailView.vue';
import EditPostView from '../views/EditPostView.vue'; // Import the EditPostView

const routes = [
  { path: '/', component: HomeView },
  { path: '/addPost', component: CreatePostView },
  { path: '/posts/:id', component: PostDetailView },
  { path: '/editPost/:id', component: EditPostView } // Add route for EditPostView
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
