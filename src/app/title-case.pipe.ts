import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})

//This titbleCasePipe onle works for few of the proposition.
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;

    // getting string data from the object, split it with space.
    let words = value.split(' ');

    //working those the words array to give the title case.
    for(let i = 0 ; i < words.length ; i++){
      //checking if the non first word is proposition or no.
      if(i>0 && this.ispreposition(words[i])){
        words[i] = words[i].toLowerCase();
      }else{
        words[i] = this.nopreposition(words[i]);
      }
    }
    return words.join(' ');
  }

  //prestcondition: value must be a string.
  //postcondition: This function retruns ture if value is a preposition, otherwise return false.
  private ispreposition(value:string): boolean {
    let preposition = [
      "aboard","about","above","across","after","against","along","amid","among","anti","around","as",
      "at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning",
      "considering","despite","down","during","except","excepting","excluding","following","for","from",
      "in","inside","into","like","minus","near","of","off","on","onto","opposite","outside","over","past",
      "per","plus","regarding","round","save","since","than","through","to","toward","towards","under",
      "underneath","unlike","until","up","upon","versus","via","with","within","without"
    ];

    return preposition.includes(value);
}
  //preconditon: valie must be a string.
  //postcondition: formatting the value string and return it. 
  private nopreposition(value:string): string{
    return value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase();

  }
}
