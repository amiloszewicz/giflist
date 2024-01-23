import { Component, Input } from '@angular/core';
import { Gif } from '../../../shared/interfaces';

@Component({
  selector: 'app-gif-list',
  standalone: true,
  imports: [],
  template: ` 
    @for (gif of gifs; track gif.permalink) {
      <div>{{ gif.title }}</div>
    }`,
  styles: ``,
})
export class GifListComponent {
  @Input({ required: true }) gifs!: Gif[];
}
