"use client";
import { use } from "react";
import LinkItems from "../page";
import { useRouter } from "next/navigation";

export default function Item_Id({params, searchParams}:{
    params: Promise<{item_id: string}>,
    searchParams: Promise<{q: string}>
}) {
    const {item_id} = use(params);
    const {q} = use(searchParams);

    const router = useRouter();
  return (
    <div>
        This is item with id: {item_id} and search param: {q}
        <LinkItems />

        <button onClick={()=> router.push("/about")}>Go to About Page</button>
    </div>
  )
}