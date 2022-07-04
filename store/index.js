
import Vue from 'vue'
import Vuex from 'vuex'
import pulsa from './pulsa'
import user from './user'
import authentication from './authentication'
import saldo from './saldo'
import transaction from './transaction'

Vue.use(Vuex)

export default () =>
  new Vuex.Store({
    modules: {
      pulsa: {
        namespaced: true,
        ...pulsa,
      },
      user: {
        namespaced: true,
        ...user,
      },
      authentication: {
        namespaced: true,
        ...authentication,
      },
      saldo: {
        namespaced: true,
        ...saldo,
      },
      transaction: {
        namespaced: true,
        ...transaction,
      },
    },
  })
