type Props = {
  searchParams: Promise<{
    q: string;
  }>;
};

export default async function ProductsSearch({ searchParams }: Props) {
  const { q } = await searchParams;

  return <div>ProductsSearch</div>;
}
