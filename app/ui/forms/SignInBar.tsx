import { auth, signOut, signIn } from '@/auth';
import React from 'react';

async function SignInBar() {
  const session = await auth();
  return (
    <div className="flex gap-2  rounded bg-slate-800 p-2 text-white">
      <div className="ml-auto">
        {session && session.user ? (
          <div className="flex gap-2">
            <p>{session.user.name}</p>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <button type="submit">Sign Out</button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              'use server';
              await signIn();
            }}
          >
            <button type="submit">Sign In</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignInBar;
