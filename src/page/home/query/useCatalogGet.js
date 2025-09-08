import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../config/data/data'

export default function useCatalogGet() {
  return useQuery({
    queryKey:["catalog"],
    queryFn:()=> request.get("/catalog").then((res)=>res.data)
  })
}
