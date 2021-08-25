import router from '../router'
import { defineStore } from 'pinia'
import { store } from './index'
import { getToken, setToken } from '../utils/storage'
import { login as _login, getInfo as _getInfo } from '/src/api/user'
import asyncRoutes from '../router/asyncRoutes'
import constantRoutes from '../router/constantRoutes'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    addRoutes: [],
  }),
  getters: {
    hasUserInfo: (state) => state.roles && state.roles.length > 0,
  },
  actions: {
    async login({ username, password }) {
      console.log('login...', username, password)
      const res = await _login({ username, password })
      this.token = res.data.token
      this.roles.push(...res.data.roles)
      this.name = res.data.name || 'Yuan'
      this.addRoutes = this.generateRoutes()
      setToken(res.data.token)
    },

    async getUserInfo() {
      console.log('fetchInfo')
      const res = await _getInfo()
      this.roles.push(...res.data.roles)
      this.addRoutes = this.generateRoutes()
    },

    generateRoutes() {
      const accessedRoutes = this.roles.includes('admin')
        ? asyncRoutes || [] // 是最高权限的admin则直接加入所有异步路由
        : filterAsyncRoutes(asyncRoutes, this.roles)

      // 将动态生成的可以访问路由加入 vue-router 中
      accessedRoutes.forEach((route) => router.addRoute(route))
      // 记录所有路由，它与router.getRoutes有所不同！
      return constantRoutes.concat(accessedRoutes)
    },
  },
})

export function useAppStoreWithOut() {
  return useUserStore(store)
}

/**
 * 递归的根据已登录用户的roles来过滤异步路由表来生成专属的路由表
 * @author PanJiaChen
 * @param routes asyncRoutes
 * @param roles 用户所有的角色数组
 */
function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach((route) => {
    // 防止对象被修改
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) tmp.children = filterAsyncRoutes(tmp.children, roles)
      res.push(tmp)
    }
  })

  return res
}

function hasPermission(roles, route) {
  return route.meta && route.meta.roles
    ? roles.some((role) => route.meta.roles.includes(role))
    : true // 当某个路由record没有设置roles属性则默认所有都可以访问，所以返回true
}
