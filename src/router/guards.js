import store from '../store'

export const authorizeToken = (to, from, next) => {
  //to 遷移する予定　from 今いるところ　next 実際に遷移するところ
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //rails のrequire login的なやつ
    // マッチしたルートにおいて、メタフィールドに`requiresAuth`が付与されている場合は
    // ログインした際に付与される認証トークンがあるかどうかチェックする
    // 注意:
    // このアプリケーションでは簡略化のため`auth.token`があるかどうかのみで
    // ログイン済みであるかどうかチェックしているが、
    // 本来ならば付与された認証トークンをバックエンドのAPI経由などで検証すべき
    if (!store.state.auth || !store.state.auth.token) { // ||のあたりはぼっち演算子的なことを判定している
      next({ path: '/login' })
    } else {
      next()
    }
  } else if (to.path === '/login' && store.state.auth.token) {
    next({ path: '/' }) // ログインしているのにログインページに行こうとしたら、ルートに飛んでね
  } else {
    next()
  }
}
