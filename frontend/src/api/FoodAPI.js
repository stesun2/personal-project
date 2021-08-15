const BASE_URL = 'http://localhost:8000'

const getTokenInit = (token) => {
  return {
      headers: {
        'Content-Type': 'application/json',
        "authorization": `JWT ${token}`
      }
  }
}

const tryCatchFetch = async (url, init) => {
  try {
    let request = await fetch(url, init)
    let data = await request.json()
    return data
  }
  catch (error) {
    console.error(":ERR:",error)
    return null
  }
}

const doLogin = async (credentials) => {
  let url = `${BASE_URL}/login/`
  let init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }
  return tryCatchFetch(url, init)
}

const getFoodListById = async (foodListId, token) => {
  let url = `${BASE_URL}/food/food-list/${foodListId}/`
  return await tryCatchFetch(url, getTokenInit(token))
}

const myExport = {
  getFoodListById,
  doLogin
}

export default myExport