import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiKey = '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';
  private apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

  constructor(private http: HttpClient) {}

  generateDocument(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`
    });

    const data = {
      prompt: prompt,
      max_tokens: 500
    };

    return this.http.post(this.apiUrl, data, { headers: headers });
  }
}
