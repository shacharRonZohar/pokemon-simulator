import { api } from '~/utils/api'

export const useCatch = () => {
  const {
    data: isCaught,
    mutate: catchPokemon,
    isLoading: isLoadingCatch,
  } = api.pokemon.catchPokemon.useMutation()

  return {
    catchPokemon,
    isCaught,
    isLoadingCatch,
  }
}
