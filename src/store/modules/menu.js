import { firestoreAction } from 'vuexfire';

const state = {
	menuItems: []
}

const getters = {
	getMenuItems: state => state.menuItems
}

const actions = {
	setMenuRef: firestoreAction(({bindFirestoreRef, unbindFirestoreRef}, {ref}) => {
		// this will unbind any previously bound ref to 'todos'
		bindFirestoreRef('menuItems', ref)
		// you can unbind any ref easily
		unbindFirestoreRef('menuItems')
	})
}

const mutations = {}

export default {
	state,
	getters,
	actions,
	mutations
}
