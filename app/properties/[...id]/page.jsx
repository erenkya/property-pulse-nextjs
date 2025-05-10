"use client";

import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

const Property = () =>
  // { params, searchParams }

  {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const pathName = usePathname();

    return (
      <>
        <div>{/* Property page {params.id} {searchParams.name} */}</div>
        <button onClick={() => router.replace("/")}>Go Home</button>
        <div>id: {params.id}</div>
        ?name=Jhon
        <div>{searchParams.get("name")}</div>
        <div>{pathName}</div>
      </>
    );
  };

export default Property;
