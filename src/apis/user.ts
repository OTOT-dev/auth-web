import { Axios } from '@/utils/http'

/** 查询items */
export const api_getItems = () => Axios.get('/api/items')
