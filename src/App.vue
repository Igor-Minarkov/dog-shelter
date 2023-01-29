<template>
  <nav-bar></nav-bar>
  <div class="page-wrapper">
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",

  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  min-height: 100%;
  position: relative;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: whitesmoke;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.page-wrapper {
  width: 70%;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

.el-select .el-input.is-focus .el-input__wrapper {
  border: 0.5px solid #18486b;
  box-shadow: 0 0 0 1px #18486b !important;
}

.el-select .el-input__wrapper.is-focus {
  box-shadow: none !important;
}

.el-select-dropdown__item.selected {
  color: #18486b;
}

.el-pagination.is-background .el-pager li.is-active {
  background-color: #18486b;
  color: white;
}

.el-switch.is-checked .el-switch__core {
  background-color: #18486b;
}

.el-switch__label {
  color: grey !important;
}

.el-switch__label.is-active {
  color: #18486b !important;
}

.el-loading-mask {
  background: whitesmoke;
}

@media only screen and (max-width: 600px) {
  .page-wrapper {
    width: 90%;
    padding: 20px 0px;
  }
}
</style>
