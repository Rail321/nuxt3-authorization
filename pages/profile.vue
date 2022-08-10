<template>
  <div>
    <NuxtLayout>
      <div class="app-flex-grow-1 app-d-flex app-justify-content-center app-align-items-center"
        v-if="!( authorizationReady )"
      >
        <AppLoader />
      </div>
      
      <div
        v-else-if="!( authorization )"
      >
        <p>
          <span>Вы не авторизованы. </span>
          <NuxtLink to="/authorization">
            <span>Перейдити на страницу авторизации.</span>
          </NuxtLink>
        </p>
      </div>
      
      <div
        v-else
      >
        <h1>Профиль</h1>

        <button type="button"
          v-on:click="onClickLogout"
        >
          <span>Выйти</span>
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

  const onClickLogout = async () => {
    await router.push( '/authorization' )
    authorization.value = false
    localStorage.setItem( 'authorization', false )
  }
</script>