<template>
    <div>
        <v-app-bar
        app
        color="primary"
        dark
        v-if="$vuetify.breakpoint.mobile"
        >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer">
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Application
                </v-list-item-title>
                <v-list-item-subtitle>
                    subtext
                </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
                <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.to"
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
    
</template>
<script>
    export default {
        name :"sidebar",
        mounted(){
            if(this.$vuetify.breakpoint.mobile){
                this.drawer = false;
            }else{
                this.drawer = true;
            }
            console.log("dre",this.drawer);
        },
        data () {
            return {
                drawer:false,
                items: [
                { title: 'forms', icon: 'mdi-view-dashboard',to:"/" },
                { title: 'Reuter', icon: 'mdi-image' ,to:"/reuter"},
                { title: 'About', icon: 'mdi-help-box' },
                ],
                right: null,
            }
        },
    }
</script>