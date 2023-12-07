import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { baseUrl } from ".";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${baseUrl}/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data) {
            return {
              ...data,
              ...data.data,
            };
          }
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],

  session: { strategy: "jwt" },
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
