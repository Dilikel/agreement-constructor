import { defineStore } from 'pinia'

export const useAgreementStore = defineStore('AgreementStore', {
	state: () => ({
		agreement: {
			type: 'person',
			data: [],
		},
	}),
	actions: {
		setAgreement(agreement) {
			this.agreement = agreement
		},
		changeType(type) {
			this.agreement.type = type
		},
	},
	getters: {
		getAgreement(state) {
			return state.agreement
		},
	},
})
