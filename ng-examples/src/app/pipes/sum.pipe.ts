import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: number[], startValue): any {
    const result = value.reduce((acc, item) => {
        return acc + item;
    }, startValue)
    return result;
  }

}

