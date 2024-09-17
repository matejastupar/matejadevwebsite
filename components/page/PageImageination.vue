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
    background: radial-gradient(ellipse at center 40%, #161616, #080808);
}

.scrolltext {
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
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
  background: radial-gradient(circle at center, rgba(0,232,179, 0.3) 0, rgba(0,232,179, 0) 50%) no-repeat;
  mix-blend-mode: hard-light;

  width: 132rem;
  height: 48rem;
  top: calc(120% - 48rem / 2);
  left: calc(40% - 132rem / 2);

  opacity: 1;

  transform-origin: 50%;
  animation: moveHorizontal 30s ease-in-out infinite;
}
.c2 {
  position: absolute;
  background: radial-gradient(circle at center, rgba(132,115,225, 0.4) 0, rgba(132,115,225, 0) 50%) no-repeat;
  mix-blend-mode: hard-light;

  width: 132rem;
  height: 48rem;
  top: calc(120% - 48rem / 2);
  left: calc(60% - 132rem / 2);

  opacity: 1;

  transform-origin: 50%;
  animation: moveHorizontal 30s ease-in-out infinite;
  animation-delay: 9s;
}


@keyframes moveHorizontal {
  0% { transform: translateX(-30%) translateY(-4%);}
  50% { transform: translateX(30%) translateY(6%);}
  100% { transform: translateX(-30%) translateY(-4%);}
}
</style>