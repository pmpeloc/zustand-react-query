import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import api from '../api/github';
import { Repository } from './types';

async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, gitHubUser] = ctx.queryKey;

  const { data } = await api.get<Repository[]>(`/users/${gitHubUser}/repos`);

  return data;
}

export function useFetchRepositories(gitHubUser: string) {
  return useQuery({ queryKey: ['repos', gitHubUser], queryFn: fetchRepos });
}
