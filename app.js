const vm = Vue.createApp({
  data() {
    return {
      firstName: "Mateus",
      lastName: "Costa",
      url: "https://google.com",
      raw_url: `<a href="https://google.com" target="_blank">Google</a>`,
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
