import { ref } from "vue";

export const admin = ref({
  isAdmin: false,
  role: "User",

  setIsOpened(val) {
    this.isAdmin = val;

    if (val === true) {
      localStorage.setItem("role", "Admin");
      this.role = "Admin";
    } else {
      localStorage.setItem("role", "User");
      this.role = "User";
    }
  },
});
