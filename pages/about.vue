<template>
  <PageScrollImageination />
  <div
    v-locomotive="{
      direction: 'horizontal',
      scrollFromAnywhere: true,
    }"
    class="h-screen w-fit flex"
  >
    <PageContainer containerwidth="70" class="text-white text-4xl border-r-4">
      <NuxtLink to="/" data-scroll><UButton>to home</UButton></NuxtLink>
      <h1 data-scroll class="font-playwrite">about page</h1>
      <h3>this is the about page test</h3>
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