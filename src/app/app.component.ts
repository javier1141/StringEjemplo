import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StringEjemplo1';
  stringinput:String="";
  salida:number=0;

  evaluar(){
    this.salida=this.stringinput.length;
  }

  deStringaCadena(){
    var array=Array.from(this.stringinput);
    var i:number=0;
    array.forEach(element => {
      i=i+1;
    });
    this.salida=i;
  }


}
