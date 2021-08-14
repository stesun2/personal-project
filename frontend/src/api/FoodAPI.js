const BASE_URL = 'http://localhost:8000'

const tryCatchFetch = async (url, init) => {
  try {
    let request = await fetch(url, init)
    let data = await request.json()
    return data

    // if (response.ok) {
    //   console.log("status", response.status)
    //   if (response.status !== 204) { // 204 doesn't have a message body
    //     let data = await response.json()
    //     return data
    //   }
    //   else {
    //     return { "success": true }
    //   }
    // }
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
  try {
    let url = `${BASE_URL}food/food-list/${foodListId}/`
    let init = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `JWT ${token}`
      },
    }
    console.log('URL:', url)
    let request = await fetch(url)
    let data = await request.json()
    return data
  }
  catch(error) {
    console.error(error)
    return null
  }
}
const myExport = {
  getFoodListById,
  doLogin
}

export default myExport