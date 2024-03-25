import AcmeLogo from '@/app/ui/acme-logo';
import { ErrorCard } from '@/app/ui/auth/error-card';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const AuthErrorPage = () => {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end justify-center rounded-lg bg-white  p-3 md:h-20">
          <div className="w-32 text-white md:w-36">
            <div
              className={`${lusitana.className} flex flex-row items-center leading-none text-red-500`}
            >
              <GlobeAltIcon className="h-8 w-8 rotate-[15deg]" />
              <p className="text-[30px]">Acme</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <ErrorCard />
        </div>
      </div>
    </main>
  );
};

export default AuthErrorPage;
