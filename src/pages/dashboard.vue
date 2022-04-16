<template>
    <v-app>
        <sideBar></sideBar>
        <v-container>
            <v-card>DashBoard</v-card>
        </v-container>
    </v-app>
    
</template>
<script>
 import sideBar from "@/components/inc_sidemenu.vue"
  export default {
      name : "dashboardpage",
      components:{
          sideBar
      }
  }
</script>