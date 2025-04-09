import { defineStore } from 'pinia'

export const useAgreementStore = defineStore('AgreementStore', {
	state: () => ({
		agreement: {
			id: null,
			type: 'person',
			data: {},
		},
	}),
	actions: {
		setAgreement(agreement) {
			this.agreement = agreement
		},
		changeType(type) {
			this.agreement.type = type
			this.agreement.data = {}
		},
		updateDataField(key, value) {
			if (!this.agreement.data) {
				this.agreement.data = {}
			}
			this.agreement.data[key] = value
		},
		resetAgreement() {
			this.agreement = {
				id: null,
				type: 'person',
				data: {},
			}
		},
	},

	getters: {
		getAgreement(state) {
			return state.agreement
		},
	},
})
