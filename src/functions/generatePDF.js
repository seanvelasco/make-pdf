import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

const generatePDF = async () => {
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 30
    page.drawText('Creating PDFs in JavaScript is awesome!', {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    })
    const pdfBytes = await pdfDoc.save()
    console.log(pdfBytes)
    const blob = new Blob([pdfBytes], {'type': 'application/pdf'});
    const url = URL.createObjectURL(blob);
    return await url;
}

generatePDF()
.catch(error => {
    console.log('Unable to perform task.')
})

export default generatePDF;