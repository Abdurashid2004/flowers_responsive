<template>
  <div class="container md:flex">
    <div v-for="item in 2" :key="item" class="md:flex">
      <img src="../../public/info_flower.svg" alt="img" class="md:m-0 mx-auto" />
      <div class="flex flex-wrap items-center md:justify-end justify-start px-[1%] py-[5%]">
        <h3 class="mx-auto text-2xl font-medium ">Lorem, ipsum dolor.</h3>
        <p class="text-[#999]  mx-auto text-center px-3 w-[350px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic earum at
          perferendis! Beatae, ducimus veritatis?
        </p>
        <button class="md:mr-12 mt-[10px] px-7 py-2 bg-green-600 rounded-md text-white font-semibold">Find more -></button>
      </div>
    </div>
  </div>
</template>
