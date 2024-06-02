import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "cropped",
     standalone: true,
})

export class CroppedTextPipe implements PipeTransform {
    transform(value: string, limit: number) {
        return value.length >= limit ? `${value.slice(0, limit)}...` : value;
    }
    
}