<template>
    <div class="friends">
        <div v-if="friends.length === 0" class="spinner">Loading...</div>
      <div v-else>
        <CardComp v-for="friend in friends" :key="friend.id" :style="{ borderColor: friend.gender === 'male' ? 'gold' : 'green' }">
          <template v-slot:title>
            <h3>{{ friend.name }}</h3>
          </template>
          <template v-slot:content>
            <p>{{ friend.contact }}</p>
          </template>
        </CardComp>
      </div>
    </div>
  </template>

<script>
  import CardComp from '@/components/CardComp.vue';
  
  export default {
    name: "FriendsView",
    components: { CardComp },
    data() {
      return {
        friends: []
      };
    },
    mounted() {
      setTimeout(() => {
        this.friends = [
          { id: 1, name: "Caleb", gender: "male", contact: "1234567890" },
          { id: 2, name: "Naz", gender: "female", contact: "1234567890" },
        ];
      }, 2000);
    }
  };
</script>

<style scoped>

</style>
