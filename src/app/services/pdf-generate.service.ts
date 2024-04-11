import { Injectable } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfGenerateService {

  constructor() { }

  async exportToPdf(elementId:string) {
    const doc = new jspdf.jsPDF();
    const element = document.getElementById(elementId);
    
    if (!element) {
      console.error('Element not found');
      return;
    }

    try {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      doc.addImage(imgData,'PNG',0,0,imgWidth,imgHeight);
      doc.save("Output.pdf");
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }
}
