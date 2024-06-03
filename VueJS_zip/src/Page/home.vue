<template>
  <div>
    <Top_side class="container"/>
    <div class="flex justify-end px-[10%] w-screen">
      <Menu />
    </div>
    <div class="
    container md:flex w-screen md:gap-[50px]">
      <Category class="md:w-[calc(100%/4+5%)] w-full" />
      <Flowers />
    </div>

    <Pagination />
    <Info />
    <Blogs class="container" />
    <router-link to="/"></router-link>
  </div>
</template>

<script setup>
import Blogs from "../components/Blogs.vue";
import Flowers from "../components/Flowers.vue";
import Info from "../components/Info.vue";
import Menu from "../components/Menu.vue";
import Top_side from "../components/Top_side.vue";
import Category from "../components/category.vue";
import Pagination from "../components/pagination.vue";
</script>

<style lang="scss" scoped></style>
