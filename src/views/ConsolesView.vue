<template>
  <div class="consoles">
    <h1>Console</h1>
    <div v-for="console in gaming_consoles" :key="console.name" class="console">
      <h5>Name: <br>{{ console.name }}</h5>
      <h5>Manufacturer: <br>{{ console.manufacturer }}</h5>
      <h5>Release Year: <br>{{ console.release_year }}</h5>
      <h5>Storage: <br>{{ console.storage }}</h5>
      <h5>Price: <br>{{ console.price }}</h5>
      <h5>Best Selling Game: <br>{{ console.best_selling_game }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gaming_consoles:[
        {   
          name: "PlayStation 5",
            manufacturer: "Sony",
            release_year: 2020,
            storage: "825GB SSD",
            price: 499,
            best_selling_game: "Spider-Man: Miles Morales"
        },
        {
            name: "Xbox Series X",
            manufacturer: "Microsoft",
            release_year: 2020,
            storage: "1TB SSD",
            price: 499,
            best_selling_game: "Halo Infinite"
        },
        {
            name: "Nintendo Switch",
            manufacturer: "Nintendo",
            release_year: 2017,
            storage: "32GB",
            price: 299,
            best_selling_game: "Mario Kart 8 Deluxe"
        },
        {
            name: "Steam Deck",
            manufacturer: "Valve",
            release_year: 2022,
            storage: "64GB eMMC",
            price: 399,
            best_selling_game: "Elden Ring"
        },
        {
            name: "PlayStation 4 Pro",
            manufacturer: "Sony",
            release_year: 2016,
            storage: "1TB HDD",
            price: 399,
            best_selling_game: "God of War (2018)"
        }
    ],
    };
  },
};
</script>

<style>
.consoles {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.console {
  margin-bottom: 20px;
  background-color: #e4bbff;
  border: 1px solid #c772ff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.console:hover{
  background-color: #d79bff;
  cursor: pointer;
}

.console h5 {
  margin: 5px 0;
}
</style>
