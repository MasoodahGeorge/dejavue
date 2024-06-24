<template>
    <div class="consoles">
    <CardComp v-for="console in consoles" :key="console.id">
      <template v-slot:title>
        <h3>{{ console.name }}</h3>
      </template>
      <template v-slot:content>
        <p>Manufacturer: {{ console.manufacturer }}</p>
        <p>Price: {{ console.price }}</p>
      </template>
    </CardComp>
    </div>
  </template>

  
<script>
import CardComp from '@/components/CardComp.vue';

export default {
  name: "ConsolesView",
  components: { CardComp },
  data() {
    return {
      consoles: [
        { id: 1, name: "PlayStation 5", manufacturer: "Sony", price: "R499" },
        { id: 2, name: "Xbox Series X", manufacturer: "Microsoft", price: "R499" },
      ]
    };
  }
};
</script>

<style scoped>
    
</style>