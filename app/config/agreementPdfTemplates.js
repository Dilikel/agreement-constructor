export const agreementPdfTemplates = {
	person: d => {
		const hasRepresentative = d.hasRepresentative === 'yes'

		return [
			{ text: 'ПУБЛИЧНАЯ ОФЕРТА', style: 'docTitle' },

			{
				columns: [
					{ text: `Место публикации: ${d.place || '-'}`, style: 'docMeta' },
					{
						text: `Дата: ${d.date || '-'}`,
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
			{ text: '1. Термины', style: 'sectionTitle' },
			{
				stack: [
					{
						text: '1.1. В целях единого толкования и понимания, нижеприведенные термины используются в следующем значении:\n1.1.1. Акцепт публичной оферты полное и безоговорочное принятие Пользователем условий настоящей публичной Оферты (далее «Акцепт»).\n1.1.2. Договор возмездное соглашение между Администрацией и Пользователем, заключенное посредством Акцепта публичной Оферты (далее - «Договор» или «Оферта», в зависимости от контекста).\n1.1.3. Пользователь физическое лицо, заключившее с Администрацией Договор на условиях, содержащихся в настоящей публичной Оферте (далее «Пользователь»).',
						style: 'paragraph',
					},
				],
			},
		]
	},

	ip: d => {
		const serviceUrl =
			d.organizationType === 'site'
				? d.siteUrl
				: d.organizationType === 'app'
				? d.appUrl
				: d.serviceUrl

		return [
			{ text: 'ПУБЛИЧНАЯ ОФЕРТА', style: 'docTitle' },

			{
				columns: [
					{ text: `Место публикации: ${d.place || '-'}`, style: 'docMeta' },
					{
						text: `Дата: ${d.date || '-'}`,
						style: 'docMeta',
						alignment: 'right',
					},
				],
				margin: [0, 0, 0, 20],
			},

			{ text: '1. ИНФОРМАЦИЯ ОБ ОРГАНИЗАЦИИ', style: 'sectionHeader' },
			{
				table: {
					widths: ['40%', '*'],
					body: [
						['Наименование организации', d.organizationName || '-'],
						['Тип размещения оферты', d.organizationType || '-'],
						['Ссылка на ресурс', serviceUrl || '-'],
					],
				},
				layout: 'lightHorizontalLines',
				margin: [0, 0, 0, 15],
			},

			{ text: '2. ПРЕДСТАВИТЕЛЬСТВО', style: 'sectionHeader' },
			{
				text: `Представитель: ${d.representativeName || '-'}`,
				style: 'paragraph',
			},

			{ text: '3. ПРЕДМЕТ ДОГОВОРА', style: 'sectionHeader' },
			{
				text: d.subject || '-',
				style: 'paragraph',
			},

			{ text: '4. УСЛОВИЯ ЛИЦЕНЗИИ', style: 'sectionHeader' },
			{
				ul: [
					d.allowedUserRightsLicense &&
						`Разрешено: ${d.allowedUserRightsLicense}`,
					d.prohibitedUserRightsLicense &&
						`Запрещено: ${d.prohibitedUserRightsLicense}`,
				].filter(Boolean),
				style: 'paragraph',
			},

			{ text: '5. ТЕРРИТОРИЯ ДЕЙСТВИЯ', style: 'sectionHeader' },
			{
				text:
					d.territory === 'custom'
						? `Территория: ${d.customTerritory || '-'}`
						: `Территория: ${d.territory || '-'}`,
				style: 'paragraph',
			},
		]
	},
}
