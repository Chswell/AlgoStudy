import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface LearningProgressState {
	completedTopics: string[]
	toggleTopic: (topicUrl: string) => void
	isTopicCompleted: (topicUrl: string) => boolean
	markAsCompleted: (topicUrl: string) => void
	markAsIncomplete: (topicUrl: string) => void
}

const STORAGE_KEY = 'learning-progress'

export const useLearningProgressStore = create<LearningProgressState>()(
	persist(
		(set, get) => ({
			completedTopics: [],
			toggleTopic: (topicUrl: string) => {
				set((state) => {
					const topics = [...state.completedTopics]
					const index = topics.indexOf(topicUrl)
					if (index > -1) {
						topics.splice(index, 1)
					} else {
						topics.push(topicUrl)
					}
					return { completedTopics: topics }
				})
			},
			isTopicCompleted: (topicUrl: string) => {
				return get().completedTopics.includes(topicUrl)
			},
			markAsCompleted: (topicUrl: string) => {
				set((state) => {
					if (!state.completedTopics.includes(topicUrl)) {
						return { completedTopics: [...state.completedTopics, topicUrl] }
					}
					return state
				})
			},
			markAsIncomplete: (topicUrl: string) => {
				set((state) => {
					return {
						completedTopics: state.completedTopics.filter((url) => url !== topicUrl)
					}
				})
			}
		}),
		{
			name: STORAGE_KEY,
			storage: createJSONStorage(() => localStorage)
		}
	)
)

