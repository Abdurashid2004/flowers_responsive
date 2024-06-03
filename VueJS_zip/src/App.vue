<script setup>
import Header from "./components/Header.vue";
import Top_side from "./components/Top_side.vue";
import Category from "./components/category.vue";
import Menu from "./components/Menu.vue";
import Flowers from "./components/Flowers.vue";
import Pagination from "./components/pagination.vue";
import Info from "./components/Info.vue";
import Blogs from "./components/Blogs.vue";
import Email from "./components/Email.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-wrap justify-center container">
    <Header class="bg-green-100" />
    <RouterView />
    <Email />
    <Contact />
    <Footer />
  </div>
</template>
