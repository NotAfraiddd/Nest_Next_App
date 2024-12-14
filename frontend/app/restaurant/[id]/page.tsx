'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { useQuery } from 'react-query';
import { restaurants } from '@/constants';
import RestaurantInfo from '@/components/restaurant-info';
import MenuItem from '@/components/menu-item';
import { MenuItem as MenuItemType } from '@/interface/common';
import { Card, CardFooter } from '@/components/ui/card';
import OrderSummary from '@/components/order-summary';
import CheckoutButton from '@/components/checkout-button';
import { UserFormData } from '@/components/user-profile-form';
// import { useCreateCheckoutSession } from '@/api/OrderApi'; // Assuming you have this custom hook for API calls

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

const DetailPage = () => {
  const router = useRouter();
  //   TODO:
  const restaurant = restaurants[1];
  const restaurantId = restaurants[1]._id;
  //   const { restaurantId } = router.query;
  //   const { data: restaurant, isLoading } = useQuery(
  //     ['restaurant', restaurantId],
  //     () => fetchRestaurant(restaurantId as string), // Define your fetchRestaurant API function
  //     { enabled: !!restaurantId }, // Ensure query only runs when restaurantId is available
  //   );
  //   const { createCheckoutSession, isLoading: isCheckoutLoading } = useCreateCheckoutSession();

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    if (restaurantId) {
      const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }
  }, [restaurantId]);

  const addToCart = (menuItem: MenuItemType) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find((cartItem) => cartItem._id === menuItem._id);

      let updatedCartItems;

      if (existingCartItem) {
        updatedCartItems = prevCartItems.map((cartItem) =>
          cartItem._id === menuItem._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        );
      } else {
        updatedCartItems = [
          ...prevCartItems,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }

      sessionStorage.setItem(`cartItems-${restaurantId}`, JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter((item) => cartItem._id !== item._id);
      sessionStorage.setItem(`cartItems-${restaurantId}`, JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const onCheckout = async (userFormData: UserFormData) => {
    if (!restaurant) return;
    const checkoutData = {
      cartItems: cartItems.map((cartItem) => ({
        menuItemId: cartItem._id,
        name: cartItem.name,
        quantity: cartItem.quantity.toString(),
      })),
      restaurantId: restaurant._id,
      deliveryDetails: {
        name: userFormData.name,
        addressLine1: userFormData.addressLine1,
        city: userFormData.city,
        country: userFormData.country,
        email: userFormData.email as string,
      },
    };
    // const data = await createCheckoutSession(checkoutData);
    // window.location.href = data.url;
  };
  //   if (isLoading || !restaurant) {
  //     return 'Loading...';
  //   }

  return (
    <div className="flex flex-col gap-10">
      <div className="relative w-full" style={{ paddingBottom: 'calc(100% / (16 / 6))' }}>
        <img
          src={restaurant.imageUrl}
          alt={restaurant.restaurantName}
          className="absolute inset-0 rounded-md w-full h-full object-cover"
        />
      </div>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32 pb-12">
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />
          <span className="text-2xl font-bold tracking-tight">Menu</span>
          {restaurant.menuItems.map((menuItem) => (
            <MenuItem key={menuItem._id} menuItem={menuItem} addToCart={() => addToCart(menuItem)} />
          ))}
        </div>

        <div>
          <Card>
            <OrderSummary restaurant={restaurant} cartItems={cartItems} removeFromCart={removeFromCart} />
            <CardFooter className="mt-5">
              <CheckoutButton disabled={cartItems.length === 0} onCheckout={onCheckout} isLoading={false} />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
