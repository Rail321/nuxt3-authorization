<template>
  <div>
    <NuxtLayout>
      <h1>Главная</h1>
    </NuxtLayout>
  </div>
</template>

<script setup>
  import useAuthorization from '@/use/authorization'

  useAuthorization()
</script>