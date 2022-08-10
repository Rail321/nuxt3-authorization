<template>
  <div>
    <NuxtLayout>
      <h1>Главная</h1>

      <!-- <div>
        <p>{{ ready ? 'Готово' : 'Не готово' }}</p>
        <div>
          <button type="button" v-bind:disabled="!( ready )" v-on:click="onClickRefetch">Перезапросить</button>
        </div>
      </div> -->
    </NuxtLayout>
  </div>
</template>

<script setup>
  import useAuthorization from '@/use/authorization'

  useAuthorization()
</script>

<!-- <script setup>
  import authorizationRequest from '@/store/authorizationRequest'

  const ready = ref( false )

  // authorizationRequest.value
  //   .then( () => ready.value = true )
  // setTimeout( () => {
  //   console.log( 'Timeout' )
  //   authorizationRequest.value
  //     .then( () => console.log( 'Repeat triggering' ) )
  // }, 1500 )
  // setInterval( () => authorizationRequest.value = new Promise( resolve => setTimeout( () => resolve(), 1000 ) ), 1500 )

  const fetchAuthorization = () => {
    ready.value = false
    authorizationRequest.value
      .then( () => ready.value = true )
  }
  watch( authorizationRequest, fetchAuthorization )
  const onClickRefetch = () => {
    authorizationRequest.value = new Promise( resolve => setTimeout( () => resolve(), 1000 ) )
  }
  fetchAuthorization()
</script> -->

<!-- <script setup>
  import requestAuthorization from '@/requests/authorization'
  import useRequest from '@/use/request'

  const { ready, loading, request } = useRequest( requestAuthorization )

  console.log( ready.value )
  console.log( loading.value )
  request()
    .then( response => {
      console.log( response )
      console.log( ready.value )
      console.log( loading.value )
    } )
</script> -->