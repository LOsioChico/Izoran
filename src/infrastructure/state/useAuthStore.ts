import { type User } from '@supabase/supabase-js'
import { create } from 'zustand'

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
  user: User | undefined
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

  user: undefined,
  setUser: (user) => {
    set({ user })
  },
}))
