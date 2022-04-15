import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: 'todoList',
        component: () => import('@/pages/todoList/index.vue'),
        meta:{
            title:'todolist页面'
        }
    }
]

const router = createRouter({
    history:createMemoryHistory(),
    routes
})

export default router