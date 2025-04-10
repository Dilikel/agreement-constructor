function getServiceType(d) {
	if (d.serviceType === 'site') {
		return `1.1.4. Сервис - веб-сайт, расположенный в сети интернет по адресу ${
			d.siteUrl || '-'
		} (далее - «Сервис»).`
	}

	if (d.serviceType === 'app') {
		return `1.1.4. Сервис - программное обеспечение ${
			d.appName || '-'
		}, доступное для скачивания в сети интернет по адресу ${
			d.appUrl || '-'
		} (далее - «Сервис»).`
	}

	if (d.serviceType === 'custom') {
		return `1.1.4. Сервис - ${d.serviceName || '-'}, ${
			d.serviceDescription || '-'
		} (далее - «Сервис»).`
	}
}

function formattedDate(date) {
	if (!date) return '-'
	const parsed = new Date(date)
	if (isNaN(parsed)) return '-'
	return parsed.toLocaleDateString('ru-RU')
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
				],
			},
		]
	},

	ip: d => {
		return []
	},
}
