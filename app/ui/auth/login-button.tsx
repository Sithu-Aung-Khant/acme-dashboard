import { auth } from '@/auth';
import { Button } from './auth-button';
import { SignIn } from './auth-components';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default async function LoginButton() {
  return (
    <div className="flex items-center gap-1.5 self-start rounded-lg bg-blue-500 py-1 pl-2 pr-5 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
      <SignIn />
      <ArrowRightIcon className="w-5 md:w-6" />
    </div>
  );
}
