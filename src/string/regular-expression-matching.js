// LeetCode 10. 正则表达式匹配 https://leetcode-cn.com/problems/regular-expression-matching/
// LintCode 154. 正则表达式匹配 https://www.lintcode.com/problem/regular-expression-matching/description

export default (str, mode) => {
  const strLen = str.length
  const modeArr = mode.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g) // 筛选无模式和有模式

  let cur = 0
  for (let n = 0, len = modeArr.length; n < len; n++) {
    // 匹配模式结果分类
    // 分三类：.*|a*|bcde
    const s = modeArr[n].split('')
    if (s[1] === '*') { // 如果第二位是'*'，则为有模式
      if (s[0] === '.') { // 第一种模式
        return true
      } else { // 第二种模式，直接移到相等的最后面
        while (str[cur] === s[0]) {
          cur++
        }
      }
    } else { // 无模式
      for (let i = 0, sLen = s.length; i < sLen; i++) {
        if (s[i] !== str[cur++]) { // 注意，cur++每一次都会被执行
          return false
        }
      }
    }
  }

  return cur === strLen
}
