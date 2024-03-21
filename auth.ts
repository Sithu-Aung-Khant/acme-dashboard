import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

const credentialsConfig = CredentialsProvider({
  name: 'Credentials',
  credentials: {
    username: {
      label: 'User Name',
    },
    password: {
      label: 'Password',
      type: 'password',
    },
  },
  async authorize(credentials) {
    if (credentials.username === 'sk' && credentials.password === '123')
      return {
        name: 'Valid',
      };
    else return null;
  },
});

const config = {
  providers: [credentialsConfig, Google],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname.startsWith('/dashboard/')) return !!auth;
      return true;
    },
    // jwt({ token, trigger, session }) {
    //   if (trigger === 'update') token.name = session.user.name;
    //   return token;
    // },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
