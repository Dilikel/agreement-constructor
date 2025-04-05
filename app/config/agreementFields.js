export const agreementConfig = {
	person: {
		inputs: [
			{
				label: 'Название организации',
				placeholder: 'ООО "Ромашка"',
				model: 'orgName',
			},
			{ label: 'ИНН', placeholder: '1234567890', model: 'inn' },
		],
		questions: [
			{
				question: 'Указать, кто действует от имени юридического лица:',
				model: 'hasRepresentative',
				default: 'no',
				yesInputs: [
					{
						label: 'ФИО представителя',
						placeholder: 'Иванов Иван',
						model: 'representativeName',
					},
				],
				noInputs: [
					{
						label: 'На основании чего действует?',
						placeholder: 'Устав / доверенность',
						model: 'basedOn',
					},
				],
			},
		],
	},
}
