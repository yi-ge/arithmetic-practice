# JavaScript 算法练习

[![license](https://img.shields.io/github/license/yi-ge/js-practice.svg?style=flat-square)](https://github.com/yi-ge/js-practice/blob/master/LICENSE)
![Travis (.org)](https://img.shields.io/travis/yi-ge/js-practice?style=flat-square)
[![GitHub last commit](https://img.shields.io/github/last-commit/yi-ge/js-practice.svg?style=flat-square)](https://github.com/yi-ge/js-practice)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/yi-ge/js-practice)

![Node.js CI](https://github.com/yi-ge/js-practice/workflows/Node.js%20CI/badge.svg)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)


## 字符串

- [反转字符串中的单词](src/string/reverse-words-in-a-string.js)

  - LeetCode 557. 反转字符串中的单词 III https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
  - LintCode 1173. 反转字符串 III https://www.lintcode.com/problem/reverse-words-in-a-string-iii/description

- [计数二进制子串](src/string/count-binary-substrings.js)

  - LeetCode 696. 计数二进制子串 https://leetcode-cn.com/problems/count-binary-substrings/
  - LintCode 1079. 连续子串计数 https://www.lintcode.com/problem/count-binary-substrings/description

- [重复的子串](src/string/repeated-substring-pattern.js)

  - LeetCode 459. 重复的子字符串 https://leetcode-cn.com/problems/repeated-substring-pattern/
  - LintCode 1227. 重复的子串模式 https://www.lintcode.com/problem/repeated-substring-pattern/description

- [正则表达式匹配](src/string/regular-expression-matching.js)

  - LeetCode 10. 正则表达式匹配 https://leetcode-cn.com/problems/regular-expression-matching/
  - LintCode 154. 正则表达式匹配 https://www.lintcode.com/problem/regular-expression-matching/description

- [恢复 IP 地址](src/string/restore-ip-addresses.js)

  - LeetCode 93. 复原 IP 地址 https://leetcode-cn.com/problems/restore-ip-addresses/
  - LintCode 426. 恢复 IP 地址 https://www.lintcode.com/problem/restore-ip-addresses/description

- [存在重复元素](src/string/contains-duplicate.js)

  - LeetCode 217. 存在重复元素 https://leetcode-cn.com/problems/contains-duplicate/

- [判断字符串是否没有重复字符](src/string/unique-characters.js)

  - LintCode 157. 判断字符串是否没有重复字符 https://www.lintcode.com/problem/unique-characters/description

## 数组

- [电话号码的字母组合](src/array/letter-combinations-of-a-phone-number.js)

  - LeetCode 17. 电话号码的字母组合 https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
  - LintCode 425. 电话号码的字母组合 https://www.lintcode.com/problem/letter-combinations-of-a-phone-number/description

- [卡牌分组](src/array/x-of-a-kind-in-a-deck-of-cards.js)

  - LeetCode 914. 卡牌分组 https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/

- [删除排序数组中的重复项](src/array/remove-duplicates-from-sorted-array.js)

  - LeetCode 26. 删除排序数组中的重复项 https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
  - LintCode 100. 删除排序数组中的重复数字 https://www.lintcode.com/problem/remove-duplicates-from-sorted-array/description

- [能否种花](src/array/can-place-flowers.js)

  - LeetCode 605. 种花问题 https://leetcode-cn.com/problems/can-place-flowers/
  - LintCode 1138. 能否放置花 https://www.lintcode.com/problem/can-place-flowers/description

- [循环升序数组](src/array/loop-asc-array.js)

  - 假设有一个升序数组,经过不确定长度的偏移，得到一个新的数组，我们称为循环升序数组。
    （例如：[0, 3, 4, 6, 7] 可能变成 [6, 7, 0, 3, 4]）
    给定一个数字和一个循环升序数组，判断这个数字是否在这个数组内，在的话返回 true，否则返回 false。要求时间复杂度为 O(logN)

    示例 1：
    输入：nums = [6, 7, 0, 3, 4]， target = 0
    输出：true

    示例 2：
    输入：nums = [6, 7, 0, 3, 4]， target = 5
    输出：false

- [循环数组中的环-暂无解](src/array/circular-array-loop.js)

  - LeetCode 457. 环形数组循环 https://leetcode-cn.com/problems/circular-array-loop/
  - LintCode 1229. 循环数组中的环 https://www.lintcode.com/problem/circular-array-loop/description

- [格雷编码](src/array/gray-code.js)

  - LeetCode 89. 格雷编码 https://leetcode-cn.com/problems/gray-code/
  - LintCode 411. 格雷编码 https://www.lintcode.com/problem/gray-code/description

- [数组划分](src/array/partition-array.js)

  - LintCode 31. 数组划分 https://www.lintcode.com/problem/partition-array/description

- [冒泡排序](src/array/bubble-sort.js)

- [选择排序](src/array/select-sort.js)

- [按奇偶排序数组](src/array/sort-array-by-parity.js)

  - LeetCode 922. 按奇偶排序数组 II https://leetcode-cn.com/problems/sort-array-by-parity-ii/

- [数组中的第 K 个最大元素](src/array/kth-largest-element-in-an-array.js)

  - LeetCode 215. 数组中的第 K 个最大元素 https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
  - LeetCode 414. 第三大的数【相似，需去重】 https://leetcode-cn.com/problems/third-maximum-number/submissions/
  - LintCode 5. 第 k 大元素 https://www.lintcode.com/problem/kth-largest-element/description
  - LintCode 606. 第 K 大的元素 II https://www.lintcode.com/problem/kth-largest-element-ii/description
  - LintCode 544. 前 K 大数【相似】 https://www.lintcode.com/problem/top-k-largest-numbers/description
  - LintCode 479. 数组第二大数【相似】 https://www.lintcode.com/problem/second-max-of-array/description

- [最大间距](src/array/maximum-gap.js)

  - LeetCode 164. 最大间距 https://leetcode-cn.com/problems/maximum-gap/
  - LintCode 400. 最大间距 https://www.lintcode.com/problem/maximum-gap/

- [缺失的第一个正数](src/array/first-missing-positive.js)

  - LeetCode 41. 缺失的第一个正数 https://leetcode-cn.com/problems/first-missing-positive/
  - LintCode 189. 丢失的第一个正整数 https://www.lintcode.com/problem/first-missing-positive/description
  - LintCode 681. 缺失的第一个素数【相似】 https://www.lintcode.com/problem/first-missing-prime-number/description

- [缺失的第一个素数](src/array/first-missing-prime-number.js)

  - LintCode 681. 缺失的第一个素数 https://www.lintcode.com/problem/first-missing-prime-number/description

- [串联所有单词的子串](src/array/substring-with-concatenation-of-all-words.js)

  - LeetCode 30. 串联所有单词的子串 https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
  - LintCode 1362. 包含所有单词连接的子串 https://www.lintcode.com/problem/substring-with-concatenation-of-all-words/description

- [买卖股票的最佳时机 II](src/array/best-time-to-buy-and-sell-stock-ii.js)

  - LeetCode 122. 买卖股票的最佳时机 II https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
  - LintCode 150. 买卖股票的最佳时机 II https://www.lintcode.com/problem/best-time-to-buy-and-sell-stock-ii/description

- [搜索插入位置](src/array/search-insert-position.js)

  - LeetCode 35. 搜索插入位置 https://leetcode-cn.com/problems/search-insert-position/
  - LintCode 20. 搜索插入位置 https://www.lintcode.com/problem/search-insert-position/description

- [二分查找](src/array/binary-search.js)

  - LeetCode 35. 二分查找 https://leetcode-cn.com/problems/binary-search/
  - LintCode 20. 二分查找 https://www.lintcode.com/problem/first-position-of-target/description

- [查找常用字符](src/array/find-common-characters.js)

  - LeetCode 1002. 查找常用字符 https://leetcode-cn.com/problems/find-common-characters/

- [01 矩阵](src/array/01-matrix.js)

  - LeetCode 542. 01 矩阵 https://leetcode-cn.com/problems/01-matrix/
  - LintCode 974. 01 矩阵 https://www.lintcode.com/problem/01-matrix/description

- [合并区间](src/array/merge-intervals.js)

  - LeetCode 56. 合并区间 https://leetcode-cn.com/problems/merge-intervals/
  - LintCode 156. 合并区间 https://www.lintcode.com/problem/merge-intervals/description

- [跳跃游戏](src/array/jump-game.js)

  - LeetCode 55. 跳跃游戏 https://leetcode-cn.com/problems/jump-game/
  - LintCode 116. 跳跃游戏 https://www.lintcode.com/problem/jump-game/description

## 栈

- [最大矩阵](src/stack/maximal-rectangle.js)
  - LeetCode 85. 最大矩阵 https://leetcode-cn.com/problems/maximal-rectangle/
  - LintCode 510. 最大矩阵 https://www.lintcode.com/problem/maximal-rectangle/description

## 数学

- [阶乘后的零](src/math/factorial-trailing-zeroes.js)

  - LeetCode 172. 阶乘后的零 https://leetcode-cn.com/problems/factorial-trailing-zeroes/submissions/
  - LintCode 2. 尾部的零 https://www.lintcode.com/problem/trailing-zeros/description

- [丑数 II](src/math/ugly-number-ii.js)
  - LeetCode 264. 丑数 II https://leetcode-cn.com/problems/ugly-number-ii/
  - LintCode 4. 丑数 II https://www.lintcode.com/problem/ugly-number-ii/description

## 堆

- [超级丑数](src/stack/super-ugly-number.js)【未完成】
  - LeetCode 313. 超级丑数 https://leetcode-cn.com/problems/super-ugly-number/
  - LintCode 518. 超级丑数 https://www.lintcode.com/problem/super-ugly-number/description
