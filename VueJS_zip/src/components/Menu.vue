<script setup>
import { ref } from "vue";

const items = ref(["All Plants", "New Arrivals", "Sale"]);
</script>

<template>
  <div class="container mb-8">
    <div class="ml-32">
      <a v-for="item in items" :key="item" href="" class="ml-[80px]">
        {{ item }}</a
      >
    </div>
    <div class="flex items-center gap-2">
      <p class="ml-[90px]">Short by: Default sorting</p>
      <span class="pt-1 cursor-pointer"
        ><svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6668 5.66663L8.00016 10.3333L3.3335 5.66663"
            stroke="#3D3D3D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 12px;
  display: flex;
  /* padding: 26px 0; */
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0;
}

.right {
  display: flex;
  gap: 37px;
  color: #3d3d3d;
  border: 3px solid transparent;
}

a {
  border-bottom: 3px solid transparent;
  transition: all 0.1s;
}

a:hover {
  font-size: 15px;
  color: #46a358;
  font-weight: 700;
  border-bottom: 3px solid #46a358;
}
</style>
