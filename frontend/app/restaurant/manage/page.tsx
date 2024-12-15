import ManageRestaurantForm from '@/components/form/manage-restaurant-form';
import OrderItemCard from '@/components/order-item-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { orders, restaurants } from '@/constants';
// import { GetServerSideProps } from 'next';
// import {
//   useCreateMyRestaurant,
//   useGetMyRestaurant,
//   useGetMyRestaurantOrders,
//   useUpdateMyRestaurant,
// } from '@/api/MyRestaurantApi';
// import OrderItemCard from '@/components/OrderItemCard';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import ManageRestaurantForm from '@/forms/manage-restaurant-form/ManageRestaurantForm';

// Fetch restaurant and orders from the server
// export const getServerSideProps: GetServerSideProps = async () => {
//   const ordersRes = await fetch('YOUR_API_URL/orders');
//   const restaurantRes = await fetch('YOUR_API_URL/restaurant');

//   const orders = await ordersRes.json();
//   const restaurant = await restaurantRes.json();

//   return {
//     props: {
//       orders,
//       restaurant,
//     },
//   };
// };

const ManageRestaurantPage = () => {
  //   const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
  //   const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant();

  const isEditing = !!restaurants[1];

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent value="orders" className="space-y-5 bg-gray-50 p-10 rounded-lg">
        <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard key={order._id} order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          // TODO: example
          restaurant={restaurants[1]}
          //   restaurant={restaurant}
          //   onSave={isEditing ? updateRestaurant : createRestaurant}
          //   isLoading={isCreateLoading || isUpdateLoading}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;
