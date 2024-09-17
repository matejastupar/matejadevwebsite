<template>
  <Transition name="animation">
    <div v-show="showPageTransition" class="z-[99] w-screen h-screen absolute inset-0">
      <div class="bg-monoa-950 w-full h-full flex justify-center items-center overflow-clip">
        <p class="textanimation text-4xl text-white font-playwrite font-[400] italic absolute top-5 left-5">mateja.dev</p>
        <div class="circleanimation w-[20vh] h-[20vh] shrink-0 grow-0 rounded-full outline outline-lavanda-500 outline-2 absolute top-[12vh] -right-[38vh]" />
        <div class="circleanimation w-[20vh] h-[20vh] shrink-0 grow-0 rounded-full outline outline-lavanda-500 outline-2 absolute top-[17vh] -right-[33vh]" />
        <div class="circleanimation w-[20vh] h-[20vh] shrink-0 grow-0 rounded-full outline outline-minta-500 outline-2 absolute -right-[36vh]" />
        <div class="circleanimation w-[20vh] h-[20vh] shrink-0 grow-0 rounded-full outline outline-lavanda-500 outline-2 absolute bottom-[32vh] -right-[35vh]" />
        <div class="circleanimation w-[20vh] h-[20vh] shrink-0 grow-0 rounded-full outline outline-lavanda-500 outline-2 absolute bottom-[15vh] -right-[38vh]" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const showPageTransition = ref(false);
const DELAY_ROUTING = 500;
const TRANSITION_DURATION = 1500;
const circleanimationRef = ref();
const textanimationRef = ref();


useRouter().beforeEach((to, from, next) => {
  document.body.style.overflow = 'hidden';

  if (showPageTransition.value) {
    return next();
  };

  showPageTransition.value = true;

  circleanimationRef.value = useAnime({
    targets: '.circleanimation',
    delay: useAnime.stagger(150, {easing: 'easeInSine'}),
    translateX: [0, '-20vw'],
    scale:[0, useAnime.stagger([4,16])],
    duration: 1200,
    easing: 'easeInOutCirc'
  });
  textanimationRef.value = useAnime({
    targets: '.textanimation',
    delay: 400,
    opacity:[0, 1],
    duration: 1200,
    easing: 'easeOutCirc'
  });

  setTimeout(() => {
    next();
  }, DELAY_ROUTING);
});

watch(showPageTransition, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      showPageTransition.value = false;
    }, TRANSITION_DURATION);
  };
});

useRouter().afterEach(() => {
  setTimeout(() => {
    document.body.style.overflow = '';
    circleanimationRef.value.restart();
  }, TRANSITION_DURATION);
});
</script>



<style>
.animation-enter-active,
.animation-leave-active {
  transition: transform 0.3s ease-in-out;
}

.animation-enter-from,
.animation-leave-to {
  transform: translateX(100%);
}

.animation-enter-to,
.animation-leave-from {
  transform: translateY(0%);
}
</style>