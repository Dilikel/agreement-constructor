function getServiceType(d) {
	if (d.serviceType === 'serviceTypeSite') {
		return `1.1.4. Сервис - веб-сайт, расположенный в сети интернет по адресу ${
			d.serviceSiteUrl || '-'
		} (далее - «Сервис»).`
	}

	if (d.serviceType === 'serviceTypeApp') {
		return `1.1.4. Сервис - программное обеспечение ${
			d.serviceAppName || '-'
		}, доступное для скачивания в сети интернет по адресу ${
			d.serviceAppUrl || '-'
		} (далее - «Сервис»).`
	}

	if (d.serviceType === 'serviceTypeCustom') {
		return `1.1.4. Сервис - ${d.serviceCustomName || '-'}, ${
			d.serviceCustomDescription || '-'
		} (далее - «Сервис»).`
	}
}

function formattedDate(date) {
	if (!date) return '-'
	const parsed = new Date(date)
	if (isNaN(parsed)) return '-'
	return parsed.toLocaleDateString('ru-RU')
}

function getUserAccountBlock(d, indentText = '', indent = 0) {
	if (d.hasUserAccount !== 'yes') {
		return `\n\n${indentText}${indent}. Стороны не вправе ссылаться на незаключенность Договора по причине отсутствия у Пользователя личного кабинета.`
	}

	let result = `\n\n${indentText}${(indent =
		indent +
		1)}. Пользователь получает доступ к Сервису после регистрации/авторизации в Личном кабинете.`
	result += `\n\n${indentText}${(indent =
		indent +
		1)}. Пользователь обязуется обновлять персональные данные в случае их изменения.`

	if (d.userAccountRegistration === 'Нет') {
		result +=
			d.userAccountLoginPassword === 'Отправляется пользователю'
				? `\n\n${indentText}${(indent =
						indent +
						1)}. Администрация предоставляет логин и пароль Пользователю.`
				: `\n\n${indentText}${(indent =
						indent +
						1)}. Пользователь самостоятельно устанавливает логин и пароль.`
	} else if (d.userAccountRegistration === 'Да') {
		result += `\n\n${indentText}${(indent =
			indent + 1)}. Пользователь предоставляет Администрации ${
			d.userDataForRegistration || '-'
		} для регистрации.`
		result +=
			d.userAccountLoginPassword === 'Отправляется пользователю'
				? `\n\n${indentText}${(indent =
						indent +
						1)}. Администрация предоставляет логин и пароль Пользователю.`
				: `\n\n${indentText}${(indent =
						indent +
						1)}. Пользователь самостоятельно устанавливает логин и пароль.`
	}

	result += `\n\n${indentText}${(indent =
		indent +
		1)}. Стороны не вправе ссылаться на незаключенность Договора по причине отсутствия у Пользователя Личного кабинета.`
	result += `\n\n${indentText}${(indent =
		indent + 1)}. Новая редакция Оферты вступает в силу с момента публикации.`

	return result
}

function getLicenseSubjectText(d) {
	let text = `2.1. Пользователь получает неисключительное право использования Объекта лицензии – ${
		d.licenseObject || '-'
	}.`
	text += `\n\n2.2. Пользователь обязуется использовать Объект лицензии только в рамках функционала, предоставляемого Сервисом.`
	text += `\n\n2.3. Пользователь не вправе передавать полученные права третьим лицам.`
	text += `\n\n2.4. Объем и срок действия лицензии: ${
		d.licenseScope || '-'
	} / ${d.licenseTerm || '-'}.`
	text += getUserAccountBlock(d, '2.', 5)
	return text
}

function getSalesSubjectText(d) {
	let text = `2.1. Пользователь приобретает Товар, указанный в Сервисе – ${
		d.goodsName || '-'
	}.`
	text += `\n\n2.2. Характеристики, стоимость и количество определяются при оформлении заказа.`
	text += `\n\n2.3. Право собственности переходит в момент передачи Товара Пользователю.`
	text += getUserAccountBlock(d, '2.', 4)
	return text
}

function getServicesSubjectText(d) {
	const serviceTypes = {
		Информационные: 'информационные услуги',
		Консультационные: 'консультационные услуги',
		'Информационно-консультационные': 'информационно-консультационные услуги',
	}

	let mainText =
		serviceTypes[d.subjectServiceType] || d.subjectServicesProvided || '-'
	let text = `2.1. Администрация оказывает Пользователю ${mainText}.`
	text += getUserAccountBlock(d, '2.', 2)
	return text
}

function getSubject(d) {
	switch (d.subject) {
		case 'subjectServices':
			return getServicesSubjectText(d)
		case 'subjectLicense':
			return getLicenseSubjectText(d)
		case 'subjectSales':
			return getSalesSubjectText(d)
		case 'subjectCustom':
			return `2.1. ${d.subjectCustom || '-'}`
		default:
			return ''
	}
}

export const agreementPdfTemplates = {
	person: d => {
		const hasRepresentative = d.hasRepresentative === 'yes'

		return [
			{ text: 'ПУБЛИЧНАЯ ОФЕРТА', style: 'docTitle' },

			{
				columns: [
					{ text: `Место публикации: ${d.place || '-'}`, style: 'docMeta' },
					{
						text: `Дата: ${formattedDate(d.date) || '-'}`,
						style: 'docMeta',
						alignment: 'right',
					},
				],
				margin: [0, 0, 0, 20],
			},
			{
				stack: [
					{
						text: !hasRepresentative
							? `${
									d.organizationName || '-'
							  } (далее «Администрация») размещает настоящую публичную оферту 
в соответствии со ст. 435 и 437 Гражданского Кодекса Российской Федерации (далее - «Оферта») с предложением физическим и (или) 
юридическим лицам, действующим в лице представителя, заключить Договор на нижеследующих условиях:`
							: `${
									d.organizationName || '-'
							  } (далее «Администрация»), от имени которого действует ${
									d.representativePosition
							  } ${
									d.representativeName || '-'
							  } на основании устава, размещает настоящую публичную оферту 
в соответствии со ст. 435 и 437 Гражданского Кодекса Российской Федерации (далее - «Оферта») с предложением физическим и (или) 
юридическим лицам, действующим в лице представителя, заключить Договор на нижеследующих условиях:`,
						style: 'paragraph',
					},
				],
			},
			{
				stack: [
					{ text: '1. Термины', style: 'sectionTitle' },
					{
						text: '1.1. В целях единого толкования и понимания, нижеприведенные термины используются в следующем значении:',
						style: 'paragraph',
					},
					{
						text: '1.1.1. Акцепт публичной оферты полное и безоговорочное принятие Пользователем условий настоящей публичной Оферты (далее «Акцепт»).',
						style: 'paragraph',
					},
					{
						text: '1.1.2. Договор возмездное соглашение между Администрацией и Пользователем, заключенное посредством Акцепта публичной Оферты (далее - «Договор» или «Оферта», в зависимости от контекста).',
						style: 'paragraph',
					},
					{
						text: '1.1.3. Пользователь физическое лицо, заключившее с Администрацией Договор на условиях, содержащихся в настоящей публичной Оферте (далее «Пользователь»).',
						style: 'paragraph',
					},
					{ text: getServiceType(d), style: 'paragraph' },
				],
			},
			{
				stack: [
					{
						text: '2. Предмет договора и общие положение',
						style: 'sectionTitle',
					},
					{
						text: getSubject(d),
						style: 'paragraph',
					},
				],
			},
		]
	},

	ip: d => {
		return []
	},
}
