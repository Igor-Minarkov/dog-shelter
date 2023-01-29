<template>
  <div class="wrapper">
    <div class="flex flex-wrap items-center">
      <el-select v-model="breed" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="breed in breeds"
          :key="breed"
          :label="breed"
          :value="breed"
          @click="selectBreed(breed)"
        />
      </el-select>
    </div>
    <el-carousel indicator-position="none" height="650px">
      <el-carousel-item v-for="dogInfo in dataView" :key="dogInfo.id">
        <span class="general-info">
          <img :src="dogInfo.img" />
          <br />
          <h3>{{ dogInfo.breed }}</h3>
        </span>
        <span class="description">
          <h4>{{ dogInfo.name }}</h4>
          <p>{{ dogInfo.desc }}</p>
          <span v-if="isAdmin" class="admin-link">
            <router-link :to="`/timeline/${dogInfo.id}`"
              >View the timeline for {{ dogInfo.name }}</router-link
            >
          </span>
        </span>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dogsData from "../assets/doglist.json";
import { DogInfo } from "../types/types";
import { admin } from "../stores/admin";

export default defineComponent({
  name: "BreedsComponent",

  created() {
    this.dataView = dogsData;

    let filtered = this.dataView
      .filter((dog: DogInfo) => dog.breed)
      .map((dog: DogInfo) => {
        return dog.breed;
      });

    this.breeds = filtered.filter((breed: string, index) => {
      return filtered.indexOf(breed) === index;
    });
  },

  data() {
    return {
      dataView: [],
      breeds: [],
      breed: "All breeds",
    };
  },

  computed: {
    isAdmin() {
      return admin.value.isAdmin;
    },
  },

  methods: {
    selectBreed(breed: string) {
      this.breed = breed;

      this.filteredData = dogsData.filter(
        (dog: DogInfo) => dog.breed === breed
      );
      this.dataView = this.filteredData;
    },
  },
});
</script>

<style scoped>
.wrapper {
  margin: 20px auto;
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.el-carousel {
  background: white;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
}

.general-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.general-info img {
  width: 50%;
}

.description {
  margin: 10px auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.description p {
  text-align: justify;
}

h4 {
  margin: 0;
}

.admin-link a {
  color: blue;
}

@media only screen and (max-width: 600px) {
  .general-info img {
    width: 95%;
  }

  .description p {
    text-align: center;
  }

  .el-carousel__item {
    height: 750px;
  }
}
</style>
