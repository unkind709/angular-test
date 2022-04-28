import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {
    transform(value: string): string {
        const result = value.replace(/\w\S*/g, (t => t[0].toUpperCase() + t.substr(1).toLowerCase()));

        return value.length === 0 ? '' : result;
    }
}


