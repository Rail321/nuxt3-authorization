import authorization from '@/store/authorization'

export default () => {
  onMounted( () => {
    const item = localStorage.getItem( 'authorization' )
    const data = JSON.parse( item )
    authorization.value = data || false
  } )
}