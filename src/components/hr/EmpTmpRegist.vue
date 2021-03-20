<template>
  <div>
    <h3>추후 바로가기 버튼</h3>
    <v-card>
      <v-card-title>
        <v-form ref="form" 
          lazy-validation 
          v-model="valid"
          style="float: left; width: 95%; margin:0 auto;"
        >
          <v-row no-gutters>
            <v-col>
              <v-btn
                class="btnRight"
                color="primary">
                근로확인서 출력
                </v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <h5 class="mr-5">입사년도</h5>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  append-outer-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  >
                </v-text-field>
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
            <h5 class="mx-5">연차</h5>
            <v-select
              v-model="annual"
              solo
              :items="annual_item"
            ></v-select>
            <h5 class="mx-5">직원 ID</h5>
            <v-text-field
              v-model="Id"
              :rules="IdRules"
            ></v-text-field>
          </v-row>
          <v-row no-gutters>
            <h5 class="mr-5">이름</h5>
            <v-text-field
              v-model="Name"
              :rules="NameRules"
            ></v-text-field>
            <h5 class="mx-5">연락처</h5>
            <v-text-field
              v-model="phone"
              :rules="phoneRules" 
              placeholder="- 제외 입력"
            ></v-text-field>
          </v-row>
          <v-row no-gutters>
            <h5 class="mr-5">주민등록번호</h5>
            <v-text-field
              size="6"
              maxlength="6"
              name="ageNum"
              v-on:KeyUp="getAge(this.ageNum.value);"
              >
            </v-text-field>
            <h3>-</h3>
            <v-text-field
              size="7"
              maxlength="7"
              name="resitNum2"
              >
            </v-text-field>
            <h5 class="mx-5">성별</h5>
            <v-select
              v-model="gender"
              solo
              :items="gender_item"
              @change="filterGender"
              style="width: 50px"
            ></v-select>
            <h5 class="mx-5">나이</h5>
            <v-text-field>
            </v-text-field>
            <h5 class="mx-5">내/외</h5>
            <v-select
              v-model="nation"
              solo
              :items="nation_item"
              @change="filterNation"
            ></v-select>
          </v-row>
          <v-row no-gutters>
            <h5 class="mr-5">우편번호</h5>
            <v-text-field 
              class="mr-5"
              v-model="postcode"
              :rules="postcodeRules"
              readonly
              style="width: 200px; display: inline-block"
              @click="postcodeModalShow = true"
            ></v-text-field>
            <v-btn class="address_btn" depressed color="primary" @click="postcodeModalShow = true">주소 찾기</v-btn>
          </v-row>
          <v-row no-gutters>
            <h5 class="mr-5">주소</h5>
            <v-text-field 
              v-model="address"
              :rules="addressRules"
              placeholder="주소 찾기를 해주세요."
              readonly
              @click="postcodeModalShow = true"
            ></v-text-field>
          </v-row>
          <v-row no-gutters>
            <h5 class="mr-5">상세주소</h5>
            <v-text-field 
              v-model="detailAddress"
              :rules="detailAddressRules"
              placeholder="상세주소를 입력해주세요."
            ></v-text-field>
          </v-row>
          <v-row no-gutters>
            <h5 class="mr-5">직급</h5>
            <v-select
              v-model="position"
              solo
              :items="position_item"
              @change="filterPosition"
            ></v-select>
            <h5 class="mx-5">부서</h5>
            <v-select
              v-model="part"
              solo
              :items="part_item"
              @change="filterPart"
            ></v-select>
            <h5 class="mx-5">상태</h5>
            <v-select
              v-model="state"
              solo
              :items="state_item"
              @change="filterState"
            ></v-select>
          </v-row>
          <v-row no-gutters>
            <h5 class="mr-5">은행</h5>
            <v-select
              v-model="bank"
              solo
              :items="bank_item"
              @change="filterBank"
            ></v-select>
            <v-text-field
              class="mx-5"
              placeholder="계좌번호를 입력해주세요."
            >
            </v-text-field>
          </v-row>
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
    name: 'tmpRegist',
    components: {
      PostCode,
    },
    data () {
        return{
          date: '',
          menu: false,
          modal: false,
          gender: '',
          gender_item: ['남', '여'],
          nation: '내국인',
          nation_item: ['내국인', '외국인'],
          postcodeModalShow: false,
          position: '',
          position_item: ['사원', '대리', '과장', '차장'],
          part: '',
          part_item: ['인사', '기획', '총무', '경영', '영업', '개발'],
          bank: '',
          bank_item: ['KB국민은행', '우리은행', '신한은행', '하나은행', 'SC제일은행']
          
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