<template>
	<div>
		<h3>추후 바로가기 버튼</h3>
    <v-card>
      <v-card-title>
        <v-select
          v-model="position"
          class="mr-5"
          flat
          solo-inverted
          hide-details
          :items="position_item"
          style="width: 1px;"
          prepend-inner-icon="mdi-magnify"
          label="직급"
          @change="filterPosition"
        ></v-select>
        <v-select
          v-model="part"
          class="mr-5"
          flat
          solo-inverted
          hide-details
          :items="part_item"
          style="width: 1px;"
          prepend-inner-icon="mdi-magnify"
          label="부서"
          @change="filterPart"
          ></v-select>
        <v-select
          v-model="nation"
          flat
          solo-inverted
          hide-details
          :items="nation_item"
          style="width: 1px;"
          prepend-inner-icon="mdi-magnify"
          label="국적"
          @change="filterNation"
        ></v-select>
             
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="검색어를 입력하세요."
            solo
            hide-details
          ></v-text-field>
        </v-col>
        <v-btn
          color="primary">
          일용직 등록
        </v-btn>
      </v-card-title>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="empTmp"
      :items-per-page="20"
      :loading="loading"
      :search="search"
      :position-filter="positionFilter"
      :part-filter="partFilter"
      :nation-filter="nationFilter"
      :page.sync="page"
      hide-default-footer
      class="elevation-1"
      style="padding: 20px;"
      @page-count="pageCount = $event"
    >
      <template slot="item.no" scope="props">
        {{ props.index + 1 }}
      </template>
    </v-data-table>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="3"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      position: '',
      part: '',
      nation: '',
      search: '',
      position_item: ['전체', '사원', '대리', '과장', '차장'],
      part_item: ['전체', '인사', '기획', '총무', '경영', '영업', '개발'],
      nation_item: ['전체', '내국인', '외국인'],
      page: 1, 
      headers: [
          { text: 'No', value: 'no', align: 'start', sortable: false,},
          { text: '이름', value: 'name' },
          { text: '직급', value: 'position' },
          { text: '부서', value: 'part' },
          { text: '연락처', value: 'tel' },
          { text: '상태', value: 'status' },
          { text: '국적', value: 'nation' },
          { text: '입사일', value: 'date' },
        ],
      empTmp: [
          {
            name: '공대표',
            position: '사원',
            part: '개발',
            tel:'010-0000-1234',
            status: '재직',
            nation: '내국인',
            date: '2020.01.01'
          },
          {
            name: '이연재',
            position: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            nation: '내국인',
            date: '2020.02.01'
          },
          {
            name: '안정희',
            position: '사원',
            part: '인사',
            tel:'010-1234-5678',
            status: '휴직',
            nation: '내국인',
            date: '2020.03.01'
          },
          {
            name: '이연권',
            position: '부장',
            part: '개발',
            tel:'010-1122-3344',
            status: '퇴사',
            nation: '정규직',
            date: '2020.04.01'
          },
          {
            name: '이연권',
            position: '부장',
            part: '개발',
            tel:'010-1122-3344',
            status: '퇴사',
            nation: '정규직',
            date: '2020.04.01'
          },
          {
            name: '이연권',
            position: '부장',
            part: '개발',
            tel:'010-1122-3344',
            status: '퇴사',
            nation: '정규직',
            date: '2020.04.01'
          },
          {
            name: '이연권',
            position: '부장',
            part: '개발',
            tel:'010-1122-3344',
            status: '퇴사',
            nation: '정규직',
            date: '2020.04.01'
          },
          {
            name: '이연권',
            position: '부장',
            part: '개발',
            tel:'010-1122-3344',
            status: '퇴사',
            nation: '정규직',
            date: '2020.04.01'
          },
          {
            name: '이연권',
            position: '부장',
            part: '개발',
            tel:'010-1122-3344',
            status: '퇴사',
            nation: '정규직',
            date: '2020.04.01'
          },
          {
            name: '이연권',
            position: '부장',
            part: '개발',
            tel:'010-1122-3344',
            status: '퇴사',
            nation: '정규직',
            date: '2020.04.01'
          },
          {
            name: '이연권',
            position: '부장',
            part: '개발',
            tel:'010-1122-3344',
            status: '퇴사',
            nation: '정규직',
            date: '2020.04.01'
          },
          {
            name: '이연권',
            position: '부장',
            part: '개발',
            tel:'010-1122-3344',
            status: '퇴사',
            nation: '정규직',
            date: '2020.04.01'
          },
          {
            name: '이연권',
            position: '부장',
            part: '개발',
            tel:'010-1122-3344',
            status: '퇴사',
            nation: '정규직',
            date: '2020.04.01'
          },
          {
            name: '이연재',
            position: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            nation: '내국인',
            date: '2020.02.01'
          },
          {
            name: '이연재',
            position: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            nation: '내국인',
            date: '2020.02.01'
          },
          {
            name: '이연재',
            position: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            nation: '내국인',
            date: '2020.02.01'
          },
          {
            name: '이연재',
            position: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            nation: '내국인',
            date: '2020.02.01'
          },
          {
            name: '이연재',
            position: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            nation: '내국인',
            date: '2020.02.01'
          },
          {
            name: '이연재',
            position: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            nation: '내국인',
            date: '2020.02.01'
          },
          {
            name: '이연재',
            position: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            nation: '내국인',
            date: '2020.02.01'
          },
          {
            name: '이연재',
            position: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            nation: '내국인',
            date: '2020.02.01'
          },
          {
            name: '이연재',
            position: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            nation: '내국인',
            date: '2020.02.01'
          },
          {
            name: '이연재',
            position: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            nation: '내국인',
            date: '2020.02.01'
          },
        ],
       loading: false 
    }
  },
}

</script>

<style>

</style>