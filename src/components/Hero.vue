<template>
  <!-- Table view -->
  <div class="table" v-if="!cardsView" v-loading="loading">
    <div class="filters-wrapper">
      <el-select class="m-2" placeholder="Table view" size="large">
        <el-option value="Cards view" @click="toCardsView" />
      </el-select>
    </div>

    <el-table :data="pagedTableData" border style="width: 100%">
      <el-table-column prop="name" label="Name" width="300"> </el-table-column>
      <el-table-column prop="breed" label="Breed" width="300">
      </el-table-column>
      <el-table-column
        prop="birth_date"
        label="Birth Date"
        width="250"
      ></el-table-column>
      <el-table-column
        prop="registration"
        label="Registration"
        width="250"
      ></el-table-column>
      <el-table-column
        prop="last_timeline_activity"
        label="Last Activity"
        width="250"
      >
      </el-table-column>
    </el-table>
  </div>

  <!-- Cards view -->
  <div class="cards" v-if="cardsView">
    <div class="filters-wrapper">
      <el-select class="m-2" placeholder="Cards view" size="large">
        <el-option value="Table view" @click="toTableView" />
      </el-select>
    </div>

    <el-switch
      v-model="switchToSmall"
      @click="changeCards"
      active-text="Switch to small cards"
    />
    <el-row :gutter="20">
      <el-col
        v-for="item in pagedTableData"
        :key="item.id"
        :sm="24"
        :md="8"
        class="custom-col"
      >
        <router-link :to="`/details/${item.id}`">
          <div class="grid-content card" :class="{ smallCards: switchToSmall }">
            <p class="title">{{ item.name }}</p>
            <hr />
            <img :src="item.img" />
            <span class="info" :class="{ hideInfo: switchToSmall }">
              <p>Breed: {{ item.breed }}</p>
              <p>Birth date: {{ item.birth_date }}</p>
              <p>Last timeline activity: {{ item.last_timeline_activity }}</p>
            </span>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>

  <!-- mutual pagination -->
  <el-pagination
    background
    layout="prev, pager, next"
    :total="this.tableData.length"
    @current-change="setPage"
    class="pagination"
  >
  </el-pagination>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dogsData from "../assets/doglist.json";
import { ref } from "vue";

export default defineComponent({
  name: "HeroComponent",

  created() {
    this.tableData = dogsData;
    this.loading = true;
    if (this.tableData) {
      // Using this setTimeout so we can simulate request in order to show the loader.
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  },

  data() {
    return {
      tableData: [],
      page: 1,
      pageSize: 9,
      switchToSmall: ref(false),
      cardsView: false,
      loading: true,
    };
  },

  computed: {
    pagedTableData() {
      return this.tableData.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
  },

  methods: {
    setPage(val) {
      this.page = val;
    },

    changeCards() {
      this.smallCards = !this.smallCards;
    },

    toCardsView() {
      this.cardsView = !this.cardsView;
    },

    toTableView() {
      this.cardsView = !this.cardsView;
    },
  },
});
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  background: whitesmoke;
  border: 1px solid black;
  padding: 20px;
}

.el-pagination.is-background .el-pager li.is-active {
  background-color: white;
}

.card {
  background: linear-gradient(#18486b, #4f94c5);
  color: black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  max-width: 300px;
}

.card hr {
  width: 80%;
  color: #dcdfe6;
  margin-bottom: 10px;
}

.card img {
  width: 95%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.title {
  text-transform: uppercase;
  font-weight: bold;
  color: white;
}

.filters-wrapper {
  padding: 20px 0;
}

.info {
  max-width: 70%;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
  display: flex !important;
  justify-content: center !important;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.smallCards {
  width: 200px;
}

.smallCards img {
  padding-bottom: 40px;
}

.hideInfo {
  display: none;
}
</style>
