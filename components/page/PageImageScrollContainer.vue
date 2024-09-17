<template>
  <div :id="containerid" :style="{ 'width': props.containerwidth + 'vw'}" style="height:100vh" class="pagecontainer" data-scroll-section>
    <div class="z-[-10] h-full w-96 overflow-hidden" data-scroll data-scroll-sticky :data-scroll-target=" '#' + containerid ">
      <NuxtImg class="z-[-10] h-full object-cover object-left opacity-25 grayscale brightness-50" data-scroll src="https://imgs.search.brave.com/s3hXeKipCVq3F3N_EMRQWKyxpucfoYgTDy-p5ZfWHY4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8x/MC8zMS8wNi8wOC9i/cml0aXNoLWNvbHVt/YmlhLTM3ODUyNTRf/NjQwLmpwZw" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  containerwidth: {type: String, default: 100, required: true}
});

const containerid = useId();
</script>

<style scoped>
.pagecontainer {
  display: flex;
  align-items: center;
}

.pagecontainer > * {
  margin-right: 2rem;
}
</style>