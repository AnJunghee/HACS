<template>
  <div>
    <h3>추후 바로가기 버튼</h3>
    <v-card>
      <v-card-title>
        <v-form ref="form" 
          lazy-validation 
          v-model="valid"
          style="width: 95%; margin:0 auto"
        >
          <v-row no-gutters>
            <v-col>
              <v-btn
                class="btnRight"
                color="primary">
                재직증명서 출력
                </v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-btn
                class="btnRight"
                color="primary">
                경력증명서 출력
                </v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="입사년도"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="modal = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
            <v-select
              v-model="annual"
              flat
              solo-inverted
              hide-details
              :items="annual_item"
              label="연차"
            ></v-select>
            <v-text-field
              v-model="Id"
              :rules="IdRules"
              placeholder="직원 ID"
            ></v-text-field>
          </v-row>
          <v-row no-gutters>
            <v-text-field
              v-model="Name"
              :rules="NameRules"
              placeholder="이름"
            ></v-text-field>
            <v-text-field
              v-model="phone"
              :rules="phoneRules" 
              placeholder="휴대폰번호"
            ></v-text-field>
          </v-row>
          <v-row no-gutters>
            <v-text-field
                placeholder="주민등록번호 앞자리"
            ></v-text-field>
            <h3>-</h3>
            <v-text-field
                placeholder="주민등록번호 뒷자리"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-select
              v-model="gender"
              flat
              solo-inverted
              hide-details
              :items="gender_item"
              label="성별"
              @change="filterGender"
            ></v-select>
            <v-spacer></v-spacer>
            <v-text-field
                placeholder="나이"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-select
              v-model="nation"
              flat
              solo-inverted
              hide-details
              :items="nation_item"
              label="국적"
              @change="filterNation"
            ></v-select>
          </v-row>
          <v-row no-gutters>
            <h3>우편번호</h3>
            <v-text-field 
              v-model="postcode"
              :rules="postcodeRules"
              readonly
              style="width: 200px; display: inline-block"
              @click="postcodeModalShow = true"
            ></v-text-field>
            <v-btn class="address_btn" depressed color="primary" @click="postcodeModalShow = true">우편번호</v-btn>
          </v-row>
          <v-row no-gutters>
            <h3>주소</h3>
            <v-text-field 
              v-model="address"
              :rules="addressRules"
              readonly
              @click="postcodeModalShow = true"
            ></v-text-field>
          </v-row>
          <v-row no-gutters>
            <h3>상세주소</h3>
            <v-text-field 
              v-model="detailAddress"
              :rules="detailAddressRules"
            ></v-text-field>
          </v-row>
          <v-row no-gutters>
            <v-select
              v-model="position"
              flat
              solo-inverted
              hide-details
              :items="position_item"
              label="직급"
              @change="filterPosition"
            ></v-select>
            <v-select
              v-model="part"
              flat
              solo-inverted
              hide-details
              :items="part_item"
              label="부서"
              @change="filterPart"
            ></v-select>
            <v-select
              v-model="state"
              flat
              solo-inverted
              hide-details
              :items="state_item"
              label="상태"
              @change="filterState"
            ></v-select>
          </v-row>
          <v-row no-gutters>
            <v-select
              v-model="bank"
              flat
              solo-inverted
              hide-details
              :items="bank_item"
              label="은행"
              @change="filterBank"
            ></v-select>
            <v-text-field>
            </v-text-field>
          </v-row>
          <v-text-field
                  v-model="date2"
                  label="퇴사년도"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  ></v-text-field>
          <v-row no-gutters>
            <v-col>
              <v-btn
                class="btnRight"
                color="primary">
                수정
              </v-btn>
            </v-col>  
          </v-row>
        </v-form>
        <post-code 
        :show="postcodeModalShow"
        @getPostCode="getPostCode"
        ></post-code>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import PostCode from '@/components/login/PostCode'

export default {
    name: 'empDetail',
    components: {
      PostCode,
    },
    data () {
        return{
            date: '',
            date2:'',
            menu: false,
            modal: false,
            gender: '',
            gender_item: ['남', '여'],
            nation: '',
            nation_item: ['내국인', '외국인'],
            postcodeModalShow: false,
        }
    },
    methods: {
      getPostCode(data){
        this.postcode = data.result.zonecode;
        this.address = data.result.address;
        this.postcodeModalShow = data.show;
      },
    }
}
</script>

<style scoped>
  .btnRight {
    float: right;
  }
</style>