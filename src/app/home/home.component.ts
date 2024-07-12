import { Component, inject } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RedditService } from '../shared/data-access/reddit.service';
import { GifListComponent } from './ui/gif-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: ` <h1>Giflist</h1>
    <app-gif-list
      [gifs]="redditService.gifs()"
      infiniteScroll
      (scrolled)="
        onScroll(); redditService.pagination$.next(redditService.lastKnowGif())
      "
      class="grid-container"
    />`,
  imports: [GifListComponent, InfiniteScrollModule],
  styles: ``,
})
export default class HomeComponent {
  redditService = inject(RedditService);
  onScroll() {
    console.log('scrolled!!', this.redditService.lastKnowGif());
  }
}
