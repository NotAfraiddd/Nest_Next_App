'use client';

import Image from 'next/image';
import hero from '@/public/hero.png';
import { usePathname } from 'next/navigation';

const Hero = () => {
  const route = usePathname();
  const ROUTE_HIDE_HERO = ['/search'];
  const shouldHideHero = ROUTE_HIDE_HERO.includes(route);
  if (!shouldHideHero) return null;
  return (
    <div>
      <Image src={hero} alt="Hero Image" className="w-full object-cover" priority />
    </div>
  );
};

export default Hero;
