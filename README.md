# TypeScript 算法练习

[![license](https://img.shields.io/github/license/yi-ge/arithmetic-practice.svg?style=flat-square)](https://github.com/yi-ge/arithmetic-practice/blob/master/LICENSE)
[![GitHub Actions](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fyi-ge%2Farithmetic-practice%2Fbadge%3Fref%3Dmain&style=flat-square)](https://actions-badge.atrox.dev/yi-ge/arithmetic-practice/goto?ref=main)
[![Test Results](https://gist.github.com/yi-ge/d68fa5b85788ef50447630fff106866c/raw/badge.svg)](https://github.com/yi-ge/arithmetic-practice)
[![Coveralls github](https://img.shields.io/coveralls/github/yi-ge/arithmetic-practice?style=flat-square)](https://github.com/yi-ge/arithmetic-practice)
[![GitHub last commit](https://img.shields.io/github/last-commit/yi-ge/arithmetic-practice.svg?style=flat-square)](https://github.com/yi-ge/arithmetic-practice)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/yi-ge/arithmetic-practice)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

TypeScript / JavaScript 基础算法、数据结构练习，包含 LeetCode 或 LintCode 解题记录。

此为个人练习仓库，代码中对重要思想进行了注释，但是没有详细的解题思路。需解题思路请移步其它仓库，很抱歉。

每一道题都对应写有测试用例，但可能不够完整。如果您发现错误，欢迎给我留言，谢谢！

## 基础排序算法

- [插入排序](src/sort/insertSort.ts)
- [冒泡排序](src/sort/bubbleSort.ts)
- [选择排序](src/sort/selectSort.ts)
- [快速排序](src/sort/quickSort.ts)
- [归并排序](src/sort/mergeSort.ts)

## 字符串

- [反转字符串中的单词](src/string/reverse-words-in-a-string.js)

  - LeetCode 557. 反转字符串中的单词 III <https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/>
  - LintCode 1173. 反转字符串 III <https://www.lintcode.com/problem/reverse-words-in-a-string-iii/description>

- [计数二进制子串](src/string/count-binary-substrings.js)

  - LeetCode 696. 计数二进制子串 <https://leetcode-cn.com/problems/count-binary-substrings/>
  - LintCode 1079. 连续子串计数 <https://www.lintcode.com/problem/count-binary-substrings/description>

- [重复的子串](src/string/repeated-substring-pattern.js)

  - LeetCode 459. 重复的子字符串 <https://leetcode-cn.com/problems/repeated-substring-pattern/>
  - LintCode 1227. 重复的子串模式 <https://www.lintcode.com/problem/repeated-substring-pattern/description>

- [正则表达式匹配](src/string/regular-expression-matching.js)

  - LeetCode 10. 正则表达式匹配 <https://leetcode-cn.com/problems/regular-expression-matching/>
  - LintCode 154. 正则表达式匹配 <https://www.lintcode.com/problem/regular-expression-matching/description>

- [恢复 IP 地址](src/string/restore-ip-addresses.js)

  - LeetCode 93. 复原 IP 地址 <https://leetcode-cn.com/problems/restore-ip-addresses/>
  - LintCode 426. 恢复 IP 地址 <https://www.lintcode.com/problem/restore-ip-addresses/description>

- [存在重复元素](src/string/contains-duplicate.js)

  - LeetCode 217. 存在重复元素 <https://leetcode-cn.com/problems/contains-duplicate/>

- [判断字符串是否没有重复字符](src/string/unique-characters.js)

  - LintCode 157. 判断字符串是否没有重复字符 <https://www.lintcode.com/problem/unique-characters/description>

- [比较字符串](src/string/compare-strings.js)

  - LintCode 55. 比较字符串 <https://www.lintcode.com/problem/compare-strings/description>

- [最长无重复字符的子串](src/string/longest-substring-without-repeating-characters.js)

  - LeetCode 3. 无重复字符的最长子串 <https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/>
  - LintCode 384. 最长无重复字符的子串 <https://www.lintcode.com/problem/longest-substring-without-repeating-characters/description>

- [最大数](src/string/largest-number.js)

  - LeetCode 179. 最大数 <https://leetcode-cn.com/problems/largest-number/>
  - LintCode 184. 最大数 <https://www.lintcode.com/problem/largest-number/description>

- [实现 string2int()函数](src/string/string2int.js)

  - 面试题参考思路，不严谨实现 廖雪峰 不要使用 JavaScript 内置的 parseInt()函数，利用 map 和 reduce 操作实现一个 string2int()函数。 <https://www.liaoxuefeng.com/wiki/1022910821149312/1024322552460832>

- [左旋转字符串](src/string/zuo-xuan-zhuan-zi-fu-chuan-lcof.js)

  - LeetCode 面试题 58 - II. 左旋转字符串 <https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/>

- [最后一个单词的长度](src/string/length-of-last-word.js)

  - LeetCode 58. 最后一个单词的长度 <https://leetcode-cn.com/problems/length-of-last-word/>
  - LintCode 422. 最后一个单词的长度 <https://www.lintcode.com/problem/length-of-last-word/description>

- [整数转罗马数字](src/string/integer-to-roman.js)

  - LeetCode 12. 整数转罗马数字 <https://leetcode-cn.com/problems/integer-to-roman/>
  - LintCode 418. 整数转罗马数字 <https://www.lintcode.com/problem/integer-to-roman/description>

- [罗马数字转整数](src/string/roman-to-integer.js)

  - LeetCode 13. 罗马数字转整数 <https://leetcode-cn.com/problems/roman-to-integer/>
  - LintCode 419. 罗马数字转整数 <https://www.lintcode.com/problem/roman-to-integer/description>

- [验证回文字符串 Ⅱ](src/string/valid-palindrome-ii.js)

  - LeetCode 680. 验证回文字符串 Ⅱ <https://leetcode-cn.com/problems/valid-palindrome-ii/>
  - LintCode 891. 有效回文 II <https://www.lintcode.com/problem/valid-palindrome-ii/description>

- [IP 地址无效化](src/string/defanging-an-ip-address.js)

  - LeetCode 1108. IP 地址无效化 <https://leetcode-cn.com/problems/defanging-an-ip-address/>

- [最长回文子串](src/string/longest-palindromic-substring.js)

  - LeetCode 5. 最长回文子串 <https://leetcode-cn.com/problems/longest-palindromic-substring/>
  - LintCode 200. 最长回文子串 <https://www.lintcode.com/problem/longest-palindromic-substring/>

- [每个元音包含偶数次的最长子字符串](src/string/find-the-longest-substring-containing-vowels-in-even-counts.js)

  - LeetCode 1371. 每个元音包含偶数次的最长子字符串 <https://leetcode-cn.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/>

- [最小覆盖子串](src/string/minimum-window-substring.js)

  - LeetCode 76. 最小覆盖子串 <https://leetcode-cn.com/problems/minimum-window-substring/>
  - LintCode 32. 最小子串覆盖 <https://www.lintcode.com/problem/minimum-window-substring/description>

- [检查单词是否为句中其他单词的前缀](src/string/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence.js)

  - LeetCode 5416. 检查单词是否为句中其他单词的前缀 <https://leetcode-cn.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/>

- [定长子串中元音的最大数目](src/string/maximum-number-of-vowels-in-a-substring-of-given-length.js)

  - LeetCode 5417. 定长子串中元音的最大数目 <https://leetcode-cn.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/>

- [最长公共前缀](src/string/longest-common-prefix.js)

  - LeetCode 14. 最长公共前缀 <https://leetcode-cn.com/problems/longest-common-prefix/>
  - LintCode 78. 最长公共前缀 <https://www.lintcode.com/problem/longest-common-prefix/description>

- [括号生成](src/string/generate-parentheses.ts)

  - LeetCode 22. 括号生成 <https://leetcode.cn/problems/generate-parentheses/>

## 数组/队列/集合/映射

- [电话号码的字母组合](src/array/letter-combinations-of-a-phone-number.js)

  - LeetCode 17. 电话号码的字母组合 <https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/>
  - LintCode 425. 电话号码的字母组合 <https://www.lintcode.com/problem/letter-combinations-of-a-phone-number/description>

- [卡牌分组](src/array/x-of-a-kind-in-a-deck-of-cards.js)

  - LeetCode 914. 卡牌分组 <https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/>

- [删除排序数组中的重复项](src/array/remove-duplicates-from-sorted-array.js)

  - LeetCode 26. 删除排序数组中的重复项 <https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/>
  - LintCode 100. 删除排序数组中的重复数字 <https://www.lintcode.com/problem/remove-duplicates-from-sorted-array/description>

- [能否种花](src/array/can-place-flowers.js)

  - LeetCode 605. 种花问题 <https://leetcode-cn.com/problems/can-place-flowers/>
  - LintCode 1138. 能否放置花 <https://www.lintcode.com/problem/can-place-flowers/description>

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

  - LeetCode 457. 环形数组循环 <https://leetcode-cn.com/problems/circular-array-loop/>
  - LintCode 1229. 循环数组中的环 <https://www.lintcode.com/problem/circular-array-loop/description>

- [格雷编码](src/array/gray-code.js)

  - LeetCode 89. 格雷编码 <https://leetcode-cn.com/problems/gray-code/>
  - LintCode 411. 格雷编码 <https://www.lintcode.com/problem/gray-code/description>

- [数组划分](src/array/partition-array.js)

  - LintCode 31. 数组划分 <https://www.lintcode.com/problem/partition-array/description>

- [冒泡排序](src/array/bubble-sort.js)

- [选择排序](src/array/select-sort.js)

- [按奇偶排序数组](src/array/sort-array-by-parity.js)

  - LeetCode 922. 按奇偶排序数组 II <https://leetcode-cn.com/problems/sort-array-by-parity-ii/>

- [数组中的第 K 个最大元素](src/array/kth-largest-element-in-an-array.js)

  - LeetCode 215. 数组中的第 K 个最大元素 <https://leetcode-cn.com/problems/kth-largest-element-in-an-array/>
  - LeetCode 414. 第三大的数【相似，需去重】 <https://leetcode-cn.com/problems/third-maximum-number/submissions/>
  - LintCode 5. 第 k 大元素 <https://www.lintcode.com/problem/kth-largest-element/description>
  - LintCode 606. 第 K 大的元素 II <https://www.lintcode.com/problem/kth-largest-element-ii/description>
  - LintCode 544. 前 K 大数【相似】 <https://www.lintcode.com/problem/top-k-largest-numbers/description>
  - LintCode 479. 数组第二大数【相似】 <https://www.lintcode.com/problem/second-max-of-array/description>

- [最大间距](src/array/maximum-gap.js)

  - LeetCode 164. 最大间距 <https://leetcode-cn.com/problems/maximum-gap/>
  - LintCode 400. 最大间距 <https://www.lintcode.com/problem/maximum-gap/>

- [缺失的第一个正数](src/array/first-missing-positive.js)

  - LeetCode 41. 缺失的第一个正数 <https://leetcode-cn.com/problems/first-missing-positive/>
  - LintCode 189. 丢失的第一个正整数 <https://www.lintcode.com/problem/first-missing-positive/description>
  - LintCode 681. 缺失的第一个素数【相似】 <https://www.lintcode.com/problem/first-missing-prime-number/description>

- [缺失的第一个素数](src/array/first-missing-prime-number.js)

  - LintCode 681. 缺失的第一个素数 <https://www.lintcode.com/problem/first-missing-prime-number/description>

- [串联所有单词的子串](src/array/substring-with-concatenation-of-all-words.js)

  - LeetCode 30. 串联所有单词的子串 <https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/>
  - LintCode 1362. 包含所有单词连接的子串 <https://www.lintcode.com/problem/substring-with-concatenation-of-all-words/description>

- [买卖股票的最佳时机 II](src/array/best-time-to-buy-and-sell-stock-ii.js)

  - LeetCode 122. 买卖股票的最佳时机 II <https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/>
  - LintCode 150. 买卖股票的最佳时机 II <https://www.lintcode.com/problem/best-time-to-buy-and-sell-stock-ii/description>

- [搜索插入位置](src/array/search-insert-position.js)

  - LeetCode 35. 搜索插入位置 <https://leetcode-cn.com/problems/search-insert-position/>
  - LintCode 20. 搜索插入位置 <https://www.lintcode.com/problem/search-insert-position/description>

- [二分查找](src/array/binary-search.js)

  - LeetCode 35. 二分查找 <https://leetcode-cn.com/problems/binary-search/>
  - LintCode 20. 二分查找 <https://www.lintcode.com/problem/first-position-of-target/description>

- [查找常用字符](src/array/find-common-characters.js)

  - LeetCode 1002. 查找常用字符 <https://leetcode-cn.com/problems/find-common-characters/>

- [01 矩阵](src/array/01-matrix.js)

  - LeetCode 542. 01 矩阵 <https://leetcode-cn.com/problems/01-matrix/>
  - LintCode 974. 01 矩阵 <https://www.lintcode.com/problem/01-matrix/description>

- [合并区间](src/array/merge-intervals.js)

  - LeetCode 56. 合并区间 <https://leetcode-cn.com/problems/merge-intervals/>
  - LintCode 156. 合并区间 <https://www.lintcode.com/problem/merge-intervals/description>

- [跳跃游戏](src/array/jump-game.js)

  - LeetCode 55. 跳跃游戏 <https://leetcode-cn.com/problems/jump-game/>
  - LintCode 116. 跳跃游戏 <https://www.lintcode.com/problem/jump-game/description>

- [盛最多水的容器](src/array/container-with-most-water.js)

  - LeetCode 11. 盛最多水的容器 <https://leetcode-cn.com/problems/container-with-most-water/>
  - LintCode 383. 装最多水的容器 <https://www.lintcode.com/problem/container-with-most-water/description>

- [统计重复个数](src/array/count-the-repetitions.js)

  - LeetCode 466. 统计重复个数 <https://leetcode-cn.com/problems/count-the-repetitions/>
  - LintCode 1224. 统计重复个数 <https://www.lintcode.com/problem/count-the-repetitions/description>

- [岛屿的个数](src/array/number-of-islands.js)

  - LeetCode 200. 岛屿数量 <https://leetcode-cn.com/problems/number-of-islands/>
  - LintCode 433. 岛屿的个数 <https://www.lintcode.com/problem/number-of-islands/description>

- [统计「优美子数组」](src/array/count-number-of-nice-subarrays.js)

  - LeetCode 1248. 统计「优美子数组」 <https://leetcode-cn.com/problems/count-number-of-nice-subarrays/>

- [主元素](src/array/majority-element.js)

  - LeetCode 面试题 17.10. 主要元素 <https://leetcode-cn.com/problems/find-majority-element-lcci/>
  - LintCode 46. 主元素 <https://www.lintcode.com/problem/majority-element/description>

- [逆序对](src/array/reverse-pairs.js)

  - LeetCode 面试题 51. 数组中的逆序对 <https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/>
  - LintCode 532. 逆序对 <https://www.lintcode.com/problem/reverse-pairs/description>

- [搜索旋转排序数组](src/array/search-in-rotated-sorted-array.js)

  - LeetCode 33. 搜索旋转排序数组 <https://leetcode-cn.com/problems/search-in-rotated-sorted-array/>
  - LintCode 62. 搜索旋转排序数组 <https://www.lintcode.com/problem/search-in-rotated-sorted-array/description>

- [数组中数字出现的次数](src/array/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof.js)

  - LeetCode 面试题 56 - I. 数组中数字出现的次数 <https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/>

- [只出现一次的数字](src/array/single-number.js)

  - LeetCode 136. 只出现一次的数字 <https://leetcode-cn.com/problems/single-number/>

- [山脉数组中查找目标值](src/array/find-in-mountain-array.js)

  - LeetCode 1095. 山脉数组中查找目标值 <https://leetcode-cn.com/problems/find-in-mountain-array/>
  - LeetCode 852. 山脉数组的峰顶索引 <https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/>
  - LintCode 585. 山脉序列中的最大值 <https://www.lintcode.com/problem/maximum-number-in-mountain-sequence/description>

- [快乐数](src/array/happy-number.js)

  - LeetCode 202. 快乐数 <https://leetcode-cn.com/problems/happy-number/>
  - LintCode 488. 快乐数 <https://www.lintcode.com/problem/happy-number/description>

- [最大子序和](src/array/maximum-subarray.js)

  - LeetCode 53. 最大子序和 <https://leetcode-cn.com/problems/maximum-subarray/>
  - LeetCode 面试题 42. 连续子数组的最大和 <https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/>
  - LintCode 41. 最大子数组 <https://www.lintcode.com/problem/maximum-subarray/description>

- [跳跃游戏 II](src/array/jump-game-ii.js)

  - LeetCode 45. 跳跃游戏 II <https://leetcode-cn.com/problems/jump-game-ii/>
  - LintCode 117. 跳跃游戏 II <https://www.lintcode.com/problem/jump-game-ii/description>

- [最大数和最小数](src/array/maximum-and-minimum.js)

  - LintCode 770. 最大数和最小数 <https://www.lintcode.com/problem/maximum-and-minimum/description>

- [最低票价](src/array/minimum-cost-for-tickets.js)

  - LeetCode 983. 最低票价 <https://leetcode-cn.com/problems/minimum-cost-for-tickets/>

- [最大正方形](src/array/maximal-square.js)

  - LeetCode 221. 最大正方形 <https://leetcode-cn.com/problems/maximal-square/>
  - LintCode 436. 最大正方形 <https://www.lintcode.com/problem/maximal-square/description>

- [数据流中第一个唯一的数字](src/array/first-unique-number-in-data-stream.js)

  - LintCode 685. 数据流中第一个唯一的数字 <https://www.lintcode.com/problem/first-unique-number-in-data-stream/description>

- [第一个只出现一次的字符](src/array/first-unique-character-in-a-string.js)

  - LeetCode 面试题 50. 第一个只出现一次的字符 <https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/>
  - LeetCode 387. 字符串中的第一个唯一字符 <https://leetcode-cn.com/problems/first-unique-character-in-a-string/>
  - LintCode 209. 第一个只出现一次的字符 <https://www.lintcode.com/problem/first-unique-character-in-a-string/description>

- [乘积最大子数组](src/array/maximum-product-subarray.js)

  - LeetCode 152. 乘积最大子数组 <https://leetcode-cn.com/problems/maximum-product-subarray/>
  - LintCode 191. 乘积最大子序列 <https://www.lintcode.com/problem/maximum-product-subarray/description>

- [最高频率的 IP](src/array/highest-frequency-ip.js)

  - LintCode 1613. 最高频率的 IP <https://www.lintcode.com/problem/highest-frequency-ip/description>

- [柠檬水找零](src/array/lemonade-change.js)

  - LeetCode 860. 柠檬水找零 <https://leetcode-cn.com/problems/lemonade-change/>
  - LintCode 1509. 柠檬水找零 <https://www.lintcode.com/problem/lemonade-change/description>

- [LRU 缓存机制](src/array/lru-cache.js)

  - LeetCode 146. LRU 缓存机制 <https://leetcode-cn.com/problems/lru-cache/>
  - LintCode 134. LRU 缓存策略 <https://www.lintcode.com/problem/lru-cache/description>

- [寻找重复数](src/array/find-the-duplicate-number.js)

  - LeetCode 287. 寻找重复数 <https://leetcode-cn.com/problems/find-the-duplicate-number/>
  - LintCode 633. 寻找重复的数 <https://www.lintcode.com/problem/find-the-duplicate-number/description>

- [和可被 K 整除的子数组](src/array/subarray-sums-divisible-by-k.js)

  - LeetCode 974. 和可被 K 整除的子数组 <https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/>

- [打家劫舍](src/array/house-robber.js)

  - LeetCode 198. 打家劫舍 <https://leetcode-cn.com/problems/house-robber/>
  - LintCode 392. 打劫房屋 <https://www.lintcode.com/problem/house-robber/description>

- [拥有最多糖果的孩子](src/array/kids-with-the-greatest-number-of-candies.js)

  - LeetCode 1431. 拥有最多糖果的孩子 <https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/>

- [除自身以外数组的乘积](src/array/product-of-array-except-self.js)

  - LeetCode 238. 除自身以外数组的乘积 <https://leetcode-cn.com/problems/product-of-array-except-self/>
  - LintCode 1310. 数组除了自身的乘积 <https://www.lintcode.com/problem/product-of-array-except-self/description>

- [每日温度](src/array/daily-temperatures.js)

  - LeetCode 739. 每日温度 <https://leetcode-cn.com/problems/daily-temperatures/>
  - LintCode 1060. 每日温度 <https://www.lintcode.com/problem/daily-temperatures/description>

- [最长重复子数组](src/array/maximum-length-of-repeated-subarray.js)

  - LeetCode 718. 最长重复子数组 <https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/>
  - LintCode 79. 最长公共子串 <https://www.lintcode.com/problem/longest-common-substring/description>

- [有序矩阵中第 K 小的元素](src/array/kth-smallest-element-in-a-sorted-matrix.js)

  - LeetCode 378. 有序矩阵中第 K 小的元素 <https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/>
  - LintCode 401. 排序矩阵中的从小到大第 k 个数 <https://www.lintcode.com/problem/kth-smallest-number-in-sorted-matrix/description>

- [黑名单中的随机数](src/array/random-pick-with-blacklist.ts)

  - LeetCode 710. 黑名单中的随机数 <https://leetcode.cn/problems/random-pick-with-blacklist/>

- [Z 字形变换](src/array/zigzag-conversion.ts)

  - LeetCode 6. Z 字形变换 <https://leetcode.cn/problems/zigzag-conversion/>

- [最长特殊序列 II](src/array/longest-uncommon-subsequence-ii.ts)

  - LeetCode 522. 最长特殊序列 II <https://leetcode.cn/problems/longest-uncommon-subsequence-ii/>

- [摆动排序 II](src/array/wiggle-sort-ii.ts)

  - LeetCode 324. 摆动排序 II <https://leetcode.cn/problems/wiggle-sort-ii/>

## 栈

- [最大矩阵](src/stack/maximal-rectangle.js)

  - LeetCode 85. 最大矩阵 <https://leetcode-cn.com/problems/maximal-rectangle/>
  - LintCode 510. 最大矩阵 <https://www.lintcode.com/problem/maximal-rectangle/description>

- [最小栈](src/stack/min-stack.js)

  - LeetCode 155. 最小栈 <https://leetcode-cn.com/problems/min-stack/>
  - LintCode 12. 带最小值操作的栈 <https://www.lintcode.com/problem/min-stack/description>

- [用两个栈实现队列](src/stack/yong-liang-ge-zhan-shi-xian-dui-lie-lcof.js)

  - LeetCode 剑指 Offer 09. 用两个栈实现队列 <https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/>

- [字符串解码](src/stack/decode-string.js)

  - LeetCode 394. 字符串解码 <https://leetcode-cn.com/problems/decode-string/>
  - LintCode 575. 字符串解码 <https://www.lintcode.com/problem/decode-string/description>

## 数学

- [阶乘后的零](src/math/factorial-trailing-zeroes.js)

  - LeetCode 172. 阶乘后的零 <https://leetcode-cn.com/problems/factorial-trailing-zeroes/submissions/>
  - LintCode 2. 尾部的零 <https://www.lintcode.com/problem/trailing-zeros/description>

- [丑数 II](src/math/ugly-number-ii.js)

  - LeetCode 264. 丑数 II <https://leetcode-cn.com/problems/ugly-number-ii/>
  - LintCode 4. 丑数 II <https://www.lintcode.com/problem/ugly-number-ii/description>

- [面试题 08.11. 硬币](src/math/coin-lcci.js)

  - LeetCode 面试题 08.11. 硬币 <https://leetcode-cn.com/problems/coin-lcci/>

- [全排列](src/math/permutations.js)

  - LeetCode 46. 全排列 <https://leetcode-cn.com/problems/permutations/>
  - LintCode 15. 全排列 <https://www.lintcode.com/problem/permutations/description>

- [最大数值](src/math/maximum-lcci.js)

  - LeetCode 面试题 16.07. 最大数值 <https://leetcode-cn.com/problems/maximum-lcci/>

- [回文数](src/math/palindrome-number.js)

  - LeetCode 9. 回文数 <https://leetcode-cn.com/problems/palindrome-number/>
  - LintCode 491. 回文数 <https://www.lintcode.com/problem/palindrome-number/description>

- [Pow(x, n)](src/math/powx-n.js)

  - LeetCode 50. Pow(x, n) <https://leetcode-cn.com/problems/powx-n/>
  - LintCode 428. x 的 n 次幂 <https://www.lintcode.com/problem/powx-n/description>

- [和为 K 的子数组](src/math/subarray-sum-equals-k.js)

  - LeetCode 560. 和为 K 的子数组 <https://leetcode-cn.com/problems/subarray-sum-equals-k/>
  - LintCode 838. 子数组和为 K <https://www.lintcode.com/problem/subarray-sum-equals-k/description>

- [完美数](src/math/perfect-number.js)

  - LeetCode 507. 完美数 <https://leetcode-cn.com/problems/perfect-number/>
  - LintCode 1199. 完美的数 <https://www.lintcode.com/problem/perfect-number/description>

- [寻找两个正序数组的中位数](src/math/median-of-two-sorted-arrays.js)

  - LeetCode 4. 寻找两个正序数组的中位数 <https://leetcode-cn.com/problems/median-of-two-sorted-arrays/>
  - LintCode 65. 两个排序数组的中位数 <https://www.lintcode.com/problem/median-of-two-sorted-arrays/description>

- [三数之和](src/math/3sum.js)

  - LeetCode 15. 三数之和 <https://leetcode-cn.com/problems/3sum/>
  - LintCode 57. 三数之和 <https://www.lintcode.com/problem/3sum/description>

- [二进制求和](src/math/add-binary.js)

  - LeetCode 67. 二进制求和 <https://leetcode-cn.com/problems/add-binary/>
  - LintCode 408. 二进制求和 <https://www.lintcode.com/problem/add-binary/description>

- [最接近的三数之和](src/math/3sum-closest.ts)

  - LeetCode 16. 最接近的三数之和 <https://leetcode.cn/problems/3sum-closest/>

- [四数之和](src/math/4sum.ts)

  - LeetCode 18. 四数之和 <https://leetcode.cn/problems/4sum/>

## 堆

- [超级丑数](src/stack/super-ugly-number.js)【未完成】

  - LeetCode 313. 超级丑数 <https://leetcode-cn.com/problems/super-ugly-number/>
  - LintCode 518. 超级丑数 <https://www.lintcode.com/problem/super-ugly-number/description>

## 树

- [二叉树的右视图](src/tree/binary-tree-right-side-view.js)

  - LeetCode 199. 二叉树的右视图 <https://leetcode-cn.com/problems/binary-tree-right-side-view/>
  - LintCode 760. 二叉树的右视图 <https://www.lintcode.com/problem/binary-tree-right-side-view/description>

- [验证二叉搜索树](src/tree/validate-binary-search-tree.js)

  - LeetCode 98. 验证二叉搜索树 <https://leetcode-cn.com/problems/validate-binary-search-tree/>
  - LintCode 95. 验证二叉查找树 <https://www.lintcode.com/problem/validate-binary-search-tree/description>

- [二叉树的最近公共祖先](src/tree/lowest-common-ancestor-of-a-binary-tree.js)

  - LeetCode 236. 二叉树的最近公共祖先 <https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/>
  - LintCode 88. 最近公共祖先 <https://www.lintcode.com/problem/lowest-common-ancestor-of-a-binary-tree/description>

- [另一个树的子树](src/tree/subtree-of-another-tree.js)

  - LeetCode 572. 另一个树的子树 <https://leetcode-cn.com/problems/subtree-of-another-tree/>
  - LintCode 1165. 另一个树的子树 <https://www.lintcode.com/problem/subtree-of-another-tree/description>

- [二叉树的层序遍历](src/tree/binary-tree-level-order-traversal.js)

  - LeetCode 102. 二叉树的层序遍历 <https://leetcode-cn.com/problems/binary-tree-level-order-traversal/>
  - LintCode 69. 二叉树的层次遍历 <https://www.lintcode.com/problem/binary-tree-level-order-traversal/description>

- [二叉树的层次遍历 II](src/tree/binary-tree-level-order-traversal-ii.js)

  - LeetCode 107. 二叉树的层次遍历 II <https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/>
  - LintCode 70. 二叉树的层次遍历 II <https://www.lintcode.com/problem/binary-tree-level-order-traversal-ii/description>

- [从前序与中序遍历序列构造二叉树](src/tree/construct-binary-tree-from-preorder-and-inorder-traversal.js)

  - LeetCode 105. 从前序与中序遍历序列构造二叉树 <https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/>
  - LintCode 73. 前序遍历和中序遍历树构造二叉树 <https://www.lintcode.com/problem/construct-binary-tree-from-preorder-and-inorder-traversal/description>

- [将有序数组转换为二叉搜索树](src/tree/convert-sorted-array-to-binary-search-tree.js)

  - LeetCode 108. 将有序数组转换为二叉搜索树 <https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/>
  - LintCode 106. 有序链表转换为二叉搜索树 <https://www.lintcode.com/problem/convert-sorted-list-to-binary-search-tree/description>

- [不同的二叉搜索树](src/tree/unique-binary-search-trees.js)

  - LeetCode 96. 不同的二叉搜索树 <https://leetcode-cn.com/problems/unique-binary-search-trees/>

## 链表

- [合并 K 个排序链表](src/list/merge-k-sorted-lists.js)

  - LeetCode 23. 合并 K 个排序链表 <https://leetcode-cn.com/problems/merge-k-sorted-lists/>
  - LintCode 104. 合并 k 个排序链表 <https://www.lintcode.com/problem/merge-k-sorted-lists/description>

- [合并两个有序链表](src/list/merge-two-sorted-lists.js)

  - LeetCode 21. 合并两个有序链表 <https://leetcode-cn.com/problems/merge-two-sorted-lists/>
  - LeetCode 面试题 25. 合并两个排序的链表 <https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof>
  - LintCode 165. 合并两个排序链表 <https://www.lintcode.com/problem/merge-two-sorted-lists/description>

- [链表排序](src/list/sort-list.js)

  - LeetCode 148. 排序链表 <https://leetcode-cn.com/problems/sort-list/>
  - LintCode 98. 链表排序 <https://www.lintcode.com/problem/sort-list/description>

- [环形链表](src/list/linked-list-cycle.js)

  - LeetCode 141. 环形链表 <https://leetcode-cn.com/problems/linked-list-cycle/>
  - LintCode 102. 带环链表 <https://www.lintcode.com/problem/linked-list-cycle/description>

- [链表的中间结点](src/list/middle-of-the-linked-list.js)

  - LeetCode 876. 链表的中间结点 <https://leetcode-cn.com/problems/middle-of-the-linked-list/>
  - LintCode 1609. 链表的中间结点 <https://www.lintcode.com/problem/middle-of-the-linked-list/description>

- [K 个一组翻转链表](src/list/reverse-nodes-in-k-group.js)

  - LeetCode 25. K 个一组翻转链表 <https://leetcode-cn.com/problems/reverse-nodes-in-k-group/>
  - LintCode 450. K 组翻转链表 <https://www.lintcode.com/problem/reverse-nodes-in-k-group/description>

- [两两交换链表中的节点](src/list/swap-nodes-in-pairs.ts)

  - LeetCode 24. 两两交换链表中的节点 <https://leetcode.cn/problems/swap-nodes-in-pairs/>

## 图

- [课程表](src/graphs/course-schedule-ii.js)

  - LeetCode 210. 课程表 II <https://leetcode-cn.com/problems/course-schedule-ii/>
  - LeetCode 207. 课程表 <https://leetcode-cn.com/problems/course-schedule/>
  - LintCode 615. 课程表 <https://www.lintcode.com/problem/course-schedule/description>
