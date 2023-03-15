import { api } from '~/utils/api'

export const useEncounter = () => {
  const {
    data: encounterPokemon,
    isError: isEncounterError,
    refetch: refetchEncounter,
    isFetching: isFecthinEncounter,
    isLoading: isLoadingEncounter,
  } = api.pokemon.getEncounter.useQuery(undefined, {
    enabled: false,
  })
  return {
    encounterPokemon,
    isEncounterError,
    refetchEncounter,
    isFecthinEncounter,
    isLoadingEncounter,
  }
}
