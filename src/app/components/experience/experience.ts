import { Component } from '@angular/core';
import { ExperienceService } from './experience.service';
import { ExperienceInterface } from './experience.interface';
import { map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToolsBox } from "../tools-box/tools-box";
import { IntroductionInterface } from '../introduction/introduction.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, ToolsBox],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experiences: ExperienceInterface[]
  flag_order: boolean = true
  constructor(private experienceService: ExperienceService, private sanitizer: DomSanitizer){
    this.experiences = this.experienceService.get_experiences()
    
  }
  formatDateToDDMMYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // los meses son 0-indexados
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  change_arr($event: ExperienceInterface[] | IntroductionInterface | null){
    if(Array.isArray($event)){
      this.experiences = $event.map((row: ExperienceInterface)=>{
          row.start_date_experience = new Date(row.start_date_experience)
          row.end_date_experience = new Date(row.end_date_experience)
          row.public_description_experience = this.experienceService.clean_data(row.description_experience)
          return row
      })
    }
  }

}
