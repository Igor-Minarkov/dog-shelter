<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo menu"
    mode="horizontal"
  >
    <el-menu-item index="1">
      <router-link :to="`/`">Home</router-link></el-menu-item
    >
    <el-menu-item index="2">
      <router-link :to="`/breeds`">Breeds</router-link></el-menu-item
    >
  </el-menu>
  <div class="second-nav">
    <router-link :to="`/`">
      <img
        class="logo"
        src="data:image/png;base64,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"
        alt="logo"
      />
    </router-link>
    <span class="role-toggle" v-if="$route.name !== 'Timeline'">
      <h3>{{ admin.role }}</h3>
      <el-select
        v-model="admin.role"
        class="dropdown"
        placeholder="Roles"
        size="large"
      >
        <el-option value="User" @click="admin.setIsOpened(false)" />
        <el-option value="Admin" @click="admin.setIsOpened(true)" />
      </el-select>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { admin } from "../stores/admin";
const activeIndex = ref("1");
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  background: rgb(6, 6, 6);
  padding-left: 122px;
  border: none;
}

.logo {
  width: 100px;
  height: inherit;
}

.second-nav {
  display: flex;
  height: 95px;
  background: #18486b;
  border: none;
  justify-content: space-between;
  align-items: center;
}

.role-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
}

.dropdown {
  display: flex;
  align-items: center;
  width: 3px;
  height: 9px;
  margin-right: 70px;
}

.menu-items {
  display: flex;
  color: white;
}

.el-menu-item a {
  color: white;
  text-transform: uppercase;
}

.el-menu-item a:hover {
  color: black;
}

.el-menu-item.is-active a {
  color: black;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 3px solid #18486b;
  color: black;
  background: white;
}
</style>
