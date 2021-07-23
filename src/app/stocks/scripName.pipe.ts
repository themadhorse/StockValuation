import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'removeNS'})
export class ScripNamePipe implements PipeTransform {
  transform(scrip: string){
    if(scrip.indexOf('.NS') !== -1)
      return scrip.substring(0, scrip.indexOf('.NS'));
    return scrip;
  }
}
