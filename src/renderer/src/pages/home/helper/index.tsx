import { useEffect, useState } from 'react'

export const useLocalMainMovies = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [underTopIndex, setUnderTopIndex] = useState(0)

  useEffect(() => {
    setUnderTopIndex(0)
  }, [tabIndex])

  const previousClick = () => {
    if (underTopIndex === 0) {
      setUnderTopIndex(2)
    } else {
      setUnderTopIndex(underTopIndex - 1)
    }
  }
  const nextClick = () => {
    if (underTopIndex === 2) {
      setUnderTopIndex(0)
    } else {
      setUnderTopIndex(underTopIndex + 1)
    }
  }

  return {
    tabIndex,
    nextClick,
    previousClick,
    setTabIndex,
    underTopIndex,
    setUnderTopIndex
  }
}
