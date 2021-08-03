import Cookies from 'js-cookie'


export const cookiseSet = function ({ key, value, expires }) { Cookies.set(`${key}`, `${value}`, { expires: expires }) }


export const cookiesGet = function ({ key }) { return Cookies.get(`${key}`) }


export const cookiesRemove = function ({ key }) { return Cookies.remove(`${key}`, { path: '/' }) }