import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExperienceInterface } from './experience.interface';
import { getExperienceMockup } from './experience.mockup';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  constructor(private sanitizer: DomSanitizer){}
  get_experiences(): ExperienceInterface[]{
    return this.get_with_public_data(getExperienceMockup())
  }
  get_with_public_data(experiences: ExperienceInterface[]): ExperienceInterface[]{
    return experiences.map((row: ExperienceInterface)=>{
      row.public_description_experience = this.clean_data(row.description_experience)
      return row
    })
  }
  clean_data(raw: string): SafeHtml {
    const limpio = this.sanitizeHTML(raw);
    return this.sanitizer.bypassSecurityTrustHtml(limpio);
  }
  sanitizeHTML(raw: string): string {
    return raw
      .replace(/<(?!\/?(strong|em|br)\b)[^>]*>/gi, '')
      .replace(/on\w+="[^"]*"/gi, '');
  }
}
