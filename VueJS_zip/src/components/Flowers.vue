<script setup>
import { ref } from "vue";

const items = ref(["All Plants", "New Arrivals", "Sale"]);
</script>

<template>
  <div class="grid md:grid-cols-3 grid-cols-2">
    <div v-for="item in 9" class="md:px-1 md:py[30px] md:flex md:flex-wrap md:justify-center last:grid-cols-2">
      <img src="../../public/flower.svg" alt="flower" />
      <div class="block w-[100%] px-[15%]">
        <p>Barberton Daisy</p>
        <p>$119.00</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 12px;
  gap: 33px;
  position: relative;
}

p:first-child {
  margin-top: 31px;
  color: #3d3d3d;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
}

p:last-child {
  margin-top: 6px;
  color: #46a358;
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
}
</style>
