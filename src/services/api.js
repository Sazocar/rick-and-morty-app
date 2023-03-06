const baseUrl = 'https://rickandmortyapi.com/api/character/'

export const urlFetch = async (id) => {
  const response = await fetch(`${baseUrl}${id}`, {
    method: 'GET',
  })
  const payload = response.json()
  return payload
}

