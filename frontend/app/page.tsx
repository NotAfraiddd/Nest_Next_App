'use client';
import Image from 'next/image';
import landingImage from '@/public/landing.png';
import appDownloadImage from '@/public/appDownload.png';
import SearchBar, { SearchForm } from '@/components/search-bar';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const router = useRouter();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    router.push(`/search/${searchFormValues.searchQuery}`);
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center mt-16 px-2">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">Tuck into a takeaway today</h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar placeHolder="Search by City or Town" onSubmit={handleSearchSubmit} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Image src={landingImage} alt="Landing Image" className="object-cover" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">Order takeaway even faster!</span>
          <span>Download the MernEats App for faster ordering and personalised recommendations</span>
          <Image src={appDownloadImage} alt="App Download" className="pb-12 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
