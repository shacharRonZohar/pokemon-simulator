export async function customeFetch<T>(url: string, options: RequestInit = {}) {
  const res = await fetch(url, options)
  if (!res.ok) throw new Error(res.statusText)
  if (res.status === 204) return null

  return (await res.json()) as T
}
