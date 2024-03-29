import { Component,ElementRef,ViewChild } from '@angular/core';
import { AutentificacionService } from '../../services/autentificacion.service';
import { Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  @ViewChild("email") email: ElementRef;
  @ViewChild("password") password: ElementRef;

profileForm = new FormGroup({
     email:  new FormControl('',[Validators.required,Validators.email]),
     password:  new FormControl('',[Validators.required]),
   
  });

constructor(
  private auth:AutentificacionService,
  private router: Router
  ){

}

login(){
  let usuariosAlamcenados:any;
if(this.email.nativeElement.value==''||this.password.nativeElement.value==''){
  return;
}else{
  if(this.auth.obtenerUsuarioslogin(this.email.nativeElement.value,this.password.nativeElement.value)){
     this.auth.modificarSesion(true);
     this.router.navigate(['dashboard']).then((r)=>true)
  }else{
     return alert("usuario o contraseña incorrectos")
  }

 
}





 }
}
 