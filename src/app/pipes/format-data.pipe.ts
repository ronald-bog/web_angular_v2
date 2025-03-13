import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData',
  standalone:true
})
export class FormatDataPipe implements PipeTransform {

  transform(dateString: string): string {
    const months = [
      "enero", "febrero", "marzo", "abril",
      "mayo", "junio", "julio", "agosto",
      "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const [year, month, day] = dateString.split('-').map(Number);
    const formattedDay = day < 10 ? ` ${day}` : day.toString();
    const formattedDate = `${formattedDay} de ${months[month - 1]} ${year}`;
    return formattedDate;
  }
}
