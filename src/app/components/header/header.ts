import { Component } from '@angular/core';
import { HeaderInterface } from './header.interface';
import { filter, map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  arr_headers: HeaderInterface[] = [
    {
      title_header: "Presentación",
      path_header: "introduction"
    },
    {
      title_header: "Experiencias",
      path_header: "experience"
    },
    {
      title_header: "Aficiones",
      path_header: "hobby"
    },
    {
      title_header: "Contacto",
      path_header: "contact"
    },
  ]
  url$?: Observable<string>;
  constructor(private router: Router){



  }
  OnInit(){
    this.url$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).pipe(map(event=>{
      return event.url
    }))
  }
  open_url(url: string){
    // your logic here.... like set the url 
    window.open(url);
  }
}
