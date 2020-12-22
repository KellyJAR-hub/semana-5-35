<template>
  <div>
    <div class="container-fluid">
      <div class="row mt-md-5 mt-sm-5 mt-xs-5">
        <div v-for="(art, indice) of datos" :key="art.id" class="col-lg-6 col-xs-12 border">
          <div v-if="indice <= 3">
            <div class="d-flex justify-content-center align-items-center">
              <div class="p-3">
                <img v-bind:src="art.imagen" height="200" width="200"/>
              </div>

              <div class="p-2">
                <p>
                   {{ art.nombre }}
                </p>
                <p>
                  {{ art.descripcion }}
                </p>
              </div>
            </div>
            <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
              <button type="button" class="btn btn-outline-info">Info</button>
            </div>
          </div>
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
      datos: null,
    };
  },
  mounted() {
    axios.get('articulo/list').then((response) => (this.datos = response.data));
  },
};
</script>
