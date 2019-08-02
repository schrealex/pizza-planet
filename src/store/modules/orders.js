const state = {
	orders: []
}

const getters = {
	numberOfOrders: state => state.orders.length
}

const actions = {

}

const mutations = {
	addOrder: (state, orders) => state.orders.push(orders)
}

export default {
	state,
	getters,
	actions,
	mutations
}
