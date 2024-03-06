/**
 * 判断是否为无效值。（注意0是有效值）
 * @param value
 */
const isFalsy = (value: unknown) => (value === 0 ? false : !value)

const isVoid = (value: unknown) => value === undefined || value === null || value === ''

/**
 * 清理对象中的空内容（空字符串 | null | undefined）
 * @param obj 对象
 */
const cleanObject = (obj: { [key: string]: unknown }) => {
  const result = { ...obj }
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export { isFalsy, isVoid, cleanObject }