import Image from 'next/image';
import hero from '@/public/hero.png';

const Hero = () => {
  return (
    <div>
      <Image src={hero} alt="Hero Image" className="w-full object-cover" priority />
    </div>
  );
};

export default Hero;
