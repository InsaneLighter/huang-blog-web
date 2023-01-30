const state = {
  info: {}
}

const mutations = {
  SET_USER: (state,user) => {
    state.info = user
  }
}

const actions = {
  setUser({ commit },user) {
    commit('SET_USER',user)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
