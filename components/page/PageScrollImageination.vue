<template>
  <div class="z-[-100] h-[110vh] w-[110vw] fixed top-[-5vh] left-[-5vw] overflow-hidden background">
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="gooification">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="gooification" />
          <feBlend in="SourceGraphic" in2="gooification" />
        </filter>
      </defs>
    </svg>
    <div class="ccontainer">
      <div class="c1"/>
      <div class="c2"/>
    </div>
  </div>
</template>

<style scoped>
.background {
  background: -o-radial-gradient(ellipse at 30% center, #161616, #080808);
  background: -moz-radial-gradient(ellipse at 30% center, #161616, #080808);
  background: -webkit-radial-gradient(ellipse at 30% center, #161616, #080808);
  background: radial-gradient(ellipse at 30% center, #161616, #080808);
}

svg {
  display: none;
}

.ccontainer {
  width: 100%;
  height: 100%;

  filter: url(#gooification) blur(100px);
}

.c1 {
  position: absolute;
  background: radial-gradient(circle at center, rgba(0,232,179, 0.4) 0, rgba(0,232,179, 0) 40%) no-repeat;
  mix-blend-mode: hard-light;

  width: 48rem;
  height: 48rem;
  top: calc(50% - 48rem / 2);
  left: calc(65% - 48rem / 2);

  opacity: 1;

  transform-origin: calc(50% - 90px);
  animation: moveInCircle 30s ease infinite;
}
.c2 {
  position: absolute;
  background: radial-gradient(circle at center, rgba(132,115,225, 0.6) 0, rgba(132,115,225, 0) 40%) no-repeat;
  mix-blend-mode: hard-light;

  width: 48rem;
  height: 48rem;
  top: calc(50% - 48rem / 2 + 60px);
  left: calc(70% - 48rem / 2 + 90px);

  opacity: 1;

  transform-origin: calc(50% - 60px);
  animation: moveInCircle 30s reverse infinite;
  animation-delay: 1600ms;
}


@keyframes moveInCircle {
  0% { transform: rotate(0deg);}
  50% { transform: rotate(180deg);}
  100% { transform: rotate(360deg);}
}
</style>