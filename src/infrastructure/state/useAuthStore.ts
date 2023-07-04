import { type User } from '@supabase/supabase-js'
import { create } from 'zustand'
import { supabase } from '../database'

export enum AuthType {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  JOIN = 'JOIN',
  CLOSE = 'CLOSE',
}

interface AuthState {
  authType: AuthType
  setAuthType: (authType: AuthType) => void
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
  user: UserWithInfo | undefined | null
  setUser: (user: User | undefined) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  authType: AuthType.LOGIN,
  setAuthType: (authType) => {
    set({ authType, isModalOpen: authType !== AuthType.CLOSE })
  },

  isModalOpen: false,
  setIsModalOpen: (isModalOpen) => {
    set({ isModalOpen })
  },

  user: null,
  setUser: async (user) => {
    if (user === undefined || user === null) {
      set({ user })
      return
    }

    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user?.id)
      .single()

    set({
      user: {
        ...user,
        username: data?.username,
        avatar_url: data?.avatar_url,
      },
    })
  },
}))

interface UserWithInfo extends Partial<User> {
  username: string
  avatar_url: string
}
