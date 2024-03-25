import NextAuth from 'next-auth';
import { UserRole } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { db } from '@/app/lib/db';
import authConfig from '@/auth.config';
import { getUserById } from '@/app/lib/user';

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});

// import type { NextAuthConfig } from 'next-auth';
// import NextAuth from 'next-auth';
// import Google from 'next-auth/providers/google';
// import CredentialsProvider from 'next-auth/providers/credentials';

// const credentialsConfig = CredentialsProvider({
//   name: 'Credentials',
//   credentials: {
//     username: {
//       label: 'User Name',
//     },
//     password: {
//       label: 'Password',
//       type: 'password',
//     },
//   },
//   async authorize(credentials) {
//     if (credentials.username === 'sk' && credentials.password === '123')
//       return {
//         name: 'Valid',
//       };
//     else return null;
//   },
// });

// const config = {
//   providers: [credentialsConfig, Google],
//   callbacks: {
//     authorized({ request, auth }) {
//       const { pathname } = request.nextUrl;
//       if (pathname.startsWith('/dashboard/')) return !!auth;
//       return true;
//     },
//     // jwt({ token, trigger, session }) {
//     //   if (trigger === 'update') token.name = session.user.name;
//     //   return token;
//     // },
//   },
// } satisfies NextAuthConfig;

// export const { handlers, auth, signIn, signOut } = NextAuth(config);
