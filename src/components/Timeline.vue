<template>
  <h1>{{ dogInfo.name }}</h1>
  <p>Timeline</p>
  <el-timeline>
    <el-timeline-item timestamp="Registration" placement="top">
      <el-card>
        <h4>{{ dogInfo.registration }}</h4>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="Vaccination status" placement="top">
      <el-card>
        <h4>{{ dogInfo.vaccination_status }}</h4>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="Last timeline activity" placement="top">
      <el-card>
        <h4>{{ dogInfo.last_timeline_activity }}</h4>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { DogInfo } from "../types/types";
import dogsData from "../assets/doglist.json";

export default defineComponent({
  name: "TimelineComponent",

  data() {
    return {
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
    let id = this.$route.params.id;
    this.dogInfo = dogsData.find(
      (dogInfo: DogInfo) => dogInfo.id === parseInt(id)
    );
  },
});
</script>

<style scoped>
p {
  color: #909399;
}

h1 {
  text-align: center;
}
</style>
