import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location, NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, NgFor]
})
export default class CursoComponent {
  list = [
    {
      "language": "python",
      "title": "Python",
      "que_es": "Python es un lenguaje de programación interpretado, de código abierto y multiparadigma. Fue creado en la década de 1990 por Guido van Rossum y se ha convertido en uno de los lenguajes de programación más utilizados en una amplia variedad de aplicaciones, desde desarrollo web y científico hasta automatización de tareas y aprendizaje automático.",
      "por_que": "Por su versatilidad, facilidad de uso y relevancia en una variedad de aplicaciones, así como a su demanda en el mercado laboral y su papel en tecnologías emergentes como la inteligencia artificial. Ya sea que desees desarrollar sitios web, realizar análisis de datos, automatizar tareas o explorar el aprendizaje automático, Python es una herramienta valiosa en tu conjunto de habilidades.",
      "temas": [
        "Configuración y entorno de desarrollo.",
        "Variables y tipos de datos.",
        "Operadores aritméticos y de comparación.",
        "Declaraciones condicionales (if, elif, else).",
        "Bucles (for y while).",
        "Listas, tuplas y diccionarios.",
        "Acceso y manipulación de elementos.",
        "Definición de funciones.",
        "Argumentos y parámetros.",
        "Retorno de valores.",
        "Ámbito de las variables (scope).",
        "Entrada de usuario (input).",
        "Salida a la consola (print).",
        "Importación de módulos.",
        "Uso de bibliotecas estándar (por ejemplo, math, random).",
        "Manipulación de cadenas.",
        "Convenciones de nomenclatura."
      ]
    },
    {
      "language": "javascript",
      "title": "JavaScript",
      "que_es": "JavaScript es un lenguaje de programación que se ejecuta en el navegador web del usuario. Permite la creación de aplicaciones web interactivas, dinámicas y ricas en contenido, mejorando la experiencia del usuario en los sitios web. JavaScript se utiliza para manipular el Document Object Model (DOM) de una página web, lo que significa que puede modificar elementos HTML, responder a eventos del usuario y realizar peticiones a servidores web para cargar o enviar datos sin necesidad de recargar la página.",
      "por_que": "JavaScript es importante de aprender debido a su papel central en el desarrollo web moderno y su capacidad para crear experiencias interactivas y dinámicas en el navegador. Es una habilidad esencial para cualquier persona interesada en programación web y puede ser un trampolín para una carrera exitosa en desarrollo web y tecnología.",
      "temas": [
        "Variables y tipos de datos.",
        "Operadores aritméticos y de comparación.",
        "Declaraciones condicionales (if, else).",
        "Bucles (for, while).",
        "Manejo de switch.",
        "Funciones en JavaScript.",
        "Manipulación de Strings.",
        "Arreglos y Bucles.",
        "Creación de objetos, propiedades y métodos.",
        "Eventos y Manipulación del DOM.",
        "Recopilación de datos de formularios.",
        "Callbacks y funciones asincrónicas.",
        "Objeto Window y Navegador.",
        "Ajax y Comunicación con el Servidor."
      ]
    },
    {
      "language": "java",
      "title": "Java",
      "que_es": "Java es un lenguaje de programación de alto nivel, orientado a objetos y de propósito general. Fue desarrollado por Sun Microsystems (ahora propiedad de Oracle) en la década de 1990. Java se caracteriza por su portabilidad, lo que significa que el código Java puede ejecutarse en múltiples plataformas sin necesidad de modificaciones, gracias a la Máquina Virtual Java (JVM, Java Virtual Machine).",
      "por_que": "Java es importante de aprender debido a su versatilidad, portabilidad y su papel en una amplia gama de aplicaciones y sistemas. También es un lenguaje de programación que brinda una base sólida para el aprendizaje de conceptos de programación y tiene una demanda constante en el mercado laboral, lo que lo convierte en una habilidad valiosa para programadores y desarrolladores.",
      "temas": [
        "Variables y tipos de datos.",
        "Operadores aritméticos y de comparación.",
        "Estructuras de control (if, else, switch).",
        "Bucles (for, while, do-while).",
        "Uso de operadores lógicos.",
        "Definición y llamada de métodos.",
        "Parámetros y retorno de valores.",
        "Listas y colecciones (ArrayList).",
        "Clases y objetos.",
        "Atributos y métodos.",
        "Encapsulamiento y constructores.",
        "Herencia.",
        "Polimorfismo básico.",
        "Uso de clases Scanner e InputStreamReader",
        "Manejo basico de Excepciones."
      ]
    },
    {
      "language": "angular",
      "title": "Angular",
      "que_es": "Angular es un framework de desarrollo web que se utiliza para crear aplicaciones web de una sola página (SPA) y aplicaciones web dinámicas. Está escrito en TypeScript y se basa en el patrón de diseño Modelo-Vista-Controlador (MVC). El enfoque principal de Angular es proporcionar una estructura y herramientas para la creación de aplicaciones web robustas, escalables y mantenibles.",
      "por_que": "Es uno de los principales frameworks en el desarrollo de aplicaciones web modernas y dinámicas. Ofrece una serie de características y patrones de diseño que mejoran la productividad del desarrollador, la reactividad de las aplicaciones y la organización del código. Con la creciente demanda de aplicaciones web de alta calidad, Angular se ha convertido en una habilidad valiosa en el campo del desarrollo web.",
      "temas": [
        "Configuración del entorno de desarrollo.",
        "Creación y estructura de la aplicación.",
        "Creación y estructura de componentes.",
        "Directivas en Angular.",
        "Módulos en Angular.",
        "Uso de inyección de dependencias en Angular.",
        "Creación de servicios y su inyección.",
        "Realización de solicitudes HTTP.",
        "Consumo de servicios web en Angular.",
        "Configuración de enrutamiento en Angular.",
        "Navegación entre vistas.",
        "Uso de observables en Angular.",
        "Mostrar mensajes de error al usuario.",
        "Interceptores.",
        "Ejecucion de la aplicacion en desarrollo.",
        "Preparación y despliegue de una aplicación Angular."
      ]
    },
    {
      "language": "html",
      "title": "Html y CSS",
      "que_es": "HTML es el lenguaje de marcado utilizado para crear la estructura y el contenido de las páginas web. Es el esqueleto de una página web y se utiliza para definir los elementos y su jerarquía. CSS es un lenguaje utilizado para dar estilo y diseño a las páginas web creadas con HTML. Define la apariencia de los elementos HTML, como colores, fuentes, márgenes, espaciado y diseño.",
      "por_que": "Aprender HTML y CSS es fundamental para cualquiera interesado en el desarrollo web, ya que son la base de la creación y el diseño de páginas web. Son las habilidades esenciales para la construcción de sitios web atractivos y funcionales, y son el punto de partida para adentrarse en tecnologías web más avanzadas, como JavaScript, Angular, React y otros.",
      "temas": [
        "Estructura de una página HTML.",
        "Etiquetas HTML:",
        "Creación de enlaces (a).",
        "Inserción de imágenes (img).",
        "Diseño de formularios (form, input, label, button).",
        "Incorporación de CSS en un documento HTML.",
        "Cambio de colores, fuentes y márgenes.",
        "Entender el modelo de caja (box model).",
        "Ajuste del espaciado, borde y relleno.",
        "Uso de propiedades como display y float.",
        "Diseño de enlaces y botones con CSS.",
        "Diseño responsivo con CSS.",
        "Conceptos básicos de flexbox.",
        "Conceptos básicos de CSS Grid."
      ]
    },
    {
      "language": "php",
      "title": "PHP",
      "que_es": "PHP es un lenguaje de programación de servidor diseñado específicamente para la creación de aplicaciones web dinámicas. PHP se ejecuta en el servidor web y se utiliza para generar contenido web de manera dinámica, lo que significa que puedes crear páginas web que se generan en tiempo real en función de la interacción del usuario, datos de la base de datos u otras fuentes.",
      "por_que": "PHP es importante de aprender debido a su papel fundamental en el desarrollo web dinámico y su amplia adopción en la industria. Es una herramienta esencial para cualquier persona interesada en crear aplicaciones web interactivas y dinámicas, y ofrece oportunidades de empleo en el campo del desarrollo web y la programación.",
      "temas": [
        "Variables y tipos de datos.",
        "Operadores aritméticos y de comparación.",
        "Estructuras de control (if, else, switch).",
        "unciones en PHP.",
        "Declaración y uso de arrays.",
        "Iteración sobre arrays (for, foreach).",
        "Uso de include y require.",
        "Formateo y cálculos de tiempo.",
        "Conexión a bases de datos MySQL.",
        "Consultas SQL básicas.",
        "Errores y excepciones en PHP.",
        "Uso de bloques try-catch.",
        "Organización de código en múltiples archivos.",
        "Funciones predefinidas de PHP."
      ]
    }
  ];
  item = 0;
  private location = inject(Location)

  ngOnInit() {
    const endpoint = this.location.path().split('/')[2];
    switch (endpoint) {
      case 'python': this.item = 0;
        break;
      case 'javascript': this.item = 1;
        break;
      case 'java': this.item = 2;
        break;
      case 'angular': this.item = 3;
        break;
      case 'html': this.item = 4;
        break;
      default: this.item = 5;
    }
  }
}
