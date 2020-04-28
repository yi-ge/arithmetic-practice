/**
 * LeetCode 852. 山脉数组的峰顶索引
 * @param {number[]} A
 * @return {number}
 */
export const peakIndexInMountainArray = function (A) {
  let left = 0
  let right = A.length - 1

  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) return mid
    if (A[mid] < A[mid + 1] && A[mid] > A[mid - 1]) {
      left = mid
    } else {
      right = mid
    }
  }

  return 0
}

/**
 * LintCode 585. 山脉序列中的最大值
 * @param nums: a mountain sequence which increase firstly and then decrease
 * @return: then mountain top
 */
export const mountainSequence = function (nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return nums[mid]
    if (nums[mid] < nums[mid + 1] && nums[mid] > nums[mid - 1]) {
      left = mid
    } else {
      right = mid
    }
  }

  return nums[0]
}

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * 1095. 山脉数组中查找目标值
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
export const findInMountainArray = function (target, mountainArr) {
  let left = 0
  let right = mountainArr.length() - 1

  // 山峰索引
  let peak = 0

  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (mountainArr.get(mid) > mountainArr.get(mid - 1) && mountainArr.get(mid) > mountainArr.get(mid + 1)) {
      peak = mid
      break
    }
    if (mountainArr.get(mid) < mountainArr.get(mid + 1) && mountainArr.get(mid) > mountainArr.get(mid - 1)) {
      left = mid
    } else {
      right = mid
    }
  }

  // 在山峰左边查找
  const index = binarySearch(mountainArr, target, 0, peak, v => v)

  // 若存在，则直接返回下标，否则在山峰右边查找
  return index !== -1 ? index : binarySearch(mountainArr, target, peak + 1, mountainArr.length() - 1, v => -v)

  // 二分法查找
  // 其中 fn 是用来对升序还是降序的特殊处理
  function binarySearch (mountainArr, target, l, r, fn) {
    target = fn(target)
    while (l <= r) {
      const mid = (l + (r - l) / 2) | 0
      const cur = fn(mountainArr.get(mid))
      if (cur === target) {
        return mid
      } else if (cur < target) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return -1
  }
}
