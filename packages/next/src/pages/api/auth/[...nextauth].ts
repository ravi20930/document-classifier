import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Waitlist from "../../../../../global/models/Waitlist";

const authOption: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No email found");
      }
      const [waitlistEntry, created] = await Waitlist.findOrCreate({
        where: { email: profile.email },
      });
      if (created) {
        console.log("Email added to waitlist:", profile.email);
        return true;
      }
      console.log("Email already in the waitlist:", profile.email);
      return true;
    },
  },
};

export default NextAuth(authOption);
