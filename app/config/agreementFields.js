export const agreementConfig = {
	person: {
		questions: [
			{
				type: 'yes-no',
				question: 'Указать, кто действует от имени юридического лица:',
				model: 'hasRepresentative',
				default: 'no',
				yesInputs: [
					{
						label: 'ФИО представителя:',
						placeholder: 'Иванов Иван',
						model: 'representativeName',
					},
				],
				noInputs: [
					{
						label: 'Наименование организации:',
						placeholder: 'ООО "Рога и копыта"',
						model: 'organizationName',
					},
				],
			},
			{
				type: 'select',
				question: 'Где размещается оферта (вид сервиса):',
				model: 'organizationType',
				default: 'site',
				options: [
					{ label: 'Сайт', value: 'site' },
					{ label: 'Приложение', value: 'app' },
					{ label: 'Свой вариант', value: 'custom' },
				],
				inputsByOption: {
					site: [
						{
							label: 'Укажите ссылку на сайт:',
							placeholder: 'https://example.com',
							model: 'siteUrl',
						},
					],
					app: [
						{
							label: 'Название приложения:',
							placeholder: 'Рога и копыта',
							model: 'appName',
						},
						{
							label: 'Укажите ссылку на приложение:',
							placeholder: 'https://example.com',
							model: 'appUrl',
						},
					],
					custom: [
						{
							label: 'Название сервиса:',
							placeholder: 'Рога и копыта',
							model: 'serviceName',
						},
						{
							label: 'Укажите ссылку на сервис:',
							placeholder: 'https://example.com',
							model: 'serviceUrl',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Предмет договора:',
				model: 'subject',
				options: [
					{ label: 'Оказание услуг', value: 'services' },
					{ label: 'Право использования сервиса (лицензия)', value: 'license' },
					{ label: 'Продажа товаров', value: 'sales' },
					{ label: 'Свой вариант', value: 'custom' },
				],
				inputsByOption: {
					license: [{}],
				},
			},
		],
	},
}
