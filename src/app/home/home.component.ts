import { Component, inject } from '@angular/core';
import { RedditService } from '../shared/data-access/reddit.service';
import { GifListComponent } from './ui/gif-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<app-gif-list
    [gifs]="redditService.gifs()"
    class="grid-container"
  />`,
  imports: [GifListComponent],
  styles: ``,
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
