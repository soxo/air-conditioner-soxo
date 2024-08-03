/*
 * @Description:  
 * @Author: 简艾
 * @Email: 137333@163.com
 * @Date: 2017-12-15 16:51:10
 * @LastEditTime: 2024-07-30 19:37:31
 * @LastEditors: 简艾
*/
const RIPPLE_COUNT = "vRippleCountInternal";
function setRippleCount(el: HTMLElement, count: number) {
  el.dataset[RIPPLE_COUNT] = count.toString();
}

export function getRippleCount(el: HTMLElement): number {
  return parseInt(el.dataset[RIPPLE_COUNT] ?? "0", 10);
}

export function incrementRippleCount(el: HTMLElement): void {
  const count = getRippleCount(el);
  setRippleCount(el, count + 1);
}

export function decrementRippleCount(el: HTMLElement): void {
  const count = getRippleCount(el);
  setRippleCount(el, count - 1);
}

export function deleteRippleCount(el: HTMLElement): void {
  delete el.dataset[RIPPLE_COUNT];
}
