import { Poppins } from 'next/font/google';
import { lusitana } from '@/app/ui/fonts';
import { cn } from '@/app/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <p className={`${lusitana.className} text-muted-foreground text-xl`}>
      {label}
    </p>
  );
};
