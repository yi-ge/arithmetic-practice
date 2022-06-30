/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const permute = function (nums) {
  const res = [];
  const backtrack = (path = []) => {
    if (path.length === nums.length) res.push(path);
    for (const n of nums) {
      !path.includes(n) && backtrack(path.concat(n));
    }
  };
  backtrack();
  return res;
};
