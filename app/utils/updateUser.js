import { useAgreementStore } from '~/stores/agreement'

export async function updateUser(user, targetField = 'drafts', token) {
	const config = useRuntimeConfig()
	const agreementStore = useAgreementStore()
	const rawUser = typeof user === 'function' ? user() : user?.value ?? user
	if (!rawUser?.id) {
		console.warn('Нет ID пользователя')
		return
	}

	const newAgreement = agreementStore.agreement
	const currentList = rawUser[targetField] || []

	const updatedList = [...currentList]
	const index = updatedList.findIndex(item => item.id === newAgreement.id)

	if (index !== -1) {
		updatedList[index] = newAgreement
	} else {
		updatedList.push(newAgreement)
	}

	try {
		const response = await $fetch(
			`${config.public.API_URL}/users/${rawUser.id}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: {
					[targetField]: updatedList,
				},
			}
		)
		return response
	} catch (error) {
		console.error('Ошибка обновления пользователя:', error)
		return error
	}
}

export async function deleteUserAgreement(
	user,
	targetField = 'drafts',
	token,
	id
) {
	const config = useRuntimeConfig()
	const rawUser = typeof user === 'function' ? user() : user?.value ?? user
	if (!rawUser?.id) {
		console.warn('Нет ID пользователя')
		return
	}
	const currentList = rawUser[targetField] || []
	const updatedList = currentList.filter(item => item.id !== id)

	try {
		const response = await $fetch(
			`${config.public.API_URL}/users/${rawUser.id}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: {
					[targetField]: updatedList,
				},
			}
		)
		return response
	} catch (error) {
		console.error('Ошибка при удалении документа:', error)
		return error
	}
}
