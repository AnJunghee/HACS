<template>
	<div>
		<h3>추후 바로가기 버튼</h3>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="검색어를 입력하세요."
          solo
          hide-details
        ></v-text-field>
      </v-card-title>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="emplist"
      :search="search"
      :page.sync="page"
      hide-default-footer
      class=""
      @page-count="pageCount = $event"
    ></v-data-table>
    
    <div class="">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      keys:['사원','주임','대리','과장',],
      page: 1,
      pageCount: 0,
      headers: [
          {
            text: 'no',
            align: 'start',
            sortable: false,
            value: 'no',
          },
          { text: '이름', value: 'name' },
          { text: '직급', value: 'rank' },
          { text: '부서', value: 'part' },
          { text: '연락처', value: 'tel' },
          { text: '상태', value: 'status' },
          { text: '계약형태', value: 'type' },
          { text: '입사일', value: 'date' },
        ],
      emplist: [
          {
            no: 1,
            name: '공대표',
            rank: '사원',
            part: '개발',
            tel:'010-0000-1234',
            status: '재직',
            type: '정규직',
            date: '2020.01.01'
          },
          {
            no: 2,
            name: '이연재',
            rank: '사원',
            part: '회계',
            tel:'010-1234-0000',
            status: '재직',
            type: '정규직',
            date: '2020.02.01'
          },
          {
            no: 3,
            name: '안정희',
            rank: '사원',
            part: '인사',
            tel:'010-1234-5678',
            status: '휴직',
            type: '정규직',
            date: '2020.03.01'
          },
          {
            no: 4,
            name: '이연권',
            rank: '부장',
            part: '개발',
            tel:'010-1122-3344',
            status: '재직',
            type: '정규직',
            date: '2020.04.01'
          },
        ],
      }
    },
  }
</script>

<style>

</style>