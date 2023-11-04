import { useFavoriteReposStore } from '../store/favoriteRepos';

interface CardProps {
  id: number;
  name: string;
  isFavorite: boolean;
}

export function Card(props: CardProps) {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );

  function handleLike(id: number) {
    if (props.isFavorite) {
      return removeFavoriteRepo(id);
    }

    addFavoriteRepo(id);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
      }}>
      <h1>{props.name}</h1>
      <button onClick={() => handleLike(props.id)}>
        {props.isFavorite ? 'Dislike' : 'Like'}
      </button>
    </div>
  );
}
