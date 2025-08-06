import { Component } from '@angular/core';
import { ToolsBox } from '../tools-box/tools-box';
import { ContactInterface } from './contact.interface';

@Component({
  selector: 'app-contact',
  imports: [ToolsBox],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contact: ContactInterface = {
    linkedin_link: 'https://www.linkedin.com/in/david-m-8483a4299',
    github_link: "https://github.com/srXendo?tab=repositories"
  }
  getImgBoxStyle(img: string) {
    return { 'background-image': 'url(assets/' + img + ')' };
  }
  change_arr($event: any){
    this.contact = $event

  }
  open_url(linkKey: keyof ContactInterface){
    // your logic here.... like set the url 

    const url = this.contact[linkKey]

    window.open(url, '_blank');
  }
}
