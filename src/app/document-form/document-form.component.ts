import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent {
  sections: string = '';
  generatedDocument: string = '';

  constructor(private openaiService: OpenaiService) {}

  generateDocument() {
    this.openaiService.generateDocument(this.sections).subscribe(
      (response) => {
        this.generatedDocument = response.choices[0].text;
      },
      (error) => {
        console.error('Error generating document:', error);
      }
    );
  }
}
