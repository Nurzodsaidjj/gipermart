import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../config/data/data'

export default function useAds() {
  return useQuery({
    queryKey:["ads"],
    queryFn:()=> request.get("/ads").then((res)=>res.data)
  })
}