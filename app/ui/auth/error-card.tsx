import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

import { CardWrapper } from '@/app/ui/login/card-wrapper';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex w-full items-center justify-center text-red-500">
        <ExclamationTriangleIcon className="text-destructive h-5 w-5" />
      </div>
    </CardWrapper>
  );
};
