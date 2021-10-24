const vm = Vue.createApp({
  data() {
    return {
      firstName: "Mateus",
      lastName: "Costa",
      url: "https://google.com",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Matheus";
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: "Matheus",
//       lastName: "Costa",
//     };
//   },
// }).mount("#app2");
