<template>
  <div class="app-px-1 app-py-1 app-bg-color-cornflowerblue">
    <ul class="app-d-flex app-mx-n1">
      <li class="app-d-flex app-px-1"
        v-for="( item, index ) of list"
        v-bind:key="index"
      >
        <NuxtLink
          v-bind:to="item.path"
        >
          <span>{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import authorization from '@/store/authorization'

  const list = computed( () => {
    const result = [ { path: '/', title: 'Главная' } ]
    if ( authorization.value === null ) return result
    if ( authorization.value ) result.push( { path: '/profile', title: 'Профиль' } )
    else result.push( { path: '/authorization', title: 'Авторизация' } )
    return result
  } )
</script>