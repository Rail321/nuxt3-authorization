<template>
  <div>
    <NuxtLayout>
      <div
        v-if="authorization === null"
      >
        <p>Загрузка...</p>
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
  import useAuthorization from '@/use/authorization'

  useAuthorization()

  const router = useRouter()

  const onClickLogout = () => {
    authorization.value = false
    localStorage.setItem( 'authorization', false )
    router.push( '/authorization' )
  }
</script>