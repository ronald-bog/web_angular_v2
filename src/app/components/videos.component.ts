import { Component, inject } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { IMAGE_LOADER, ImageLoaderConfig, NgFor, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  providers: [
    {
      provide: IMAGE_LOADER, useValue: (config: ImageLoaderConfig) => {
        return `../../../assets/videos/${config.src}`
      }
    }
  ]
})
export default class VideosComponent {
  videos: any = [];
  news = inject(NewsService);

  ngOnInit() {
    this.news.videos().subscribe(data => {
      for (var i = 0; i < data.videos.length; i++) {
        var objeto = {
          name: data.videos[i],
          priority: i < 5
        };
        this.videos.push(objeto);
      }
    })
  }
}
