import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login/LoginForm';
import { CopyButton } from '@/app/ui/CopyButton';
import { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
      <div className="w-96 p-6 bg-card rounded-xl border shadow absolute right-6 bottom-10">
        <h3 className="text-lg font-semibold text-center mb-4">Testing Credentials</h3>
        <div className="space-y-4">
          <CopyButton 
            text="acme@mail.com" 
            label="Email"
            title="Email"
          />
          <CopyButton 
            text="123456" 
            label="Password"
            title="Password"
          />
        </div>
      </div>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#000000',
            border: '1px solid #e5e7eb',
            fontSize: "13px"
          },
          iconTheme: {
            primary: '#3b82f6', // blue-500
            secondary: '#ffffff', // white
          },
        }}
      />
    </main>
  );
}
