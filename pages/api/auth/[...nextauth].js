import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { SanityAdapter } from "next-auth-sanity";
import { sanityClient } from "../../../sanity";

export const authOptions = {
  // Configure one or more authentication providers
  
providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  
  session: {
    strategy: "jwt",
  },

  secret: process.env.JWT_SECRET,

adapter: SanityAdapter(sanityClient),

}

export default NextAuth(authOptions)