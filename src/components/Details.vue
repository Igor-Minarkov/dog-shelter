<template>
  <div class="wrapper">
    <span class="description">
      <img :src="dogInfo.img" />
      <h1>{{ dogInfo.name }}</h1>
      <br />
      <p>{{ dogInfo.desc }}</p>
    </span>
    <span class="info-left">
      <h3>General information</h3>
      <p>Breed: {{ dogInfo.breed }}</p>
      <p>Birth date: {{ dogInfo.birth_date }}</p>
      <p>Last timeline activity: {{ dogInfo.last_timeline_activity }}</p>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dogsData from "../assets/doglist.json";
import { DogInfo } from "../types/types";

export default defineComponent({
  name: "DetailsComponent",

  data() {
    return {
      post: "",
      id: null,
      dogsData,
      dogInfo: {
        id: null,
        name: "",
        img: "",
        breed: "",
        registration: "",
        vaccination_status: "",
        birth_date: "",
        last_timeline_activity: "",
        desc: "",
      },
    };
  },

  created() {
    this.id = this.$route.params.id;
    this.dogInfo = this.dogsData.find(
      (dogInfo: DogInfo) => dogInfo.id === parseInt(this.id)
    );
  },
});
</script>

<style scoped>
.wrapper {
  margin: 20px auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 30px;
  border-radius: 4px;
  margin-bottom: 30px;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description img {
  width: 50%;
}

@media only screen and (max-width: 600px) {
  .description img {
    width: 95%;
  }
}
</style>
