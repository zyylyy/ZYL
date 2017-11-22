import promisePolyfill from 'es6-promise'   // es6 promise polyfill
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import { cloneDeep } from 'lodash'

promisePolyfill.polyfill()
Vue.use(Vuex)

import demo from './modules/demo'
import hud from './modules/hud'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        demo,
        hud,
    }
})