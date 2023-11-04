import React from 'react';

import { useFetchRepositories } from './hooks/useRepo';
import { Card } from './components/Card';
import { Repository } from './hooks/types';
import { useFavoriteReposStore } from './store/favoriteRepos';

export default function App() {
  const { data, isLoading } = useFetchRepositories('pmpeloc');
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) {
    return <div>is loading...</div>;
  }

  return (
    <div>
      {data?.map((repo: Repository, index: number) => (
        <Card
          key={index}
          id={repo.id}
          name={repo.name}
          isFavorite={favoriteReposIds.includes(repo.id)}
        />
      ))}
    </div>
  );
}
