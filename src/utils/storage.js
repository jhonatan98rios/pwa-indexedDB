import { set, get } from 'idb-keyval';

const key = 'temporary@storage'

export async function getData() {
  const json = await get(key)
  const data = json ? JSON.parse(json) : []
  return data
}

export async function setData(data) {



  if(data) {
    const json = JSON.stringify(data)

    try {
      await set(key, json)

    } catch (err) {
      throw Error('Dado inválido')

    } finally { 
      console.log('Done')
    }
  }
}

export async function insertRow(content) {
  if (content) {
    const data = await getData()
    return await setData([
      ...data,
      content
    ])
  } else {
    throw Error('Dado inválido')
  }
}

