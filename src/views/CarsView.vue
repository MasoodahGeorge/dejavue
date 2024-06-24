<template>
    <div class="cars">
        <CardComp v-for="car in cars" :key="car.id">
      <template v-slot:title>
        <h3>{{ car.make }} {{ car.model }}</h3>
      </template>
      <template v-slot:content>
        <p>Year: {{ car.year }}</p>
        <p>Price: {{ car.price }}</p>
      </template>
    </CardComp>
    </div>
  </template>

  
<script>
import CardComp from '@/components/CardComp.vue';

export default {
  name: "CarsView",
  components: { CardComp },
  data() {
    return {
      cars: [
        { id: 1, make: "Toyota", model: "Camry", year: 2020, price: "$24,000" },
        { id: 2, make: "Honda", model: "Accord", year: 2019, price: "$22,000" },
      ]
    };
  }
};
</script>

<style scoped>
    
    
</style>