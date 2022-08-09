import useRequest from '@/use/request'

const simulateRequest = () => {
  return new Promise( resolve => {
    setTimeout( () => {
      resolve( true )
    }, 1000 )
  } )
}

const sourceRequest = async () => await simulateRequest()

const { result, ready, loading, request } = useRequest( sourceRequest, {} )

// console.log( result.value )
// console.log( ready.value )
// console.log( loading.value )

// request()
//   .then( response => {
//     console.log( result.value )
//     console.log( ready.value )
//     console.log( loading.value )
//     console.log( response )
//   } )