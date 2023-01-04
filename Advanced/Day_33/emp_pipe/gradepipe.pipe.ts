import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradepipe'
})

export class GradepipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value==1){
      return "Outstanding";
    }
    else if(value==2){
      return "Excellent";
    }
    else if(value==3){
      return "Good";
    }
    else{
      return "Poor";
    }
  }

}
