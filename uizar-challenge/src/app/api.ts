export const api = {
  id: {
    get_id: async () => {
      const id_post = await fetch(
        `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy="$key"`
      ).then((res) => res.json() as Promise<number[]>)
      return { id_post }
    }
  },
  post: {
    title: async (id: number) => {
      const post = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(
        (res) => res.json() as Promise<{ url: string; by: string; title: string }>
      )
      return {
        post
      }
    },
    website: async (id: string) => {
      const website = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(
        (res) => res.json() as Promise<{ url: string; by: string; title: string }>
      )
      return {
        website
      }
    }
  }
}
