<template>
    <div class="card">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
</template>

<script>
import CarsView from '../views/CarsView.vue'
import FriendsView from '../views/FriendsView.vue'
import ConsolesView from '../views/ConsolesView.vue'

export default {
    name: "CardComp",
  components: {
    CarsView,
    FriendsView,
    ConsolesView
  }
};

</script>

<style scoped>
</style>