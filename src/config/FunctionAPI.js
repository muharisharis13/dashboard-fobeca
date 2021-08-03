import { baseApi } from './BaseAPI'
import { cookiesGet, cookiesRemove, cookiseSet } from './Cookies'
import { MethodGet, MethodPost } from './Method'

const token = cookiesGet({ key: 'token' })

export const MakePost = async (url, data) => {
  return await fetch(
    `${baseApi}${url}`,
    MethodPost(token, data)
  )
    .then(res => res.json())
    .catch(e => {
      console.error('err : ', e)
    })
}

export const MakeGet = async function ({ url }) {
  return await fetch(
    `${baseApi}${url}`,
    MethodGet({ token: token })
  )
    .then(res => res.json())
    .catch(e => {
      console.error('err : ', e)
    })
}

export const MakeGetomney = async function ({ url }) {
  return await fetch(
    `${baseApi}${url}`,
    MethodGet({ token: token })
  )
    .then(res => res.json())
    .catch(e => {
      console.error('err : ', e)
    })
}

export const RenewToken = async function () {

  const data = {
    email: cookiesGet({ key: 'email' }),
    refreshToken: cookiesGet({ key: 'app_token' })
  }

  return await fetch(
    `${baseApi}/renewToken`,
    MethodPost('', data)
  )
    .then(res => res.json())
    .then(res => {
      console.log(res)
      cookiseSet({ key: 'token', value: res.token, expires: Infinity })
      window.location.reload(false)
    })
    .catch(e => {
      console.error('err : ', e)
    })
}