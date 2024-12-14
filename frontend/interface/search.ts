type SearchResultInforProps = {
    total: number;
    city: string;
};

type SortOptionProps = {
    onChange: (value: string) => void;
    sortOption: string;
};