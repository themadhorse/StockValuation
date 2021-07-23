import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'removeNS'})
export class ScripNamePipe implements PipeTransform {
  transform(scrip: string){
    return scrip.substring(0, scrip.indexOf('.NS'));
  }
}
