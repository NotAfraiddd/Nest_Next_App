// import { useAuth0 } from '@auth0/auth0-react';
// import { useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from './ui/dialog';
// import { useGetMyUser } from '@/api/MyUserApi';
// import { useRouter } from 'next/router';
import UserProfileForm, { UserFormData } from './user-profile-form';
import LoadingButton from './loading-button';
import { currentUser } from '@/constants';

type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean;
};

const CheckoutButton = ({ onCheckout, disabled, isLoading }: Props) => {
  //   const { isAuthenticated, isLoading: isAuthLoading, loginWithRedirect } = useAuth0();

  //   const { asPath } = useRouter();

  //   const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();
  const onLogin = async () => {
    // await loginWithRedirect({
    //   appState: {
    //     returnTo: asPath, // Redirect back to the current path after login
    //   },
    // });
  };

  //   if (!isAuthenticated) {
  //     return (
  //       <Button onClick={onLogin} className="bg-orange-500 flex-1">
  //         Log in to check out
  //       </Button>
  //     );
  //   }

  //   if (isAuthLoading || !currentUser || isLoading) {
  //     return <LoadingButton />;
  //   }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DialogTitle>
          <Button disabled={disabled} className="bg-orange-500 flex-1">
            Go to checkout
          </Button>
        </DialogTitle>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50" aria-describedby="content">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          //   isLoading={isGetUserLoading}
          title="Confirm Delivery Details"
          buttonText="Continue to payment"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
