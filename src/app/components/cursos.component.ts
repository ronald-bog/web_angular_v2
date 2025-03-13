import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink]
})
export default class CursosComponent {

}
