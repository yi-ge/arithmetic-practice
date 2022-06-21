const partition = (arr: number[], l: number, r: number) => {
  const v = arr[l]

  let j = l
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]]
      j++
    }
  }

  [arr[l], arr[j]] = [arr[j], arr[l]]
  return j
}

/**
 * 快速排序
 * @param arr 待排序数组
 * @param l 左下标
 * @param r 右下标
 */
export const quickSort = (arr: number[], l = 0, r = arr.length - 1) => {
  if (l >= r) return
  const p = partition(arr, l, r)
  quickSort(arr, l, p - 1)
  quickSort(arr, p + 1, r)
}
