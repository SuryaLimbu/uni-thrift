import { getCookie } from 'cookies-next';
import React from 'react'

export default async function fetchApiData(product: any) {

   const accessToken = getCookie("accessToken");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API}${product}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  return (await response.json());
}
