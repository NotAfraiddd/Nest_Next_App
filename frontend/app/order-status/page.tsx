// import { useGetMyOrders } from '@/api/OrderApi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { orders } from '@/constants';
import OrderStatusDetail from '@/components/order-status-detail';
import OrderStatusHeader from '@/components/order-status-header';

const OrderStatusPage = () => {
  //   const { orders, isLoading } = useGetMyOrders();
  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  // TODO: example
  const exampleOrders = orders;

  if (!orders || orders.length === 0) {
    return <div>No orders found</div>;
  }

  return (
    <div className="space-y-10">
      {exampleOrders.map((order) => (
        <Card key={order._id} className="space-y-10 bg-gray-50 p-10 rounded-lg">
          <CardHeader>
            <OrderStatusHeader order={order} />
          </CardHeader>

          <CardContent>
            <div className="grid gap-10 md:grid-cols-2">
              <OrderStatusDetail order={order} />
              <div className="relative w-full" style={{ paddingBottom: 'calc(100% / (16 / 6))' }}>
                <img
                  src={order.restaurant.imageUrl}
                  alt={order.restaurant.restaurantName}
                  className="absolute inset-0 rounded-md w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrderStatusPage;
