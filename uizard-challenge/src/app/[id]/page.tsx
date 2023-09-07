import { api } from '../api'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function IdPage({ params: { id } }: { params: { id: string } }) {
  await sleep(1000)
  const { website } = await api.post.website(id)
  return <iframe className='w-full h-full' src={website.url} title={website.title} />
}
