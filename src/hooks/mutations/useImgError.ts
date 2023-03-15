import { api } from '~/utils/api'

export const useImgError = () => {
  const { mutate: sendImgError } = api.pokemon.imgError.useMutation()

  return { sendImgError }
}
