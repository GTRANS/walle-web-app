<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      color="#C44E78"
      dark
      fixed
      app
      width="280"
    >
      <v-card-title align="center" class="mx-auto d-flex justify-center">
        <img src="../static/2 11.png" />
      </v-card-title>

      <v-list>
        <v-list-item to="/admin" router exact>
          <v-list-item-action>
            <v-icon size="30"> mdi-home-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Beranda </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group :value="true" no-action color="white">
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon size="30" color="white"> mdi-file-edit-outline </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">Manage Produk</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(admin, i) in admins"
            :key="i"
            :to="admin.to"
            router
            exact>
            <v-list-item-title
              class="white--text ml-1"
              v-text="admin.title"
            ></v-list-item-title>

            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-item to="/admin/status-transaksi" router exact>
          <v-list-item-action>
            <v-icon size="30" color="white">mdi-history</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Status Transaksi </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list-item @click="logout" router exact>
          <v-list-item-action>
            <v-icon size="30" color="white">mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title > Log Out </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="white" elevation="1">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-app-bar-title >Admin</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AdminLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      admins: [
        {
          title: 'Tambah Saldo',
          to: '/admin/tambah-saldo',
        },
        {
          title: 'Tambah Produk',
          to: '/admin/tambah-produk',
        },
      ],
      miniVariant: false,
      title: 'Beranda',
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  }
}
</script>

<style scoped>
span {
  color: #ffffff;
}

v-list-group {
  color: #ffffff;
}
</style>
