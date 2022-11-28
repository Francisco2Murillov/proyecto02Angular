import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'fjmurillov3743 ✈🚀';
  textPlaceHolder = 'Escriba su nombre aqui.....';
  desabilitado = true;
  img ='https://th.bing.com/th/id/R.e60b21b8ea4e48cba82efdc448f05d38?rik=eAGQKWVV2pjyYA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-VNqGBuq7thw%2fUGO7C1Roo6I%2fAAAAAAAAXic%2fU_zUQ0J6kOU%2fs1600%2flogo_megasuper.jpg&ehk=Y5iWj7WOsI1g3AhY5c25F42KhZEEIAD4tKWJaRigf%2bI%3d&risl=&pid=ImgRaw&r=0'

  texto = "Este es un ejemplo de event bindi with fjmurillov"  
  texto2: string = "";   


  constructor()
  {
    setInterval(()=> this.nombre= 'Javiermv 🤑', 3000)

    setInterval(()=>this.desabilitado = false, 3000)
  }

  getSuma(num: number, num2:number)
  {
    return num+num2;
  }

  cambiarTexto() :void{
    this.texto = "El texto Cambio with fjmurillov3743";
}

}

  
