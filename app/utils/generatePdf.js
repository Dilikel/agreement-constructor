import pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { agreementPdfTemplates } from '~/config/agreementPdfTemplates'

pdfMake.vfs = pdfFonts.vfs

export function createAgreementPdfDefinition(data) {
	const d = data.data
	const type = data.type || 'person'

	const templateFn = agreementPdfTemplates[type]
	const content = templateFn
		? templateFn(d)
		: [{ text: 'Тип лица не определён' }]

	return {
		content,
		pageMargins: [40, 60, 40, 60],
		styles: {
			docTitle: {
				fontSize: 20,
				bold: true,
				alignment: 'center',
				margin: [0, 0, 0, 20],
			},
			sectionTitle: {
				fontSize: 14,
				bold: true,
				alignment: 'center',
				margin: [0, 10, 0, 6],
			},
			docMeta: {
				fontSize: 12,
			},
			sectionHeader: {
				fontSize: 14,
				bold: true,
				margin: [0, 10, 0, 6],
			},
			paragraph: {
				fontSize: 11,
				margin: [0, 0, 0, 10],
			},
		},
		defaultStyle: {
			fontSize: 11,
		},
	}
}

export function downloadAgreementPdf(data, toast) {
	try {
		const docDefinition = createAgreementPdfDefinition(data)
		pdfMake.createPdf(docDefinition).download('публичная_оферта.pdf')
		toast.success('PDF документ создан и загружен')
	} catch (e) {
		console.error('Ошибка генерации PDF:', e)
		toast.error('Ошибка при создании PDF')
	}
}

export function getAgreementPdfBlob(data, callback) {
	try {
		const docDefinition = createAgreementPdfDefinition(data)
		pdfMake.createPdf(docDefinition).getBlob(callback)
	} catch (e) {
		console.error('Ошибка создания Blob PDF:', e)
	}
}
