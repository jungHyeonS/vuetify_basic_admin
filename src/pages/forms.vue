<template>
    <v-app>
        <sideBar></sideBar>
        <v-container>
            <v-card class="px-3">
                <v-card-text>
                    <p class="text-h5">고객사 과정 등록</p>
                </v-card-text>
                <v-row >
                    <v-col cols="12">
                        <!-- <v-card outlined class="pa-3">Company</v-card> -->
                        <table>
                            <tr>
                                <th>
                                    Company
                                </th>
                                <td>
                                    <v-autocomplete
                                        :items="people"
                                        item-text="name"
                                        item-value="name"
                                        v-model="friends"
                                        return-object
                                    ></v-autocomplete>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    과정명
                                </th>
                                <td>
                                    <v-text-field
                                        label="Regular"
                                    ></v-text-field>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    기간
                                </th>
                                <td class="date">
                                    <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="date"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="date"
                                            label="Picker in menu"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-date-picker
                                        v-model="date"
                                        no-title
                                        scrollable
                                        >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                        >
                                            OK
                                        </v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                    <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="date"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="date"
                                            label="Picker in menu"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-date-picker
                                        v-model="date"
                                        no-title
                                        scrollable
                                        >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                        >
                                            OK
                                        </v-btn>
                                        </v-date-picker>
                                    </v-menu>

                                </td>
                            </tr>
                            <tr>
                                <th>Radio Button</th>
                                <td>
                                    <v-radio-group v-model="radioGroup" row>
                                        <v-radio
                                            v-for="n in 3"
                                            :key="n"
                                            :label="`Radio ${n}`"
                                            :value="n"
                                        ></v-radio>
                                    </v-radio-group>

                                </td>
                            </tr>
                            <tr>
                                <th>Checkbox</th>
                                <td>
                                    <v-checkbox
                                        v-model="checkbox"
                                    ></v-checkbox>
                                </td>
                            </tr>
                            <tr>
                                <th>FileInput</th>
                                <td>
                                    <v-file-input
                                    truncate-length="15"
                                    ></v-file-input>
                                </td>
                            </tr>
                            <tr>
                                <th>textarea</th>
                                <td>
                                    <v-textarea
                                    name="input-7-1"
                                    label="Default style"
                                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                                    hint="Hint text"
                                    ></v-textarea>
                                </td>
                            </tr>
                            <tr>
                                <th>forms</th>
                                <td>
                                    <v-text-field
                                        v-model="firstname"
                                        :rules="nameRules"
                                        :counter="10"
                                        label="First name"
                                        required
                                    ></v-text-field>
                                </td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>
                                    <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="E-mail"
                                        required
                                    ></v-text-field>
                                </td>
                            </tr>
                        </table>
                    </v-col>
                    <!-- <v-col cols="auto">
                        <v-card outlined class="pa-3">
                            <v-autocomplete
                                :items="people"
                                item-text="name"
                                item-value="name"
                                v-model="friends"
                                return-object
                            ></v-autocomplete>
                        </v-card>
                    </v-col> -->
                </v-row>
            </v-card>
        </v-container>
    </v-app>
    
</template>
<script>
 import sideBar from "@/components/inc_sidemenu.vue"
  export default {
      name : "formspage",
      components:{
          sideBar
      },
      data () {
          return {
            people: [
                { name: 'Sandra Adams', group: 'Group 1' },
                { name: 'Ali Connors', group: 'Group 1' },
                { name: 'Trevor Hansen', group: 'Group 1' },
                { name: 'Tucker Smith', group: 'Group 1' },
            ],
            friends:"",
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
            radioGroup: 1,
            checkbox:false,
            checkbox1:false,
            firstname: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],

          }
      },
  }
</script>
<style scoped>
table{
    border-top: 1px solid #e8ebf1;
    border-bottom: 1px solid #e8ebf1;
    width: 100%;
    
}
table th{
    width: 200px;
    border-left: 1px solid #e8ebf1;
}
.v-text-field{
      width: 50%;
}
.date .v-text-field{
    width: 20%;
    float: left;
}
</style>