import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import { SanityAdapter } from "next-auth-sanity";
import { sanityClient } from "../../../sanity";

export const authOptions = {
  // Configure one or more authentication providers
  
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET
//     })
//   ]

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