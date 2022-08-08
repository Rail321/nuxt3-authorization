import authorization from '@/store/authorization'
import authorizationReady from '@/store/authorizationReady'

export default () => {
  onMounted( () => {
    if ( authorizationReady.value ) return
    const item = localStorage.getItem( 'authorization' )
    const data = JSON.parse( item )
    authorization.value = data || false
    authorizationReady.value = true
  } )
}