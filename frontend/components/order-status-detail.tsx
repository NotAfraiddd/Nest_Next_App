import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Order } from '@/interface/common';

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <Card className="space-y-5">
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div className="flex flex-col">
            <span className="font-bold">Delivering to:</span>
            <span>{order.deliveryDetails.name}</span>
            <span>
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold">Your Order</span>
            <ul className="list-disc pl-5">
              {order.cartItems.map((item) => (
                <li key={item.menuItemId}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="flex flex-col">
            <span className="font-bold">Total</span>
            <span>£{(order.totalAmount / 100).toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderStatusDetail;
