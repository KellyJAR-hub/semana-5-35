<template>
  <div class="bg-dark text-white">
    <div v-if="estado">
      <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark ">
        <a class="navbar-brand " href="# ">
          <img
            src="./assets/image/logo35.png"
            width="100 "
            height="60"
            class="d-inline-block align-top "
            alt=" "
            loading="lazy "
          />
          GRUPO 35
        </a>
        <div class="collapse navbar-collapse justify-content-end " id="navbarNav ">
          <ul class="navbar-nav ">
            <li class="nav-item active ">
              <a class="nav-link " v-on:click="ingresar" href="# ">Ingreso <span class="sr-only ">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Empieza carrusel -->
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
              <img
              src="./assets/image/inteligencia.jpg"
              class="d-block w-100"
              alt="Inteligencia Artificial"
              height="500px"
              />
            <div class="carousel-caption d-none d-md-block">
              <h5>Inteligencia Artificial</h5>
              <p>Uso de chatbot</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="./assets/image/marketing.jpg"
              class="d-block w-100"
              alt="Marketing Digital"
              height="500px"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Marketing Digital</h5>
              <p>Posicionamiento de marca, mediante estrategias de marketing digital</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="./assets/image/seo.jpg"
              class="d-block w-100"
              alt="SEO"
              height="500px"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>SEO</h5>
              <p>Posicionamiento web</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
        <!-- Termina carrusel -->
      </div>
      <!-- Inforcion de la empresa -->
      <div>
        <v-card>
          <v-card-text>
          <h3 class="text-md-center" bg-secondary>Para acelerar el crecimiento e internacionalización de su negocio, su empresa debe avanzar en ser más eficientes
 y tener como objetivo conseguir participación en los mercados identificados en su core de negocio pero a los cuales aún no ha logrado ingresar.
 La inteligencia artificial y en concreto los chatbots con inteligencia artificial mejoran la productividad en los procesos de venta, 
 soporte postventa y en general los aspectos relacionados con el conocimiento de su empresa por parte de sus clientes y a su vez que
 la I.A leayude a conocer el perfil de sus clientes y mantenerlo informado para que mejore su cuota de consumo y por lo tanto los ingresos de su empresa.</h3>
          </v-card-text>
        </v-card>
      </div>
      <!-- Seccion de Articulos -->
      <div>
        <home />
      </div>
      <br>
      <br>
          <div class="accordion accordion-flush" id="accordionFlushExample" align="center">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Testimonio # 1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
       <img
            src="./assets/image/colombia.png"
            width="90 "
            height="0"
            class="d-inline-block align-top "
            alt=" "
            loading="lazy "
          />
      <div class="accordion-body"><h3>Para conseguir que nuestros productos se conozcan a nivel nacional hemos 
      confiado en la solución de chatbots de la empresa Grupo 35.</h3></div>
      <br>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Testimonio #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><h3>La empresa Grupo 35 nos ha aportado posicionamiento para conseguir nuevos 
        clientes y permitir que nuestros clientes conozcan los servicios ofrecidos.</h3></div>
        <br>
        <br>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Testimonio #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><h3>Con el apoyo de la empresa Grupo 35 hemos conseguido aumentar las ventas y 
        conseguir nuevos clientes por el conocimiento del portafolio que ofrecemos.</h3></div>
        <br>
        <br>
    </div>
  </div>
</div>
    <div>
      <formulario-cliente />
    </div>

      <footer class="page-footer bg-secondary text-white pt-4">
        <!-- Footer Text -->
        <div class="container-fluid text-center text-md-left">
          <!-- Grid row -->
          <div class="row">
            <!-- Grid column -->
            <div class="col-md-6 mt-md-0 mt-3">
              <!-- Content -->
              <h2 class="text-uppercase font-weight-bold">Contáctenos</h2>
              <h3>
              <p>
                servicioalcliente@grupo35.com --  (6)3635075
              </p>
              <p>
                Jrmunozma@grupo35.com --  3005805524
              </p>
              </h3>
            </div>
            <!-- Grid column -->

            <hr class="clearfix w-100 d-md-none pb-3" />

            <!-- Grid column -->
            <div class="col-md-6 mb-md-0 mb-3">
              <!-- Content -->
              <h2 class="text-uppercase font-weight-bold">Sedes</h2>
              <h3>
              <p>
                Contamos con sedes en Cali, Bogotá, Medellín y Pereira.</p>
              <p><a href= "https://github.com/KellyJAR-hub/semana-5-35.git">
                Repositorio: https://github.com/KellyJAR-hub/semana-5-35.git
              </a>
              </p>
              </h3>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
        <!-- Footer Text -->

        <!-- Copyright -->
        <div class="footer-copyright text-center py-1 bg-dark">(c) 2020 Copyright: DAD</div>
        <!-- Copyright -->
      </footer>
    </div>
    <div v-else>
      <v-app id="app">
        <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
          <v-list dense>
            <template>
              <v-list-item @click="home">
                <v-list-item-action>
                  <v-icon>home</v-icon>
                </v-list-item-action>
                <v-list-item-title>
                  Inicio
                </v-list-item-title>
              </v-list-item>
            </template>
            <template v-if="logueado">
              <v-list-group>
                <v-list-item slot="activator">
                  <v-list-item-content>
                    <v-list-item-title>
                      Almacén
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'categoria' }">
                  <v-list-item-action>
                    <v-icon>table_chart</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>
                      Categorías
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'articulo' }">
                  <v-list-item-action>
                    <v-icon>table_chart</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>
                      Artículos
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-group>
                <v-list-item slot="activator">
                  <v-list-item-content>
                    <v-list-item-title>
                      Accesos
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'usuario' }">
                  <v-list-item-action>
                    <v-icon>table_chart</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>
                      Usuarios
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'cliente' }">
                  <v-list-item-action>
                    <v-icon>table_chart</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>
                      Clientes
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </template>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="teal accent-3" dark>
          <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <span class="hidden-sm-and-down">Sistema</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="salir()" icon v-if="logueado"> <v-icon>logout</v-icon> Salir </v-btn>
          <v-btn :to="{ name: 'login' }" icon v-else> <v-icon>apps</v-icon> Login </v-btn>
        </v-app-bar>
        <v-content>
          <v-container fluid fill-height>
            <v-slide-y-transition mode="out-in">
              <router-view />
            </v-slide-y-transition>
          </v-container>
        </v-content>
        <v-footer height="auto">
          <v-layout justify-center>
            <v-flex text-xs-center>
              <v-card flat tile color="primary" class="white--text">
                <v-card-text class="white--text pt-0">
                  Proyecto final &copy;2020
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-app>
    </div>
  </div>
</template>

<script>
import FormularioCliente from './components/formulario-cliente.vue';

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

import home from './components/home.vue';

export default {
  components: { home, FormularioCliente },
  name: 'App',

  data() {
    return {
      drawer: false,
      estado: 1,
    };
  },

  computed: {
    logueado() {
      return this.$store.state.usuario;
    },
  },
  created() {
    this.$store.dispatch('autoLogin');
  },
  methods: {
    salir() {
      this.$store.dispatch('salir');
      this.estado = 1;
    },

    ingresar() {
      this.estado = 0;
    },

    home() {
      this.estado = 1;
    },
  },
};
</script>

<style scoped>
.header {
    color: #36A0FF;
    font-size: 27px;
    padding: 10px;
}

.bigicon {
    font-size: 35px;
    color: #36A0FF;
}
</style>
