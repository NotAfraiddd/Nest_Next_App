'use client';

// import { useSearchRestaurants } from '@/api/RestaurantApi';
// import CuisineFilter from '@/components/CuisineFilter';
// import PaginationSelector from '@/components/PaginationSelector';
// import SearchBar, { SearchForm } from '@/components/SearchBar';
// import SearchResultCard from '@/components/SearchResultCard';
// import SearchResultInfo from '@/components/SearchResultInfo';
// import SortOptionDropdown from '@/components/SortOptionDropdown';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

const SearchPage = () => {
  const router = useRouter();
  //   const { city } = router.query; // Fetch dynamic `city` from the URL

  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: '',
    page: 1,
    selectedCuisines: [],
    sortOption: 'bestMatch',
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  //   const { results, isLoading } = useSearchRestaurants(searchState, city as string); // Use city from router

  const setSortOption = (sortOption: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      sortOption,
      page: 1,
    }));
  };

  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1,
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  //   const setSearchQuery = (searchFormData: SearchForm) => {
  //     setSearchState((prevState) => ({
  //       ...prevState,
  //       searchQuery: searchFormData.searchQuery,
  //       page: 1,
  //     }));
  //   };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: '',
      page: 1,
    }));
  };

  // Add loading state handling (returning a loading spinner or message while data is being fetched)
  //   if (isLoading) {
  //     return <span>Loading ...</span>;
  //   }

  // If no results or city is missing
  //   if (!results?.data || !city) {
  //     return <span>No results found</span>;
  //   }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">
        Page
        {/* <CuisineFilter
          selectedCuisines={searchState.selectedCuisines}
          onChange={setSelectedCuisines}
          isExpanded={isExpanded}
          onExpandedClick={() => setIsExpanded((prevIsExpanded) => !prevIsExpanded)}
        /> */}
      </div>
      <div id="main-content" className="flex flex-col gap-5">
        {/* <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeHolder="Search by Cuisine or Restaurant Name"
          onReset={resetSearch}
        /> */}
        <div className="flex justify-between flex-col gap-3 lg:flex-row">
          {/* <SearchResultInfo total={results.pagination.total} city={city as string} /> */}
          {/* <SortOptionDropdown sortOption={searchState.sortOption} onChange={(value) => setSortOption(value)} /> */}
        </div>

        {/* {results.data.map((restaurant) => (
          <SearchResultCard key={restaurant.id} restaurant={restaurant} />
        ))} */}
        {/* <PaginationSelector page={results.pagination.page} pages={results.pagination.pages} onPageChange={setPage} /> */}
      </div>
    </div>
  );
};

export default SearchPage;
