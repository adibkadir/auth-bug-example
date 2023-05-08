import { SvelteKitAuth } from "@auth/sveltekit"
import GoogleProvider from "@auth/core/providers/google"
import { GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      authorization: { params: { prompt: 'consent' } },
    }),
  ],


  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = false
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        // return false
        // Or you can return a URL to redirect to:
        return '/unauthorized'
      }
    }
  }
})
