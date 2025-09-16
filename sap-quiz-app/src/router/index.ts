import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('../views/QuizView.vue'),
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../views/ResultView.vue'),
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/NotesView.vue'),
    },
    {
      path: '/notes/:course',
      name: 'course-notes',
      component: () => import('../views/CourseNotesView.vue'),
      props: true,
    },
    {
      path: '/notes/:course/:note',
      name: 'note-detail',
      component: () => import('../views/NoteDetailView.vue'),
      props: true,
    },
  ],
})

export default router
