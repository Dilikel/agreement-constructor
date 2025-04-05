import PizZip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import FileSaver from 'file-saver'

export async function generateAgreementDoc(data) {
	try {
		const response = await fetch(`/templates/${data.type}.docx`)
		if (!response.ok) {
			throw new Error('Не удалось загрузить шаблон')
		}
		const arrayBuffer = await response.arrayBuffer()

		const zip = new PizZip(arrayBuffer)
		const doc = new Docxtemplater(zip)

		doc.setData({
			representativeName: data.representativeName,
		})

		try {
			doc.render()
		} catch (renderError) {
			console.error('Ошибка при рендеринге шаблона:', renderError)
			throw renderError
		}

		const output = doc.getZip().generate({ type: 'blob' })
		FileSaver.saveAs(output, 'публичная_оферта.docx')
	} catch (error) {
		console.error('Ошибка при обработке шаблона:', error)
	}
}
