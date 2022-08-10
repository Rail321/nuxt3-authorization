<template>
  <div class="app-navigation">
    <div class="app-navigation__wrapper">
      <ul class="app-navigation__row ui-d-flex">
        <li class="app-navigation__col"
          v-for="( item, index ) of list"
          v-bind:key="index"
        >
          <NuxtLink class="ui-link_light"
            v-bind:to="item.path"
          >
            <span>{{ item.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  const list = ref( [
    { path: '/', title: 'Главная' },
    { path: '/authorization', title: 'Авторизация' },
    { path: '/profile', title: 'Профиль' }
  ] )
</script>

<style scoped>
  .app-navigation {
    background-color: #007FFF;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .app-navigation__wrapper {
    padding: 10px 15px;
  }
  .app-navigation__row {
    margin-left: -10px;
    margin-right: -10px;
  }
  .app-navigation__col {
    padding-left: 10px;
    padding-right: 10px;
  }
</style>