import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-template-builder',
  templateUrl: './template-builder.component.html',
  styleUrls: ['./template-builder.component.css']
})
export class TemplateBuilderComponent implements OnInit {
  documentTitle: string = 'Software Engineer Resume';
  templateId: number = 1;
  summaryText: string = '';
  isSaving: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  saveResume(): void {
    this.isSaving = true;
    const payload = {
      title: this.documentTitle,
      template_id: this.templateId,
      content: { summary: this.summaryText }
    };

    this.apiService.createDocument(payload).subscribe({
      next: (res) => {
        this.isSaving = false;
        alert('Resume saved successfully!');
      },
      error: (err) => {
        this.isSaving = false;
        console.error('Error saving document:', err);
        alert('Failed to save resume.');
      }
    });
  }
}