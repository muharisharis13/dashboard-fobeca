import { baseApiWareHouse, secret } from './BaseAPI'
import { cookiesGet, cookiesRemove, cookiseSet } from './Cookies'
import { MethodDelete, MethodGet, MethodPatch, MethodPost, MethodPostWithImage } from './Method'


export const MakeGet = async ({ url }) => {
  return await fetch(
    `${baseApiWareHouse}${url}`,
    MethodGet({
      secret: secret,
    })
  )
    .then(res => res.json())
    .catch(e => {
      console.error(`err : ${e}`)
    })
}

export const MakeGetimage = async ({ url }) => {
  return await fetch(
    `${baseApiWareHouse}${url}`,
    { headers: { 'secret': `${secret}` } }
  )
    .then(res => res.blob())
    .catch(e => {
      console.error(`err : ${e}`)
    })
}

export const MakePost = async ({ url, data }) => {
  return await fetch(
    `${baseApiWareHouse}${url}`,
    MethodPost('', data, secret)
  )
    .then(res => res.json())
    .catch(e => {
      console.error(`err : ${e}`)
    })
}

export const MakePostWithImage = async ({ url, data }) => {
  return await fetch(
    `${baseApiWareHouse}${url}`,
    MethodPostWithImage({ secret: secret, data: data })
  )
    .then(res => res.json())
    .catch(e => {
      console.error(`err : ${e}`)
    })
}


export const MakeDelete = async ({ url }) => {
  return await fetch(
    `${baseApiWareHouse}${url}`,
    MethodDelete({ secret: secret })
  )
    .then(res => res.json())
    .catch(e => {
      console.error(`err : ${e}`)
    })
}

export const MakePatch = async ({ url, data }) => {
  return await fetch(
    `${baseApiWareHouse}${url}`,
    MethodPatch({ secret: secret, data: data })
  )
    .then(res => res.json())
    .catch(e => {
      console.error(`err : ${e}`)
    })
}