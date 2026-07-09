import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authCongig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return true;
    },
    async signIn({ user, account, profile }) {
      try {
        const guest = await getGuest("john@example.com");

        if (!guest) {
          await createGuest({ email: user.email, fullName: user.name });
        }

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest("demo");

      session.user.guestId = guest.id;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authCongig);
