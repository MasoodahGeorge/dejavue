<template>
  <div class="FriendsView">
    <div>
      <div v-for="friend in friends" :key="friend.id" class="card" :class="{
          'male-border': friend.gender === 'male',
          'female-border': friend.gender === 'female',
        }">
        <div class="card-header">
          {{ friend.name }}
        </div>
        <div class="card-body">
          <p><strong>ContactDetails:</strong> {{ friend.contactDetails }}</p>
          <p><strong>Email:</strong> {{ friend.email }}</p>
          <p><strong>Profile:</strong> {{ friend.profile }}</p>
        </div>
      </div>
    </div>
    <div >
      <!-- <p>No friends to display.</p> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ['friends']
};
</script>

<style scoped>
.FriendsView {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  border: 2px solid transparent;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 100vh;
  height: 150px;
}
.card-header {
  /* background-color: #686868; */
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: bold;
}
.card-body {
  padding: 10px;
}
.male-border {
  border-color: rgb(0, 4, 255);
  background-color: rgb(184, 186, 255);
}

.male-border:hover{
  background-color: #91a3fe;
  cursor: pointer;
}

.female-border {
  border-color: rgb(251, 0, 255);
  background-color: rgb(255, 221, 249);
}

.female-border:hover{
  background-color: rgb(255, 192, 243);;
  cursor: pointer;
}
</style>