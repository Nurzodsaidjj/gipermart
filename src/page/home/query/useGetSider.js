import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../config/data/data'

export default function useGetSider() {
  return useQuery({
    queryKey:["siders"],
    queryFn:()=> request.get("/banners").then((res)=> res.data)
  })
}
