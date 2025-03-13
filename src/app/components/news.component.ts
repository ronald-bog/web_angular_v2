import { Component, inject } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'
import { Location, NgFor, NgOptimizedImage } from '@angular/common';
import { FormatDataPipe } from '../pipes/format-data.pipe';

interface NewsItem {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  standalone: true,
  imports: [NgFor, FormatDataPipe, NgOptimizedImage]
})
export default class CienciaComponent {
  newsArray: NewsItem[] = [];
  type: string = '';
  private news = inject(NewsService);
  private location = inject(Location)

  ngOnInit() {
    const endpoint = this.location.path().split('/')[1];
    this.type = endpoint === 'ciencia' ? 'science.json' : 'pc.json';
    this.news.news(this.type).subscribe(data => {
      this.newsArray = data.articles;
    });
  }
}
