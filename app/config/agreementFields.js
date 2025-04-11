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
				model: 'serviceType',
				default: 'serviceTypeSite',
				options: [
					{ label: 'Сайт', value: 'serviceTypeSite' },
					{ label: 'Приложение', value: 'serviceTypeApp' },
					{ label: 'Свой вариант', value: 'serviceTypeCustom' },
				],
				inputsByOption: {
					serviceTypeSite: [
						{
							label: 'Укажите ссылку на сайт:',
							placeholder: 'https://example.com',
							model: 'serviceSiteUrl',
						},
					],
					serviceTypeApp: [
						{
							label: 'Название приложения:',
							placeholder: 'Название приложения',
							model: 'serviceAppName',
						},
						{
							label: 'Укажите ссылку для скачивания:',
							placeholder: 'https://example.com',
							model: 'serviceAppUrl',
						},
					],
					serviceTypeCustomService: [
						{
							label: 'Название сервиса:',
							placeholder: 'Название сервиса',
							model: 'serviceCustomName',
						},
						{
							label: 'Описание сервиса:',
							placeholder: 'Описание сервиса',
							model: 'serviceCustomDescription',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Предмет договора:',
				model: 'subject',
				default: 'subjectServices',
				options: [
					{ label: 'Оказание услуг', value: 'subjectServices' },
					{
						label: 'Право использования сервиса (лицензия)',
						value: 'subjectLicense',
					},
					{ label: 'Продажа товаров', value: 'subjectSales' },
					{ label: 'Свой вариант', value: 'subjectCustom' },
				],
				inputsByOption: {
					subjectServices: [
						{
							label:
								'Вид услуги (Информационные / Консультационные / Информационно-консультационные / Свой вариант):',
							placeholder:
								'Информационные / Консультационные / Информационно-консультационные / Свой вариант',
							model: 'subjectServiceType',
						},
						{
							label: 'Перечислите оказываемые услуги:',
							placeholder: 'Перечислите оказываемые услуги',
							model: 'subjectServicesProvided',
						},
					],
					subjectLicense: [
						{
							label: 'Пользователь вправе пользоваться сервисом:',
							placeholder: 'Исключительно для собственных нужд',
							model: 'subjectAllowedUserRightsLicense',
						},
						{
							label: 'Пользователю запрещается:',
							placeholder: 'Копировать или изменять код Сервиса',
							model: 'subjectProhibitedUserRightsLicense',
						},
					],
					subjectSales: [
						{
							label:
								'Осуществляется доставка (Нет / Собственными силами / Силами третьих лиц):',
							placeholder: 'Нет / Собственными силами / Силами третьих лиц',
							model: 'subjectSalesDelivery',
						},
					],
					subjectCustom: [
						{
							label: 'Укажите предмет договора:',
							placeholder: 'Укажите предмет договора',
							model: 'subjectCustom',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Территория действия:',
				model: 'territory',
				default: 'territoryWorld',
				options: [
					{
						label: 'Весь мир',
						value: 'territoryWorld',
					},
					{
						label: 'Российская Федерация',
						value: 'territoryRussia',
					},
					{
						label: 'Свой вариант',
						value: 'territoryCustom',
					},
				],
				inputsByOption: {
					territoryCustom: [
						{
							label: 'Укажите страну:',
							placeholder: 'Россия',
							model: 'territoryCustomValue',
						},
					],
				},
			},
			{
				type: 'yes-no',
				question: 'Учетная запись пользователя:',
				model: 'hasUserAccount',
				default: 'no',
				yesInputs: [
					{
						label: 'Пользователь указывает данные при регистрации (Да / Нет):',
						placeholder: 'Да / Нет',
						model: 'userAccountRegistration',
					},
					{
						label:
							'Логин и пароль (Отправляется пользователю / Выбирается пользователем) ',
						placeholder: 'Отправляется пользователю / Выбирается пользователем',
						model: 'userAccountLoginPassword',
					},
					{
						label:
							'Укажите данные для регистрации (только если пользователь указывает данные при регистрации )',
						placeholder: 'Укажите данные для регистрации',
						model: 'userDataForRegistration',
					},
				],
			},
		],
		inputs: [
			{
				label: 'Акцептом договора является:',
				placeholder: 'Акцептом договора является',
				model: 'acceptor',
			},
		],
	},
	ip: {
		inputs: [
			{
				label: 'Укажите ФИО индивидуального предпринимателя:',
				placeholder: 'Укажите ФИО индивидуального предпринимателя',
				model: 'ipName',
			},
			{
				label: 'Укажите ОГРНИП:',
				placeholder: 'Укажите ОГРНИП',
				model: 'ipOgrnip',
			},
			{
				label: 'Акцептом договора является:',
				placeholder: 'Акцептом договора является',
				model: 'acceptor',
			},
		],
		questions: [
			{
				type: 'select',
				question: 'Выберите ваш пол:',
				model: 'gender',
				default: 'male',
				options: [
					{
						label: 'Мужской',
						value: 'male',
					},
					{
						label: 'Женский',
						value: 'female',
					},
				],
			},
			{
				type: 'select',
				question: 'Где размещается оферта (вид сервиса):',
				model: 'serviceType',
				default: 'serviceTypeSite',
				options: [
					{ label: 'Сайт', value: 'serviceTypeSite' },
					{ label: 'Приложение', value: 'serviceTypeApp' },
					{ label: 'Свой вариант', value: 'serviceTypeCustom' },
				],
				inputsByOption: {
					serviceTypeSite: [
						{
							label: 'Укажите ссылку на сайт:',
							placeholder: 'https://example.com',
							model: 'serviceSiteUrl',
						},
					],
					serviceTypeApp: [
						{
							label: 'Название приложения:',
							placeholder: 'Название приложения',
							model: 'serviceAppName',
						},
						{
							label: 'Укажите ссылку для скачивания:',
							placeholder: 'https://example.com',
							model: 'serviceAppUrl',
						},
					],
					serviceTypeCustomService: [
						{
							label: 'Название сервиса:',
							placeholder: 'Название сервиса',
							model: 'serviceCustomName',
						},
						{
							label: 'Описание сервиса:',
							placeholder: 'Описание сервиса',
							model: 'serviceCustomDescription',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Предмет договора:',
				model: 'subject',
				default: 'subjectServices',
				options: [
					{ label: 'Оказание услуг', value: 'subjectServices' },
					{
						label: 'Право использования сервиса (лицензия)',
						value: 'subjectLicense',
					},
					{ label: 'Продажа товаров', value: 'subjectSales' },
					{ label: 'Свой вариант', value: 'subjectCustom' },
				],
				inputsByOption: {
					subjectServices: [
						{
							label:
								'Вид услуги (Информационные / Консультационные / Информационно-консультационные / Свой вариант):',
							placeholder:
								'Информационные / Консультационные / Информационно-консультационные / Свой вариант',
							model: 'subjectServiceType',
						},
						{
							label: 'Перечислите оказываемые услуги:',
							placeholder: 'Перечислите оказываемые услуги',
							model: 'subjectServicesProvided',
						},
					],
					subjectLicense: [
						{
							label: 'Пользователь вправе пользоваться сервисом:',
							placeholder: 'Исключительно для собственных нужд',
							model: 'subjectAllowedUserRightsLicense',
						},
						{
							label: 'Пользователю запрещается:',
							placeholder: 'Копировать или изменять код Сервиса',
							model: 'subjectProhibitedUserRightsLicense',
						},
					],
					subjectSales: [
						{
							label:
								'Осуществляется доставка (Нет / Собственными силами / Силами третьих лиц):',
							placeholder: 'Нет / Собственными силами / Силами третьих лиц',
							model: 'subjectSalesDelivery',
						},
					],
					subjectCustom: [
						{
							label: 'Укажите предмет договора:',
							placeholder: 'Укажите предмет договора',
							model: 'subjectCustom',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Территория действия:',
				model: 'territory',
				default: 'territoryWorld',
				options: [
					{
						label: 'Весь мир',
						value: 'territoryWorld',
					},
					{
						label: 'Российская Федерация',
						value: 'territoryRussia',
					},
					{
						label: 'Свой вариант',
						value: 'territoryCustom',
					},
				],
				inputsByOption: {
					territoryCustom: [
						{
							label: 'Укажите страну:',
							placeholder: 'Россия',
							model: 'territoryCustomValue',
						},
					],
				},
			},
			{
				type: 'yes-no',
				question: 'Учетная запись пользователя:',
				model: 'hasUserAccount',
				default: 'no',
				yesInputs: [
					{
						label: 'Пользователь указывает данные при регистрации (Да / Нет):',
						placeholder: 'Да / Нет',
						model: 'userAccountRegistration',
					},
					{
						label:
							'Логин и пароль (Отправляется пользователю / Выбирается пользователем) ',
						placeholder: 'Отправляется пользователю / Выбирается пользователем',
						model: 'userAccountLoginPassword',
					},
					{
						label:
							'Укажите данные для регистрации (только если пользователь указывает данные при регистрации )',
						placeholder: 'Укажите данные для регистрации',
						model: 'userDataForRegistration',
					},
				],
			},
		],
	},
	selfEmployed: {
		inputs: [
			{
				label: 'Укажите полное ФИО исполнителя:',
				placeholder: 'Укажите полное ФИО исполнителя',
				model: 'selfEmployedName',
			},
			{
				label: 'Акцептом договора является:',
				placeholder: 'Акцептом договора является',
				model: 'acceptor',
			},
		],
		questions: [
			{
				type: 'select',
				question: 'Выберите ваш пол:',
				model: 'gender',
				default: 'male',
				options: [
					{
						label: 'Мужской',
						value: 'male',
					},
					{
						label: 'Женский',
						value: 'female',
					},
				],
			},
			{
				type: 'select',
				question: 'Где размещается оферта (вид сервиса):',
				model: 'serviceType',
				default: 'serviceTypeSite',
				options: [
					{ label: 'Сайт', value: 'serviceTypeSite' },
					{ label: 'Приложение', value: 'serviceTypeApp' },
					{ label: 'Свой вариант', value: 'serviceTypeCustom' },
				],
				inputsByOption: {
					serviceTypeSite: [
						{
							label: 'Укажите ссылку на сайт:',
							placeholder: 'https://example.com',
							model: 'serviceSiteUrl',
						},
					],
					serviceTypeApp: [
						{
							label: 'Название приложения:',
							placeholder: 'Название приложения',
							model: 'serviceAppName',
						},
						{
							label: 'Укажите ссылку для скачивания:',
							placeholder: 'https://example.com',
							model: 'serviceAppUrl',
						},
					],
					serviceTypeCustomService: [
						{
							label: 'Название сервиса:',
							placeholder: 'Название сервиса',
							model: 'serviceCustomName',
						},
						{
							label: 'Описание сервиса:',
							placeholder: 'Описание сервиса',
							model: 'serviceCustomDescription',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Предмет договора:',
				model: 'subject',
				default: 'subjectServices',
				options: [
					{ label: 'Оказание услуг', value: 'subjectServices' },
					{
						label: 'Право использования сервиса (лицензия)',
						value: 'subjectLicense',
					},
					{ label: 'Продажа товаров', value: 'subjectSales' },
					{ label: 'Свой вариант', value: 'subjectCustom' },
				],
				inputsByOption: {
					subjectServices: [
						{
							label:
								'Вид услуги (Информационные / Консультационные / Информационно-консультационные / Свой вариант):',
							placeholder:
								'Информационные / Консультационные / Информационно-консультационные / Свой вариант',
							model: 'subjectServiceType',
						},
						{
							label: 'Перечислите оказываемые услуги:',
							placeholder: 'Перечислите оказываемые услуги',
							model: 'subjectServicesProvided',
						},
					],
					subjectLicense: [
						{
							label: 'Пользователь вправе пользоваться сервисом:',
							placeholder: 'Исключительно для собственных нужд',
							model: 'subjectAllowedUserRightsLicense',
						},
						{
							label: 'Пользователю запрещается:',
							placeholder: 'Копировать или изменять код Сервиса',
							model: 'subjectProhibitedUserRightsLicense',
						},
					],
					subjectSales: [
						{
							label:
								'Осуществляется доставка (Нет / Собственными силами / Силами третьих лиц):',
							placeholder: 'Нет / Собственными силами / Силами третьих лиц',
							model: 'subjectSalesDelivery',
						},
					],
					subjectCustom: [
						{
							label: 'Укажите предмет договора:',
							placeholder: 'Укажите предмет договора',
							model: 'subjectCustom',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Территория действия:',
				model: 'territory',
				default: 'territoryWorld',
				options: [
					{
						label: 'Весь мир',
						value: 'territoryWorld',
					},
					{
						label: 'Российская Федерация',
						value: 'territoryRussia',
					},
					{
						label: 'Свой вариант',
						value: 'territoryCustom',
					},
				],
				inputsByOption: {
					territoryCustom: [
						{
							label: 'Укажите страну:',
							placeholder: 'Россия',
							model: 'territoryCustomValue',
						},
					],
				},
			},
			{
				type: 'yes-no',
				question: 'Учетная запись пользователя:',
				model: 'hasUserAccount',
				default: 'no',
				yesInputs: [
					{
						label: 'Пользователь указывает данные при регистрации (Да / Нет):',
						placeholder: 'Да / Нет',
						model: 'userAccountRegistration',
					},
					{
						label:
							'Логин и пароль (Отправляется пользователю / Выбирается пользователем) ',
						placeholder: 'Отправляется пользователю / Выбирается пользователем',
						model: 'userAccountLoginPassword',
					},
					{
						label:
							'Укажите данные для регистрации (только если пользователь указывает данные при регистрации )',
						placeholder: 'Укажите данные для регистрации',
						model: 'userDataForRegistration',
					},
				],
			},
		],
	},
	Individual: {
		inputs: [
			{
				label: 'Укажите полное ФИО исполнителя:',
				placeholder: 'Укажите полное ФИО исполнителя',
				model: 'IndividualName',
			},
			{
				label: 'Акцептом договора является:',
				placeholder: 'Акцептом договора является',
				model: 'acceptor',
			},
		],
		questions: [
			{
				type: 'select',
				question: 'Выберите ваш пол:',
				model: 'gender',
				default: 'male',
				options: [
					{
						label: 'Мужской',
						value: 'male',
					},
					{
						label: 'Женский',
						value: 'female',
					},
				],
			},
			{
				type: 'select',
				question: 'Где размещается оферта (вид сервиса):',
				model: 'serviceType',
				default: 'serviceTypeSite',
				options: [
					{ label: 'Сайт', value: 'serviceTypeSite' },
					{ label: 'Приложение', value: 'serviceTypeApp' },
					{ label: 'Свой вариант', value: 'serviceTypeCustom' },
				],
				inputsByOption: {
					serviceTypeSite: [
						{
							label: 'Укажите ссылку на сайт:',
							placeholder: 'https://example.com',
							model: 'serviceSiteUrl',
						},
					],
					serviceTypeApp: [
						{
							label: 'Название приложения:',
							placeholder: 'Название приложения',
							model: 'serviceAppName',
						},
						{
							label: 'Укажите ссылку для скачивания:',
							placeholder: 'https://example.com',
							model: 'serviceAppUrl',
						},
					],
					serviceTypeCustomService: [
						{
							label: 'Название сервиса:',
							placeholder: 'Название сервиса',
							model: 'serviceCustomName',
						},
						{
							label: 'Описание сервиса:',
							placeholder: 'Описание сервиса',
							model: 'serviceCustomDescription',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Предмет договора:',
				model: 'subject',
				default: 'subjectServices',
				options: [
					{ label: 'Оказание услуг', value: 'subjectServices' },
					{
						label: 'Право использования сервиса (лицензия)',
						value: 'subjectLicense',
					},
					{ label: 'Продажа товаров', value: 'subjectSales' },
					{ label: 'Свой вариант', value: 'subjectCustom' },
				],
				inputsByOption: {
					subjectServices: [
						{
							label:
								'Вид услуги (Информационные / Консультационные / Информационно-консультационные / Свой вариант):',
							placeholder:
								'Информационные / Консультационные / Информационно-консультационные / Свой вариант',
							model: 'subjectServiceType',
						},
						{
							label: 'Перечислите оказываемые услуги:',
							placeholder: 'Перечислите оказываемые услуги',
							model: 'subjectServicesProvided',
						},
					],
					subjectLicense: [
						{
							label: 'Пользователь вправе пользоваться сервисом:',
							placeholder: 'Исключительно для собственных нужд',
							model: 'subjectAllowedUserRightsLicense',
						},
						{
							label: 'Пользователю запрещается:',
							placeholder: 'Копировать или изменять код Сервиса',
							model: 'subjectProhibitedUserRightsLicense',
						},
					],
					subjectSales: [
						{
							label:
								'Осуществляется доставка (Нет / Собственными силами / Силами третьих лиц):',
							placeholder: 'Нет / Собственными силами / Силами третьих лиц',
							model: 'subjectSalesDelivery',
						},
					],
					subjectCustom: [
						{
							label: 'Укажите предмет договора:',
							placeholder: 'Укажите предмет договора',
							model: 'subjectCustom',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Территория действия:',
				model: 'territory',
				default: 'territoryWorld',
				options: [
					{
						label: 'Весь мир',
						value: 'territoryWorld',
					},
					{
						label: 'Российская Федерация',
						value: 'territoryRussia',
					},
					{
						label: 'Свой вариант',
						value: 'territoryCustom',
					},
				],
				inputsByOption: {
					territoryCustom: [
						{
							label: 'Укажите страну:',
							placeholder: 'Россия',
							model: 'territoryCustomValue',
						},
					],
				},
			},
			{
				type: 'yes-no',
				question: 'Учетная запись пользователя:',
				model: 'hasUserAccount',
				default: 'no',
				yesInputs: [
					{
						label: 'Пользователь указывает данные при регистрации (Да / Нет):',
						placeholder: 'Да / Нет',
						model: 'userAccountRegistration',
					},
					{
						label:
							'Логин и пароль (Отправляется пользователю / Выбирается пользователем) ',
						placeholder: 'Отправляется пользователю / Выбирается пользователем',
						model: 'userAccountLoginPassword',
					},
					{
						label:
							'Укажите данные для регистрации (только если пользователь указывает данные при регистрации )',
						placeholder: 'Укажите данные для регистрации',
						model: 'userDataForRegistration',
					},
				],
			},
		],
	},
	foreigner: {
		inputs: [
			{
				label: 'Укажите полное ФИО исполнителя:',
				placeholder: 'Укажите полное ФИО исполнителя',
				model: 'foreignerName',
			},
			{
				label: 'Укажите страну гражданства:',
				placeholder: 'Укажите страну гражданства',
				model: 'foreignerCountry',
			},
			{
				label: 'Укажите документ, например ВНЖ',
				placeholder: 'Укажите документ, например ВНЖ',
				model: 'foreignerDocument',
			},
			{
				label: 'Укажите документ, например патент или гражданство члена ЕАЭС',
				placeholder:
					'Укажите документ, например патент или гражданство члена ЕАЭС',
				model: 'foreignerDocumentForCountry',
			},
			{
				label: 'Акцептом договора является:',
				placeholder: 'Акцептом договора является',
				model: 'acceptor',
			},
		],
		questions: [
			{
				type: 'select',
				question: 'Выберите ваш пол:',
				model: 'gender',
				default: 'male',
				options: [
					{
						label: 'Мужской',
						value: 'male',
					},
					{
						label: 'Женский',
						value: 'female',
					},
				],
			},
			{
				type: 'select',
				question: 'Где размещается оферта (вид сервиса):',
				model: 'serviceType',
				default: 'serviceTypeSite',
				options: [
					{ label: 'Сайт', value: 'serviceTypeSite' },
					{ label: 'Приложение', value: 'serviceTypeApp' },
					{ label: 'Свой вариант', value: 'serviceTypeCustom' },
				],
				inputsByOption: {
					serviceTypeSite: [
						{
							label: 'Укажите ссылку на сайт:',
							placeholder: 'https://example.com',
							model: 'serviceSiteUrl',
						},
					],
					serviceTypeApp: [
						{
							label: 'Название приложения:',
							placeholder: 'Название приложения',
							model: 'serviceAppName',
						},
						{
							label: 'Укажите ссылку для скачивания:',
							placeholder: 'https://example.com',
							model: 'serviceAppUrl',
						},
					],
					serviceTypeCustomService: [
						{
							label: 'Название сервиса:',
							placeholder: 'Название сервиса',
							model: 'serviceCustomName',
						},
						{
							label: 'Описание сервиса:',
							placeholder: 'Описание сервиса',
							model: 'serviceCustomDescription',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Предмет договора:',
				model: 'subject',
				default: 'subjectServices',
				options: [
					{ label: 'Оказание услуг', value: 'subjectServices' },
					{
						label: 'Право использования сервиса (лицензия)',
						value: 'subjectLicense',
					},
					{ label: 'Продажа товаров', value: 'subjectSales' },
					{ label: 'Свой вариант', value: 'subjectCustom' },
				],
				inputsByOption: {
					subjectServices: [
						{
							label:
								'Вид услуги (Информационные / Консультационные / Информационно-консультационные / Свой вариант):',
							placeholder:
								'Информационные / Консультационные / Информационно-консультационные / Свой вариант',
							model: 'subjectServiceType',
						},
						{
							label: 'Перечислите оказываемые услуги:',
							placeholder: 'Перечислите оказываемые услуги',
							model: 'subjectServicesProvided',
						},
					],
					subjectLicense: [
						{
							label: 'Пользователь вправе пользоваться сервисом:',
							placeholder: 'Исключительно для собственных нужд',
							model: 'subjectAllowedUserRightsLicense',
						},
						{
							label: 'Пользователю запрещается:',
							placeholder: 'Копировать или изменять код Сервиса',
							model: 'subjectProhibitedUserRightsLicense',
						},
					],
					subjectSales: [
						{
							label:
								'Осуществляется доставка (Нет / Собственными силами / Силами третьих лиц):',
							placeholder: 'Нет / Собственными силами / Силами третьих лиц',
							model: 'subjectSalesDelivery',
						},
					],
					subjectCustom: [
						{
							label: 'Укажите предмет договора:',
							placeholder: 'Укажите предмет договора',
							model: 'subjectCustom',
						},
					],
				},
			},
			{
				type: 'select',
				question: 'Территория действия:',
				model: 'territory',
				default: 'territoryWorld',
				options: [
					{
						label: 'Весь мир',
						value: 'territoryWorld',
					},
					{
						label: 'Российская Федерация',
						value: 'territoryRussia',
					},
					{
						label: 'Свой вариант',
						value: 'territoryCustom',
					},
				],
				inputsByOption: {
					territoryCustom: [
						{
							label: 'Укажите страну:',
							placeholder: 'Россия',
							model: 'territoryCustomValue',
						},
					],
				},
			},
			{
				type: 'yes-no',
				question: 'Учетная запись пользователя:',
				model: 'hasUserAccount',
				default: 'no',
				yesInputs: [
					{
						label: 'Пользователь указывает данные при регистрации (Да / Нет):',
						placeholder: 'Да / Нет',
						model: 'userAccountRegistration',
					},
					{
						label:
							'Логин и пароль (Отправляется пользователю / Выбирается пользователем) ',
						placeholder: 'Отправляется пользователю / Выбирается пользователем',
						model: 'userAccountLoginPassword',
					},
					{
						label:
							'Укажите данные для регистрации (только если пользователь указывает данные при регистрации )',
						placeholder: 'Укажите данные для регистрации',
						model: 'userDataForRegistration',
					},
				],
			},
		],
	},
}
