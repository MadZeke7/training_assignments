import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salrangepipe'
})
export class SalrangepipePipe implements PipeTransform {

  transform(value: any[], ...args: number[]):any[]  {
    return value.filter((item)=>{
      if(item.salary > args[0] && item.salary <= args[1]){
        return item;
      }
      else{
        return null;
      }
    }
    );
  }

}
