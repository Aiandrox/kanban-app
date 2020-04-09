import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailModal from '@/components/templates/KbnTaskDetailModal.vue'
/* ↑使うコンポーネントをインポート  @ はsrc　*/

export default [{
  path: '/',
  component: KbnBoardView,
  meta: { requiresAuth: true }, // ログイン必要だよっていうのを渡す
  children: [{
    path: 'tasks/:id',
    component: KbnTaskDetailModal,
    name: 'taskDetailModal',
    meta: { requiresAuth: true }
  }]
}, {
  path: '/login',
  component: KbnLoginView
}, {
  path: '*',
  redirect: '/'
}]
