import { supabase } from '@/infrastructure/database'
import { type Profile } from '../models'

export const useProfile = () => {
  const getProfile = async (id: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single<Profile>()

    if (error != null) {
      console.log(error)
    }

    return data
  }

  return {
    getProfile,
  }
}
