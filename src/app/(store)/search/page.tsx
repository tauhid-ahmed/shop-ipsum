import { SearchLayout } from "./_components/layout";

type SearchPageProps = {
  searchParams: Promise<{
    category: string;
    tag: string;
  }>;
};

export default async function ProductSearchPage({
  searchParams,
}: SearchPageProps) {
  const { category, tag } = await searchParams;
  return <SearchLayout />;
}
