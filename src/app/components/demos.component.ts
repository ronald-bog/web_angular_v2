import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  standalone: true,
  imports: [NgOptimizedImage]
})
export default class DemosComponent {
}
