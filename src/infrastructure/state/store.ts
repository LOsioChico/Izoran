import { create } from 'zustand'

interface IPopularBannerStore {
  banner: string
  setBanner: (banner: string) => void
}

export const usePopularBannerStore = create<IPopularBannerStore>((set) => ({
  banner: '',
  setBanner: (banner) => {
    set({ banner })
  },
}))
