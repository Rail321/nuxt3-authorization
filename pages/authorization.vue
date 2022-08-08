<template>
  <div>
    <NuxtLayout>
      <div class="app-flex-grow-1 app-d-flex app-justify-content-center app-align-items-center"
        v-if="!( authorizationReady )"
      >
        <AppLoader />
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
  import authorizationReady from '@/store/authorizationReady'
  import useAuthorization from '@/use/authorization'

  useAuthorization()

  const router = useRouter()

  const onClickLogin = async () => {
    await router.push( '/profile' )
    authorization.value = true
    localStorage.setItem( 'authorization', true )
  }
</script>