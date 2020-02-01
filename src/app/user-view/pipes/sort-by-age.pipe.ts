import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByAge'
})
export class SortByAgePipe implements PipeTransform {

  transform(values: any, age: number = 0): any {
    return values.filter((value) => {
      return value.age > age;
    });
  }

}
