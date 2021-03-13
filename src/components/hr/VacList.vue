<template>
  <div>
    <h1>휴가자</h1>

    <v-card-title>
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
        v-model="type"
        flat
        solo-inverted
        hide-details
        :items="type_item"
        style="width: 1px;"
        prepend-inner-icon="mdi-magnify"
        label="종류"
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
        검색
      </v-btn>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="vaclist"
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
  data () {
    return {
      part_item: ['전체', '인사', '기획', '총무', '경영', '영업', '개발'],
      type_item: ['병가', '연차', '반차', '육아휴직'],
      headers: [
          { text: 'No', value: 'no', align: 'start' },
          { text: '신청일', value: 'date' },
          { text: '휴가자', value: 'name' },
          { text: '부서', value: 'part' },
          { text: '종류', value: 'type' },
          { text: '휴가날짜', value: 'vacdate' },
          { text: '일수', value: 'nod' },
        ],
      vaclist: [
          {
            no: 1,
            date: '2020.12.20',
            name: '공대표',
            part: '인사',
            type: '연차',
            vacdate: '2020.12.22 ~ 2020.12.24',
            nod: '2일'
          },
          {
            no: 2,
            date: '2020.12.20',
            name: '이연재',
            part: '인사',
            type: '병가',
            vacdate: '2020.12.22 ~ 2020.12.24',
            nod: '2일'
          },
          {
            no: 3,
            date: '2020.12.20',
            name: '안정희',
            part: '총무',
            type: '오후반차',
            vacdate: '2020.12.22',
            nod: '1일'
          },
          {
            no: 4,
            date: '2020.12.31`',
            name: '이연권',
            part: '사장',
            type: '출장',
            vacdate: '2021.02.12 ~ 2021.03.12',
            nod: '30일'
          },       
      ],
    }
  },
}
</script>

<style>

</style>