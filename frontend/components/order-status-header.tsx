import { Order, ORDER_STATUS } from '@/interface/common';
import { Progress } from './ui/progress';

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);
    console.log(order.restaurant.estimatedDeliveryTime, typeof order.restaurant.estimatedDeliveryTime);
    // const estimatedTime = parseInt(order.restaurant.estimatedDeliveryTime.split('-')[1]);
    const estimatedTime = order.restaurant.estimatedDeliveryTime;
    created.setMinutes(created.getMinutes() + estimatedTime);
    const hours = created.getHours();
    const minutes = created.getMinutes();
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${paddedMinutes}`;
  };

  const getOrderStatusInfo = () => {
    return ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0];
  };

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
        <span>Order Status: {getOrderStatusInfo().label}</span>
        <span>Expected by: {getExpectedDelivery()}</span>
      </h1>
      {/* <Progress className="animate-pulse" value={getOrderStatusInfo().progressValue} /> */}
    </div>
  );
};

export default OrderStatusHeader;
