import { useState } from 'react'

/** 异步事件的状态 */
interface State<D> {
  stat: 'idle' | 'loading' | 'error' | 'success'
  data: D | null
  error: Error | null
}

/** 默认的异步事件的状态 */
const defaultInitialState: State<null> = {
  stat: 'idle',
  data: null,
  error: null
}

/**
 * 异步操作钩子
 */
export const useAsync = <D>(initialState?: State<D>) => {
  const [state, setState] = useState<State<D>>({
    ...defaultInitialState,
    ...initialState
  })

  /** 异步操作成功 -- 设置成功值 */
  const setData = (data: D) =>
    setState({
      stat: 'success',
      data,
      error: null
    })

  /** 异步操作失败 -- 设置失败原因 */
  const setError = (error: Error) =>
    setState({
      stat: 'error',
      data: null,
      error
    })

  /** 执行异步操作 */
  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error('异步操作必须是一个promise对象!')
    }

    setState({ ...state, stat: 'loading' })

    return promise
      .then(data => {
        setData(data)
        return data
      })
      .catch(error => {
        setError(error)
        return error
      })
  }

  return {
    isIdle: state.stat === 'idle',
    isLoading: state.stat === 'loading',
    isError: state.stat === 'error',
    isSuccess: state.stat === 'success',
    run,
    setData,
    setError,
    ...state
  }
}
