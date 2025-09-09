import { request } from '../../../config/data/data';
import { useQuery } from '@tanstack/react-query';

export const getCategory = (name) => {
  return useQuery({
    queryKey: ['category', name],
    queryFn: () =>
      request
        .get(`/${name}`, { params: { category: name } })
        .then((res) => res.data),
    enabled: !!name,
  });
};