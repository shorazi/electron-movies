import { useCallback, useRef } from 'react'

const useInfiniteScrolling = (
  setSize: (value: number) => Promise<any[] | undefined>,
  size: number,
  isValidating: boolean,
  isLastPage: boolean
) => {
  const loaderRef = useRef<IntersectionObserver>()

  const fetchNextPage = useCallback(
    (entries: any) => {
      const target = entries[0]
      if (target.isIntersecting) {
        setSize(size + 1)
      }
    },
    [size]
  )

  const handleLoaderRef = useCallback(
    (node: HTMLDivElement) => {
      if (isValidating || isLastPage) return
      if (loaderRef.current) loaderRef.current.disconnect()
      loaderRef.current = new IntersectionObserver(fetchNextPage, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      })
      if (node) loaderRef.current.observe(node)
    },
    [fetchNextPage, isValidating, isLastPage]
  )
  return { handleLoaderRef }
}

export default useInfiniteScrolling
