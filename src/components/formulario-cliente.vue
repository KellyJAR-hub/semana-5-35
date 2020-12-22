<template>
    <div class="container col-sm-12 align-items-center text-center">
    <div class="row justify-content-center">
        <div class="col-sm-8 col-sm-offset-3 align-items-center text-center">
            <div class="well well-sm">
                <form @submit.prevent class="form-horizontal" method="post" id="formulario">

                    <fieldset>
                        <legend class="text-center header">Contáctenos</legend>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-12" >
                                <input v-model="nombre" id="name" name="name" type="text" placeholder="Nombre" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-12">
                                <input v-model="apellido" id="apellido" name="apellido" type="text" placeholder="Apellido" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-12">
                                <input v-model="email" id="email" name="email" type="text" placeholder="Email" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-12">
                                <input v-model="telefono" id="phone" name="phone" type="text" placeholder="Telefono" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-12">
                                <input v-model="ciudad" id="ciudad" name="ciudad" type="text" placeholder="Ciudad" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-12">
                                <textarea v-model="necesidad" class="form-control" id="message" name="message" placeholder="Necesidad" rows="7"></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button @click="enviar()"  class="btn btn-primary btn-lg">Enviar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
 
data() {
    return {
      nombre: '',
      apellido: '',
      ciudad: '',
      email: '',
      telefono: '',
      necesidad: ''
    };
  },

methods:{
 enviar() {
      axios.post('cliente/add', {nombre:this.nombre, apellido:this.apellido, ciudad:this.ciudad, telefono:this.telefono, email:this.email, necesidad:this.necesidad})
      .then(respuesta =>{
      console.log(respuesta.data);
      alert('formulario enviado exitosamente')
      this.nombre= '',
      this.apellido= '',
      this.ciudad= '',
      this.email= '',
      this.telefono= '',
      this.necesidad= ''

      return respuesta.data;
      })
      .catch(error =>{
                //console.log(eror);
                this.errorM=null;
                console.log(error.response.status);
                if (error.response.status==401){
                    console.log('hola');
                    this.errorM='Error son incorrectas.';
                } 
                else if (error.response.status==404){
                    this.errorM='el usuario no existe';
                }
                else{
                    this.errorM='Ocurrió un error con el servidor.';
                }
            })
        }
    }
    
}
</script>
