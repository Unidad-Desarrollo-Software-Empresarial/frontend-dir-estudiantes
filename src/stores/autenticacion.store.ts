import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { RolInterface } from '@/modules/auth/interfaces/rol.interface'
import type { UserInterface } from '@/modules/auth/interfaces/user.interface'

export const useAutenticacionStore = defineStore('auth', () => {
  const token = ref<string | null>()
  const rol = ref<RolInterface | null>()
  const user = ref<UserInterface | null>()
  const isLogged = ref<boolean>(false)

  const onLoginStore = (tokenP: string, rolP: RolInterface, userP: UserInterface) => {
    isLogged.value = true
    token.value = tokenP
    rol.value = rolP
    user.value = userP
  }

  const onLogoutStore = () => {
    isLogged.value = false
    token.value = null
    rol.value = null
    user.value = null
  }

  return {

    // Store
    token, rol, user, isLogged,

    // Actions
    onLoginStore,
    onLogoutStore
  }
}, {
  persist: {
    key: 'credito-interno'
  }
})
