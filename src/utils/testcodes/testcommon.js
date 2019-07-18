import { isNumber, gt } from "lodash"

/*
 * 渡された数値が 100 を超えるかどうか
 * @param {object} target 検索対象のオブジェクト
*/
export function isOver100(value) {
  if (!isNumber(value)) return false
  return gt(value, 100)
}