import { Restaurant } from '@/interface/common';
import { Dot } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="border border-slate-300 shadow-md rounded-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight text-gray-900">{restaurant.restaurantName}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {restaurant.cuisines.map((item, index) => (
          <span className="flex items-center" key={index}>
            <span className="text-gray-700">{item}</span>
            {index < restaurant.cuisines.length - 1 && <Dot className="mx-1" />}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
