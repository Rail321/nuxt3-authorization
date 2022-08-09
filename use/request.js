const use = ( sourceRequest, initialValue = null ) => {
  const result = ref( initialValue )
  const ready = ref( false )
  const loading = ref( false )

  const request = async () => {
    loading.value = true
    const response = await sourceRequest()
    result.value = response
    loading.value = false
    ready.value = true
    return response
  }

  return { result, ready, loading, request }
}

export default use