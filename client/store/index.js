export const state = () => ({
  user: null
})

export const actions = {
  async nuxtServerInit({
    dispatch
  }) {
    await dispatch('getAdmin')
  },
  async getAdmin({
    commit
  }) {
    const data = (await this.$axios.get('http://localhost:8082/api/users-normals')).data
    data.data.forEach(user => {
      commit("SET_USERS", user)
    });

  }
}
export const mutations = {
  SET_USERS(state, user) {
    state.user = user.attributes
  }
}
