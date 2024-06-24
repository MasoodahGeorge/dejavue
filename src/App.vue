<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/consoles">Consoles</router-link> |
    <router-link to="/friends">Friends</router-link> |
    <router-link to="/cars">Cars</router-link>
  </nav>
  <router-view/>
  <div id="app">
    <nav>
      <router-link to="/friends">Friends</router-link>
      <router-link to="/cars">Cars</router-link>
      <router-link to="/consoles">Consoles</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import FriendsView from '@/views/FriendsView.vue';
import CarsView from '@/views/CarsView.vue';
import ConsolesView from '@/views/ConsolesView.vue';

export default {
  name: 'App',
  components: {
    FriendsView,
    CarsView,
    ConsolesView
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
</style>


<!-- <template>
  <div id="app">
    <nav>
      <router-link to="/friends">Friends</router-link>
      <router-link to="/cars">Cars</router-link>
      <router-link to="/consoles">Consoles</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import FriendsView from '@/views/FriendsView.vue';
import CarsView from '@/views/CarsView.vue';
import ConsolesView from '@/views/ConsolesView.vue';

export default {
  name: 'App',
  components: {
    FriendsView,
    CarsView,
    ConsolesView
  }
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 1em;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5em;
}

nav a.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style> -->
