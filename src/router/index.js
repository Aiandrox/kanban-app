import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { authorizeToken } from './guards'

Vue.use(Router)

const router = new Router({ routes })
router.beforeEach(authorizeToken) // beforeEachは遷移しようとしたときに毎回走る。ログインしているかどうか確かめる

export default router
