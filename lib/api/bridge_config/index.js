import { getRequestUrl } from '../../utils'

const api_name = 'bridge_config'

const request = async (path, params) => {
  const res = await fetch(getRequestUrl(process.env.NEXT_PUBLIC_API_URL, path, { ...params, api_name }))
  return await res.json()
}

export const chains = async params => {
  const path = '/'

  params = { ...params, class: 'chains', network: process.env.NEXT_PUBLIC_NETWORK }

  let response = await request(path, params)

  response = (Array.isArray(response) ? response : []).map(_chain => { return { ..._chain, image: _chain.image || `${process.env.NEXT_PUBLIC_EXPLORER_URL}/logos/chains/${_chain.id}.png` } })

  return response
}

export const assets = async params => {
  const path = '/'

  params = { ...params, class: 'assets', network: process.env.NEXT_PUBLIC_NETWORK }

  let response = await request(path, params)

  response = (Array.isArray(response) ? response : []).map(_asset => { return { ..._asset, image: _asset.image || `${process.env.NEXT_PUBLIC_EXPLORER_URL}/logos/contracts/${_asset.id}.png` } })

  return response
}