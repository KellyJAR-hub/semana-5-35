<template>
  <v-app id="app">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <template>
        <v-card class="mx-auto" height="100%" width="256">
          <v-navigation-drawer class="blue accent-4" dark permanent>
            <v-list>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <template v-slot:append>
              <div class="pa-2">
                <v-btn block> Logout </v-btn>
              </div>
            </template>
          </v-navigation-drawer>
        </v-card>
      </template>
    </v-navigation-drawer>
    <v-main class="grey lighten-2">
      <v-container>
        <router-view></router-view>
        <!-- <hello-world></hello-world> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},

  data: () => ({
    drawer: false,
    items: [
      { title: 'Usuarios', icon: 'mdi-account-box' },
      { title: 'Servicios', icon: 'mdi-view-dashboard' }
    ]
  })
}
</script>
