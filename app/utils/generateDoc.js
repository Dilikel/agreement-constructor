import PizZip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import FileSaver from 'file-saver'
import { useToast } from 'vue-toastification'

export async function generateAgreementDoc(data) {
	const toast = useToast()
	try {
		const response = await fetch(`/templates/${data.type}.docx`)

		if (!response.ok) {
			throw new Error('Не удалось загрузить шаблон')
			toast.error('Не удалось загрузить шаблон')
		}
		const arrayBuffer = await response.arrayBuffer()

		const zip = new PizZip(arrayBuffer)
		const doc = new Docxtemplater(zip)

		doc.setData({
			representativeName: data.data.representativeName,
		})

		try {
			doc.render()
			toast.success('Документ успешно создан')
		} catch (renderError) {
			console.error('Ошибка при рендеринге шаблона:', renderError)
			toast.error('Ошибка при рендеринге шаблона')
			throw renderError
		}

		const output = doc.getZip().generate({ type: 'blob' })
		FileSaver.saveAs(output, 'публичная_оферта.docx')
	} catch (error) {
		console.error('Ошибка при обработке шаблона:', error)
		toast.error('Ошибка при обработке шаблона')
	}
}
