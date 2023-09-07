import type { Metadata } from 'next'

import './globals.css'
import Link from 'next/link'
import { Suspense } from 'react'
import ListItemLoading from './items/loading_items'
import ListItem from './items/list_item'
import { api } from './api'

export const metadata: Metadata = {
  title: 'Uizard Challenge',
  description: 'Generated by DemonTwo'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { id_post } = await api.id.get_id()
  return (
    <html lang='en'>
      <body className='grid grid-rows-[60px,1fr] h-screen'>
        <header className='bg-yellow-400 font-semibold text-black grid place-content-center'>
          <Link href='/'>Uizard HackerNews Reader</Link>
        </header>
        <main className='grid grid-cols-[320px,1fr] gap-4'>
          <aside>
            <ul className='px-4 flex flex-col gap-4 py-4'>
              {id_post.map((id) => (
                <li key={id}>
                  <Link href={`/${id}`}>
                    <Suspense fallback={<ListItemLoading />}>
                      <ListItem id={id} key={id} />
                    </Suspense>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <section>{children}</section>
        </main>
      </body>
    </html>
  )
}