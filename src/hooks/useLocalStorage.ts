const useLocalStorage = <T = unknown>(name: string) => {
  const getLocalStorage = () => {
    const local = localStorage.getItem(name)

    if (local != null) {
      return JSON.parse(local)
    }

    return null
  }

  const setLocalStorage = (item: T) => {
    localStorage.setItem(name, JSON.stringify(item))
  }

  const removeLocalStorage = () => {
    return localStorage.removeItem(name)
  }

  return [getLocalStorage, setLocalStorage, removeLocalStorage]
}

export { useLocalStorage }
