<template>
  <v-app id="inspire">
    <v-app-bar
      dense 
      app>
      <v-toolbar-title>
        <!-- test123 -->
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

