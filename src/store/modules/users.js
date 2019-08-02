const state = {
	currentUser: null
}

const getters = {
	currentUser: state => state.currentUser
}

const actions = {
	setUser: ({commit}, user) => {
		commit('userStatus', user)
	}
}

const mutations = {
	userStatus: (state, user) => {
		if (user) {
			state.currentUser = user.email
		} else {
			state.currentUser = null
		}
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
