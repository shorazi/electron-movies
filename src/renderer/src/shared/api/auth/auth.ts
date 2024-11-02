const api = import.meta.env.VITE_BASE_URL
export async function postData(url: string, { arg = {} }) {
  try {
    const response = await fetch(api + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(arg)
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
