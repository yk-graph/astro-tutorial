import type { User } from '../types/user'

export async function fetchUser(): Promise<User> {
  return await fetch('https://randomuser.me/api/')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then((data) => {
      const user = data.results[0] as User
      return user
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error('An unknown error occurred while fetching user data.')
    })
}
