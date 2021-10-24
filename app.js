const vm = Vue.createApp({
  data() {
    return {
      firstName: "Mateus",
      middleName: "",
      lastName: "Costa",
      url: "https://google.com",
      raw_url: `<a href="https://google.com" target="_blank">Google</a>`,
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
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
