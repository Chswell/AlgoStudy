import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type CodeLanguage = 'js' | 'py' | 'cpp' | 'java'

interface CodeLanguageState {
	language: CodeLanguage
	setLanguage: (language: CodeLanguage) => void
}

const STORAGE_KEY = 'code-language-preference'

export const useCodeLanguageStore = create<CodeLanguageState>()(
	persist(
		(set) => ({
			language: 'js', // значение по умолчанию
			setLanguage: (language) => set({ language })
		}),
		{
			name: STORAGE_KEY,
			storage: createJSONStorage(() => localStorage)
		}
	)
)

