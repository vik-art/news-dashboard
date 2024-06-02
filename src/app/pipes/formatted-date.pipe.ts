import { Pipe, PipeTransform } from "@angular/core";
import { endings, months } from "../types/enums";

@Pipe({
    name: 'formattedDate',
    standalone: true,
})

export class FormattedDate implements PipeTransform {
    ending(n: number) {
          if (n > 3 && n < 21) return endings.TH; 
          switch (n % 10) {
              case 1:
                  return endings.ST;
              case 2:
                  return endings.ND;
              case 3:
                  return endings.RD;
              default: 
                  return endings.TH
            }
        }
    transform(value: any) {
        const currentDate = new Date(value);
        const date = currentDate.getDate();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        return `${months[month]} ${date}${this.ending(date)}, ${year}`;
    }

}