import { Component } from '@angular/core';
import { IntroductionInterface, IntroductionPublicInterface } from './introduction.interface';
import { ToolsBox } from '../tools-box/tools-box';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-introduction',
  imports: [CommonModule, ToolsBox],
  templateUrl: './introduction.html',
  styleUrl: './introduction.css'
})
export class Introduction {
  introduction: IntroductionInterface = {
    title_introduction: 'Sobre mi',
    arr_presentation: [`Soy una persona constante y proactiva por naturaleza, con una fuerte pasión por la <strong>programación</strong> y todo lo que tenga que ver con resolver problemas de forma creativa. Me encanta <strong>tocar la guitarra</strong>, encontrar inspiración en la <strong>montaña</strong> y meter las manos en la <strong>mecánica</strong> para entender cómo funcionan las cosas.`, 'Siempre estoy buscando aprender algo nuevo, ya sea a través de la <strong>lectura</strong> o de algún proyecto personal. Estudiar no es una obligación para mí, sino una forma de crecer y mejorar cada día. Esta combinación de técnica y sensibilidad me ayuda a desarrollar soluciones que no solo funcionan, sino que también tienen alma.']
  }
  public_introduction: IntroductionPublicInterface
  constructor(private sanitizer: DomSanitizer) {
    this.public_introduction = this.get_safe_data(this.introduction)
  }
  change_arr(introduction: IntroductionInterface | any){
    this.introduction = introduction
    this.public_introduction = this.get_safe_data(introduction)
  }
  clean_data(raw: string): SafeHtml {
    const limpio = this.sanitizeHTML(raw);
    return this.sanitizer.bypassSecurityTrustHtml(limpio);
  }
  get_safe_data(introduction: IntroductionInterface): IntroductionPublicInterface{
    const public_introduction: IntroductionPublicInterface = {
      title_introduction: this.clean_data(introduction.title_introduction),
      arr_presentation: introduction.arr_presentation.map(row=>this.clean_data(row))
    }
    return public_introduction
  }
  sanitizeHTML(raw: string): string {
    return raw
      .replace(/<(?!\/?(strong|em|br|a)\b)[^>]*>/gi, '')
      .replace(/on\w+="[^"]*"/gi, '');
  }
}
