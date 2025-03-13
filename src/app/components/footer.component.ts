import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    standalone: true,
    imports: [RouterLink,NgOptimizedImage],
    providers: [
      {
        provide: IMAGE_LOADER, useValue: (config: ImageLoaderConfig) => {
          return `../../../assets/rrss/footer/${config.src}`
        }
      }
    ]
})
export class FooterComponent {

}
