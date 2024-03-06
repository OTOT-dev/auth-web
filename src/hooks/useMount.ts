import { useEffect, useState } from 'react'

export const useMount = (cb: () => void) => {
  useEffect(() => {
    cb()
    //TODO 依赖项里加上callback会造成无限循环，这个和useCallback和useMemo有关系。
  }, [])
}
