import { supabase } from '@/infrastructure/database'

export const authService = {
  signUp: async ({ email, password }: SignUp) => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error != null) {
      throw error
    }
  },

  signIn: async ({ email, password }: SignIn) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error != null) {
      throw error
    }
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    if (error != null) {
      throw error
    }
  },
}

export interface SignUp {
  email: string
  password: string
}

export interface SignIn {
  email: string
  password: string
}
