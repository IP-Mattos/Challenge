export default function ListItemLoading() {
  return (
    <div className='h-[64px] grid items-center '>
      <div role='status' className='w-full animate-pulse'>
        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-full '></div>
        <span className='sr-only'>Loading...</span>
      </div>
      <div className='flex justify-between'>
        <div role='status' className='w-full animate-pulse'>
          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-12 '></div>
          <span className='sr-only'>Loading...</span>
        </div>
        <div role='status' className='w-full animate-pulse'>
          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-full '></div>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </div>
  )
}
