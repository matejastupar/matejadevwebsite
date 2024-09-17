<template>
  <div :style="{ 'width': props.containerwidth + 'vw'}" style="height:100vh" class="pagecontainer" data-scroll-section>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  containerwidth: {type: String, default: 50, required: false}
});
</script>

<style scoped>
.pagecontainer {
  display: flex;
  align-items: center;
  margin-left: 4rem;
}

.pagecontainer > * {
  margin-right: 2rem;
}
</style>