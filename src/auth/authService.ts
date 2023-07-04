import { supabase } from '@/infrastructure/database'

export const authService = {
  signUp: async ({ email, password, username }: SignUp) => {
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username } },
    })
    if (signUpError != null) throw signUpError

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (signInError != null) throw signInError
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

  signInWithProvider: async (provider: 'google' | 'discord') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
    })
    if (error != null) {
      throw error
    }
  },

  forgotPassword: async ({ email }: { email: string }) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email)
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
  username: string
}

export interface SignIn {
  email: string
  password: string
}
