<template>

    <v-app>
        <sideBar></sideBar>
        <v-container>
            <v-card class="px-3">
                <v-card-text>
                    <p class="text-h5">로이터 메일 신청 리스트</p>
                </v-card-text>
                <v-row class="px-3">
                    <v-col cols="auto">
                        <!-- <v-select
                        :items="items"
                        label="수신상태"
                        ></v-select> -->
                        <v-combobox
                        outlined
                        :items="items"
                        label="수신상태"
                        ></v-combobox>
                    </v-col>
                    <v-col cols="auto">
                        <v-combobox
                        outlined
                        items="items"
                        label="추천자"
                        ></v-combobox>
                    </v-col>
                    <v-col cols="auto">
                        <v-text-field label="검색 명" outlined></v-text-field>
                    </v-col>
                    <v-col cols="auto">
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
                                outlined
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
                    </v-col>
                    <v-col cols="auto">
                        <v-menu
                            ref="menu"
                            v-model="menu2"
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
                                outlined
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
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="primary">검색</v-btn>
                    </v-col>
                </v-row>
                <!-- <v-row>
                    <v-col cols="12">
                        <div>
                            <v-simple-table>
                                <tr>
                                    <th>하이</th>
                                    <td>abc</td>
                                </tr>
                                <tr>
                                    <th>하이하이</th>
                                    <td>ggg</td>
                                </tr>
                            </v-simple-table>
                        </div>
                    </v-col>
                </v-row> -->
                <!-- <v-row>
                    <v-col cols="12">
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th>날짜</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>날짜</td>
                                </tr>
                            </tbody>
                            
                        </v-simple-table>
                    </v-col>
                </v-row> -->
            </v-card>
            <v-spacer></v-spacer>
            <v-card class="pa-3 mt-5">
                <v-row>
                    <v-col cols="12">
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox"/></th>
                                    <th>No</th>
                                    <th>보낸 사람</th>
                                    <th>보낸 Email</th>
                                    <th>받은 사람</th>
                                    <th>받는 이메일</th>
                                    <th>추천일</th>
                                    <th>메일발송수</th>
                                    <th>로이터수업</th>
                                    <th>수신상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox"/></td>
                                    <td>83962</td>
                                    <td>정종민</td>
                                    <td>juwes@korea.kr</td>
                                    <td>김</td>
                                    <td>juwes@snu.ac.kr</td>
                                    <td>2022-04-12T01:57:18.000+00:00</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>Y</td>
                                </tr>
                            </tbody>
                        </v-simple-table>
                        <div class="text-center">
                            <v-pagination
                            v-model="page"
                            :length="6"
                            ></v-pagination>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </v-app>
    
</template>
<script>
 import sideBar from "@/components/inc_sidemenu.vue"
  export default {
      name : "reuterpage",
      components:{
          sideBar
      },
      data () {
        return {
            items: [ '수신거부', '수신'],
            page: 1,
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
        }
      },
  }
</script>
<style scoped>
.v-text-field{
      width: 130px;
}
</style>