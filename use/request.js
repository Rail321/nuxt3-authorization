const use = sourceRequest => {
  const ready = ref( false )
  const loading = ref( false )

  const request = async () => {
    loading.value = true
    const response = await sourceRequest()
    
    if ( !( ready.value ) ) ready.value = true
    loading.value = false
    return response
  }

  return { ready, loading, request }
}

export default use