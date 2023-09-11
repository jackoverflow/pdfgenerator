const { PDFDocument, rgb } = require('pdf-lib');
   const fs = require('fs');

   const args = process.argv.slice(2);
   const name = args[0];
   const id = args[1];

   async function generatePDF() {
     const pdfDoc = await PDFDocument.create();
     const page = pdfDoc.addPage();
     const { width, height } = page.getSize();
     const fontSize = 30;

     page.drawText('Hello World', {
       x: 50,
       y: height - 4 * fontSize,
       size: fontSize,
       color: rgb(0, 0.53, 0.71),
     });

     const pdfBytes = await pdfDoc.save();

     fs.writeFileSync(`./${name}_${id}.pdf`, pdfBytes);
     console.log(`PDF generated successfully at ./${name}_${id}.pdf`);
   }

   generatePDF().catch((err) => console.error(err));