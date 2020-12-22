<template>
    <v-layout align-start>
        <v-flex>
            <v-toolbar text color="white">
                <v-toolbar-title>Clientes</v-toolbar-title>
                <v-divider
                class="mx-2"
                inset
                vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-text-field class="text-xs-center" v-model="search" append-icon="search" 
                label="Búsqueda" single-line hide-details></v-text-field>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark class="mb-2" v-on="on">Nuevo</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                        </v-card-title>            
                        <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="nombre" label="Nombre">                                        
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                    <v-select v-model="rol"
                                    :items="apellido" label="Apellido">
                                    </v-select>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="ciudad" label="Ciudad">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="telefono" label="Teléfono">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="email" label="Email">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field  v-model="necesidad" label="Necesidad">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md12 v-show="valida">
                                    <div class="red--text" v-for="v in validaMensaje" :key="v" v-text="v">

                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        </v-card-text>            
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1"  @click="close">Cancelar</v-btn>
                        <v-btn color="blue darken-1"  @click="guardar">Guardar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="adModal" max-width="290">
                    <v-card>
                        <v-card-title class="headline" v-if="adAccion==1">
                            Activar Item
                        </v-card-title>
                        <v-card-title class="headline" v-if="adAccion==2">
                            Desactivar Item
                        </v-card-title>
                        <v-card-text>
                            Estás a punto de <span v-if="adAccion==1">activar </span>
                            <span v-if="adAccion==2">desactivar </span> el item {{adNombre}}
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="activarDesactivarCerrar()" color="green darken-1" >
                                Cancelar
                            </v-btn>
                            <v-btn v-if="adAccion==1" @click="activar()" color="orange darken-4" >
                                Activar
                            </v-btn>
                            <v-btn v-if="adAccion==2" @click="desactivar()" color="orange darken-4" >
                                Desactivar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
            <v-data-table
                :headers="headers"
                :items="cliente"
                :search="search"
                class="elevation-1"
            >
            <template v-slot:[`item.opciones`]="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                    >
                    edit
                    </v-icon>
                        <v-icon v-if="item.estado"
                        small
                        @click="activarDesactivarMostrar(2,item)"
                        >
                        block
                        </v-icon>
                    
                        <v-icon v-else
                        small
                        @click="activarDesactivarMostrar(1,item)"
                        >
                        check
                        </v-icon>
            </template>
            <template v-slot:[`item.estado`]="{ item }">
                 <div v-if="item.estado">
                        <span class="blue--text">Activo</span>
                    </div>
                    <div v-else>
                        <span class="red--text">Inactivo</span>
                    </div>
            </template>
                <template v-slot:no-data>
                <v-btn color="primary" @click="listar()">Resetear</v-btn>
                </template>
            </v-data-table>
        </v-flex>
    </v-layout>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                dialog: false,
                search:'',
                cliente:[],
                headers: [
                    { text: 'Id', value: 'id', sortable: true },
                    { text: 'Nombre', value: 'nombre', sortable: true },
                    { text: 'Apellido', value: 'apellido', sortable: true },
                    { text: 'Email', value: 'email', sortable: false  },
                    { text: 'Teléfono', value: 'telefono', sortable: false  },
                    { text: 'Ciudad', value: 'ciudad', sortable: false },
                    { text: 'Necesidad', value: 'necesidad', sortable: false  },
                ],
                id:'',
                editedIndex: -1,
                nombre:'',
                apellido:'',
                ciudad: '',
                telefono: '',
                email: '',
                necesidad:'',
                valida:0,
                validaMensaje:[],
                adModal:0,
                adAccion:0,
                adNombre:'',
                adId:''
            }
        },
        computed: {
            formTitle () {
            return this.editedIndex === -1 ? 'Nuevo registro' : 'Editar registro'
            }
        },
        watch: {
            dialog (val) {
            val || this.close()
            }
        },
        created () {
            this.listar();
             
        },
        methods: {
            listar(){
                let me=this;
                let header={"Token" : this.$store.state.token};
                let configuracion= {headers : header};            
                axios.get('cliente/list',configuracion).then(function (response){
                    me.cliente=response.data;
                }).catch(function(error){
                    console.log(error);
                });
            },
            limpiar(){
                this.id='';
               this.nombre='';
                this.apellido='';
                this.ciudad='';
                this.telefono='';
                this.email='';
                this.necesidad='';
                this.valida=0;
                this.validaMensaje=[];
                this.editedIndex=-1;
            },
            validar(){
                this.valida=0;
                this.validaMensaje=[];
                if(!this.rol){
                    this.validaMensaje.push('Seleccione un rol.');
                }
                if(this.nombre.length<1 || this.nombre.length>50){
                    this.validaMensaje.push('El nombre del cliente debe tener entre 1-50 caracteres.');
                }
                if(this.apellido.length>20){
                    this.validaMensaje.push('El apellido del cliente debe tener entre 1-50 caracteres.');
                }
                if(this.ciudad.length>70){
                    this.validaMensaje.push('La ciudad no debe tener más de 70 caracteres.');
                }
                if(this.telefono.length>20){
                    this.validaMensaje.push('El teléfono no debe tener más de 20 caracteres.');
                }
                if(this.email.length<1 || this.nombre.length>50){
                    this.validaMensaje.push('El email del cliente debe tener entre 1-50 caracteres.');
                }
                if(this.necesidad.length<1 || this.nombre.length>64){
                    this.validaMensaje.push('La necesidad del cliente debe tener entre 1-64 caracteres.');
                }
                if (this.validaMensaje.length){
                    this.valida=1;
                }
                return this.valida;
            },
            guardar(){
                let me=this;
                let header={"Token" : this.$store.state.token};
                let configuracion= {headers : header};
                if (this.validar()){
                    return;
                }
                if (this.editedIndex >-1){
                    axios.put('cliente/update',
                    {
                        'nombre':this.nombre,
                        'apellido':this.apellido,
                        'ciudad':this.ciudad,
                        'telefono': this.telefono,
                        'email':this.email,
                        'necesidad':this.necesidad
                    },configuracion)
                    .then(function(response){
                        me.limpiar();
                        me.close();
                        me.listar();
                    })
                    .catch(function(error){
                        console.log(error);
                    });
                }else{
                    //Código para guardar
                    axios.post('usuario/add',
                    {
                        'nombre':this.nombre,
                        'apellido':this.apellido,
                        'ciudad':this.ciudad,
                        'telefono': this.telefono,
                        'email':this.email,
                        'necesidad':this.necesidad
                    },configuracion)
                    .then(function(response){
                        me.limpiar();
                        me.close();
                        me.listar();
                    })
                    .catch(function(error){
                        console.log(error);
                    });
                }
            },
            editItem (item) {
                this.id=item.id;
                this.nombre=item.nombre;
                this.apellido=item.apellido;
                this.ciudad=item.ciudad;
                this.telefono=item.telefono;
                this.email=item.email;
                this.necesidad=item.necesidad;
                this.dialog = true;
                this.editedIndex=1;
            },
            activarDesactivarMostrar(accion,item){
                this.adModal=1;
                this.adNombre=item.nombre;
                this.adId=item.id;
                if (accion==1){
                    this.adAccion=1;
                } else if(accion==2){
                    this.adAccion=2;
                } else{
                    this.adModal=0;
                }
            },
            activarDesactivarCerrar(){
                this.adModal=0;
            },
            activar(){
                let me=this;
                let header={"Token" : this.$store.state.token};
                let configuracion= {headers : header};
            
                axios.put('usuario/activate',{'id':this.adId},configuracion)
                    .then(function(response){
                        me.adModal=0;
                        me.adAccion=0;
                        me.adNombre='';
                        me.adId='';
                        me.listar();
                    })
                    .catch(function(error){
                        console.log(error);
                    });
            },
            desactivar(){
                let me=this;
                let header={"Token" : this.$store.state.token};
                let configuracion= {headers : header};
                axios.put('usuario/deactivate',{'id':this.adId},configuracion)
                    .then(function(response){
                        me.adModal=0;
                        me.adAccion=0;
                        me.adNombre='';
                        me.adId='';
                        me.listar();
                    })
                    .catch(function(error){
                        console.log(error);
                    });
            },
            close () {
                this.dialog = false;
            },
             
   
        }
    }
</script>
