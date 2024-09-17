<template>
  <PageScrollImageination />
  <div
    v-locomotive="{
      direction: 'horizontal',
      scrollFromAnywhere: true,
    }"
    class="h-screen w-fit flex"
  >
    <PageContainer containerwidth="60">
      <NuxtLink to="/" data-scroll><UButton>to home</UButton></NuxtLink>
      <h1 data-scroll class="font-playwrite text-6xl">projects page</h1>
      <h3>this is the projects page test</h3>
    </PageContainer>
    <PageImageScrollContainer containerwidth="80">
      scrol1
    </PageImageScrollContainer>
    <PageImageScrollContainer containerwidth="80">
      scroll2
    </PageImageScrollContainer>
    <PageContainer containerwidth="100">
      page
    </PageContainer>
  </div>
</template>