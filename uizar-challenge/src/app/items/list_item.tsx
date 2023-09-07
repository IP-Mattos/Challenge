import { api } from '../api'

export default async function ListItem({ id }: { id: number }) {
  const { post } = await api.post.title(id)

  return (
    <div className='truncate h-[64px] flex flex-col gap-2'>
      <p>{post.title || post.by}</p>
      <div className='flex items-center justify-between opacity-50'>
        <p>{post.by}</p>
        <p>Visit website {`>>`}</p>
      </div>
    </div>
  )
}
