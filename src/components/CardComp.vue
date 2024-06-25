<template>
  <div id="app">
    <friendsView :friends="friendsView" />
  </div>
</template>
<script>
  import friendsView from "../views/FriendsView.vue";

  export default {
    name: "AppTwo",
    components: {
      friendsView,
    },
    data() {
      return {
        friendsView: [
          {
            id: 1,
            name: "Masoodah George",
            contactDetails: "021-234-7456",
            email: "Mgeorge@gmail.com",
            gender: "female",
            profile: "Mgeorge",
          },
          {
            id: 2,
            name: "Caleb Okkers",
            contactDetails: "987-654-3210",
            email: "calebO@gmail.com",
            gender: "male",
            profile: "calebO",
          },
          {
            id: 3,
            name: "Jordan Springveldt",
            contactDetails: "075-654-3280",
            email: "Jspringveldt@gmail.com",
            gender: "female",
            profile: "Jspringveldt",
          },
          {
            id: 4,
            name: "Nikilitha Kakaza",
            contactDetails: "072-894-3250",
            email: "Nkakaza@gmail.com",
            gender: "female",
            profile: "Nkakaza",
          },
          {
            id: 4,
            name: "Yolanda Matiwane",
            contactDetails: "082-898-1234",
            email: "Ymatiwane@gmail.com",
            gender: "female",
            profile: "YMatiwane",
          },
        ],
};
}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
#appTwo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>
