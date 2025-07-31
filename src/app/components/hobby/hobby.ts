import { Component } from '@angular/core';
import { IntroductionInterface } from '../introduction/introduction.interface';
import { HobbyInterface, HobbyPublicInterface } from './hobby.interface';
import { ToolsBox } from '../tools-box/tools-box';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-hobby',
  imports: [ToolsBox],
  templateUrl: './hobby.html',
  styleUrl: './hobby.css'
})
export class Hobby {
  hobby: HobbyInterface = {
    title_hobby: 'Mis aficiones',
    arr_hobby: [
      `Soy una persona curiosa, constante y apasionada por la <strong>tecnología</strong>. Desde muy joven sentí una fuerte atracción por entender cómo funcionan las cosas, lo que me llevó a adentrarme en el mundo de la <strong>programación</strong> y la <strong>ingeniería inversa</strong>. Disfruto enormemente de los desafíos técnicos, especialmente aquellos que implican desentrañar sistemas complejos o crear soluciones desde cero. He desarrollado diversos <strong>proyectos personales</strong> que reflejan esta inquietud, como <a href="https://torrenteservidor.es" target="_blank">TorrenteServidor</a>, una iniciativa que me permitió recrear un servidor de matchmaking ya fuera de línea (Imatchmaker de Torrente), poniendo en práctica conocimientos avanzados de redes, protocolos y estructuras internas. También gestiono el repositorio <strong>srXendo</strong> en GitHub, donde comparto código, experimentos y herramientas útiles. He diseñado un <strong>dashboard empresarial</strong> que muestra datos clave para la toma de decisiones y una aplicación de gestión para el control de <strong>inventario, compras y ventas</strong> en tiendas. Me encantan los <strong>diagramas de flujo</strong> y estructurar la lógica de forma clara y ordenada, lo que me permite enfrentar problemas complejos con soluciones eficientes y bien pensadas.`,
      
      `Más allá del mundo digital, soy una persona activa que busca experiencias enriquecedoras en contacto con la naturaleza y la práctica manual. Me apasiona la <strong>mecánica</strong> y he aprendido a realizar tareas de mantenimiento y restauración de motos: restauré el depósito, limpié y ajusté el carburador, cambié bujías, filtros de aire y aceite, todo con el objetivo de entender a fondo el funcionamiento de los motores. También disfruto del <strong>deporte al aire libre</strong>, como el <strong>surf</strong>, el <strong>skate</strong> y, especialmente, el <strong>esquí</strong>; este invierno recorrí estaciones como Valthorens (Francia), Andorra, Valdesquí, Candanchú, La Masella y La Molina. Me encanta hacer <strong>vivacs</strong> en plena montaña, he pasado noches al aire libre en lugares como los Picos de Europa, la Sierra de Guara en Huesca, La Febró en Cataluña y la sierra norte de Madrid. Estas experiencias me han enseñado resiliencia, planificación y a valorar los pequeños detalles. Me considero una persona <strong>proactiva</strong>, con gran capacidad para entender problemas desde distintas perspectivas, y transformar ideas en realidades. Además, tengo una gran sensibilidad por los <strong>animales</strong> y el entorno natural, lo que también influye en cómo diseño y desarrollo mis proyectos: siempre buscando un equilibrio entre funcionalidad, empatía y propósito.`
    ]
  }
  public_hobby: HobbyPublicInterface
  constructor(private sanitizer: DomSanitizer){
    this.public_hobby = this.get_safe_data(this.hobby)
  }
  change_arr(hobby: HobbyInterface | any){
    this.hobby = hobby
    this.public_hobby = this.get_safe_data(this.hobby)
  }
  clean_data(raw: string): SafeHtml {
    const limpio = this.sanitizeHTML(raw);
    return this.sanitizer.bypassSecurityTrustHtml(limpio);
  }
  get_safe_data(hobby: HobbyInterface): HobbyPublicInterface{
    const public_hobby: HobbyPublicInterface = {
      title_hobby: this.clean_data(hobby.title_hobby),
      arr_hobby: hobby.arr_hobby.map(row=>this.clean_data(row))
    }
    return public_hobby
  }
  sanitizeHTML(raw: string): string {
    return raw
      .replace(/<(?!\/?(strong|em|br)\b)[^>]*>/gi, '')
      .replace(/on\w+="[^"]*"/gi, '');
  }
}
