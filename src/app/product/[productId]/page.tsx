import { redirect } from "next/navigation"

export default async function ProductPage({
  params,
}: {

    // in newer versions of nextjs, params return a promise. thus we have to specify promises only as function parameter type.
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params
  if(Number.parseInt(productId)>1000){
    redirect('/product')
    // redirect stops the execution right here.
    // this is a server side method
    // redirect method throws an error which nextjs detects
  }
  return <h1>Product ID: {productId}</h1>
}
