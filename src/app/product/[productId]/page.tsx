export default async function ProductPage({
  params,
}: {

    // in newer versions of nextjs, params return a promise. thus we have to specify promises only as function parameter type.
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params

  return <h1>Product ID: {productId}</h1>
}
