<template>
    <div
        :id="containerid"
        :style="{ width: props.containerwidth + 'vw' }"
        style="height: 100vh"
        class="pagecontainer"
        data-scroll-section
    >
        <div
            class="z-[-10] h-full w-96 overflow-hidden scrollimage-enter select-none"
            data-scroll
            data-scroll-position="left"
            data-scroll-direction="horizontal"
            data-scroll-class="scrollimage"
            data-scroll-repeat="true"
            data-scroll-sticky
            :data-scroll-target="'#' + containerid"
        >
            <img
                class="z-[-10] h-full object-cover object-left"
                data-scroll
                :src="props.containerimage"
                alt="image.img"
            />
        </div>
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    containerwidth: { type: String, default: 100, required: false },
    containerimage: {
        type: String,
        default: "/imgs/laptop.jpg",
        required: false,
    },
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

.scrollimage {
    opacity: 25%;
    filter: brightness(50%) grayscale(100%);
}

.scrollimage-enter {
    transition:
        500ms opacity ease-in-out,
        250ms filter ease-in-out;
}
</style>
