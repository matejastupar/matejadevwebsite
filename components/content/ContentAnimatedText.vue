<template>
  <slot id="wrapper" />
</template>

<style scoped>
#wrapper>g {
  stroke-dasharray: 4475;
  animation: 20s ease-in-out anima infinite alternate;
  -webkit-transition: fill-opacity 1s;
  transition: fill-opacity 1s;
}

@keyframes anima {
  0% {
    stroke-dashoffset: 4475;
    fill-opacity: 0;
  }
  50% {
    stroke-dashoffset: 0;
    fill-opacity: 0;
  }
  100% {
    stroke-dashoffset: 0;
    fill-opacity: 100;
  }
}
</style>