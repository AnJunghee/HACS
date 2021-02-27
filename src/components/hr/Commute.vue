<template>
  <div>
    <h1>근퇴관리</h1>
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

  </div>
  
</template>

<script>
export default {
  data() {
    return {
      headers: [
          {
            text: 'no',
            align: 'start',
            sortable: false,
            value: 'no',
          },
          { text: '이름', value: 'name' },
          { text: '연락처', value: 'tel' },          
          { text: '직급', value: 'rank' },
          { text: '부서', value: 'part' },
          { text: '계약형태', value: 'type' },
          { text: '출근시간', value: 'checkin' },
          { text: '퇴근시간', value: 'checkout'},
        ],
      emplist: [
          {
            no: 1,
            name: '공대표',
            tel:'010-9492-0576',
            rank: '사원',
            part: '개발',
            type: '정규직',
            checkin : '2021-02',
            checkout : '2021-12',
          },
          {
            no: 2,
            name: '이연재',
            tel:'010-1234-0000',            
            rank: '사원',
            part: '회계',
            type: '정규직',
            checkin : '2021-02',
            checkout : '2021-12',
          },
          {
            no: 3,
            name: '안정희',
            tel:'010-1234-5678',            
            rank: '사원',
            part: '인사',
            type: '정규직',
            checkin : '2021-02',
            checkout : '2021-12',
          },
          {
            no: 4,
            name: '이연권',
            tel:'010-1122-3344',            
            rank: '부장',
            part: '개발',
            type: '정규직',
            checkin : '2021-02',
            checkout : '2021-12',
          },          
        ],
      }
  }
}
</script>

<style>

</style>