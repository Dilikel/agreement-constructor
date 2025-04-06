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
						label: 'Наименование организации:',
						placeholder: 'ООО "Компания"',
						model: 'organizationName',
					},
					{
						label: 'ФИО представителя:',
						placeholder: 'Иванов Иван',
						model: 'representativeName',
					},
					{
						label: 'Должность представителя:',
						placeholder: 'Генеральный директор',
						model: 'representativePosition',
					},
				],
				noInputs: [
					{
						label: 'Наименование организации:',
						placeholder: 'ООО "Компания"',
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
							placeholder: 'Название приложения',
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
							placeholder: 'Название сервиса',
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
					license: [
						{
							label: 'Пользователь вправе пользоваться сервисом:',
							placeholder: 'Исключительно для собственных нужд',
							model: 'allowedUserRightsLicense',
						},
						{
							label: 'Пользователю запрещается:',
							placeholder: 'Копировать или изменять код Сервиса',
							model: 'prohibitedUserRightsLicense',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Территория действия:',
				model: 'territory',
				options: [
					{
						label: 'Весь мир',
						value: 'world',
					},
					{
						label: 'Российская Федерация',
						value: 'russia',
					},
					{
						label: 'Свой вариант',
						value: 'custom',
					},
				],
				inputsByOption: {
					custom: [
						{
							label: 'Укажите страну:',
							placeholder: 'Россия',
							model: 'customTerritory',
						},
					],
				},
			},
			{
				type: 'yes-no',
				question: 'Учетная запись пользователя:',
				model: 'hasUserAccount',
				default: 'no',
			},
		],
	},
}
