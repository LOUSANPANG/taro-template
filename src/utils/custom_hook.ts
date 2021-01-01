import { useEffect, DependencyList } from 'react'

export function useAsyncEffect (effect: () => Promise<any>, deps?: DependencyList) {
  useEffect(() => {
    effect()
  }, deps)
}