import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
	state: () => ({
		user: {
			id: 0,
			name: '',
			email: '',
			agreement: [],
			drafts: [],
		},
	}),
	actions: {
		setUser(userData) {
			this.user = userData
		},
		logout() {
			this.user = {
				id: 0,
				name: '',
				email: '',
				agreement: [],
				drafts: [],
			}
		},
	},
	getters: {
		getUser() {
			return this.user
		},
	},
})
