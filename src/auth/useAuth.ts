import { supabase } from '@/infrastructure/database'
import { useAuthStore } from '@/infrastructure/state'
import { useEffect } from 'react'

export const useAuth = (): void => {
  const { setUser } = useAuthStore()

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data }) => data.session?.user)
      .then((user) => {
        setUser(user)
      })
      .catch((error) => {
        throw error
      })

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user)
      }
    )

    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [setUser])
}
