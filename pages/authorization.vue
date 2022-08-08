<template>
  <div>
    <NuxtLayout>
      <div
        v-if="authorization === null"
      >
        <p>Загрузка...</p>
      </div>
      
      <div
        v-else-if="authorization"
      >
        <p>
          <span>Вы авторизованы. </span>
          <NuxtLink to="/profile">
            <span>Перейдити на страницу вашего профиля.</span>
          </NuxtLink>
        </p>
      </div>
      
      <div
        v-else
      >
        <h1>Авторизация</h1>

        <button type="button"
          v-on:click="onClickLogin"
        >
          <span>Войти</span>
        </button>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
  import authorization from '@/store/authorization'
  import useAuthorization from '@/use/authorization'

  useAuthorization()

  const router = useRouter()

  const onClickLogin = () => {
    authorization.value = true
    localStorage.setItem( 'authorization', true )
    router.push( '/profile' )
  }
</script>