<template>
  <div class="cars">
    <h1>Cars</h1>
    <div v-for="car in cars" :key="car.model" class="car">
      <h5>Make: {{ car.make }}</h5>
      <h5>Model: {{ car.model }}</h5>
      <h5>Year: {{ car.year }}</h5>
      <h5>Color: {{ car.color }}</h5>
      <h5>Price: {{ car.price }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        { make: "Toyota", model: "Camry", year: 2022, color: "Silver", price: 25000 },
        { make: "Honda", model: "Civic", year: 2023, color: "Blue", price: 22000 },
        { make: "Ford", model: "Mustang", year: 2021, color: "Red", price: 35000 },
        { make: "Chevrolet", model: "Malibu", year: 2022, color: "Black", price: 27000 },
        { make: "Nissan", model: "Altima", year: 2023, color: "White", price: 24000 },
        { make: "BMW", model: "3 Series", year: 2022, color: "Gray", price: 40000 },
        { make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Silver", price: 45000 },
        { make: "Audi", model: "A4", year: 2021, color: "Black", price: 38000 },
        { make: "Hyundai", model: "Sonata", year: 2022, color: "Blue", price: 26000 },
        { make: "Kia", model: "Optima", year: 2023, color: "Red", price: 23000 },
      ],
    };
  },
};
</script>

<style>
.cars {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.car {
  margin-bottom: 20px;
  background-color: #e4bbff;
  border: 1px solid #c772ff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.car:hover{
  background-color: #d79bff;
  cursor: pointer;
}

.car h5 {
  margin: 5px 0;
}
</style>
