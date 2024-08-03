/*
 * @Description:  
 * @Author: 简艾
 * @Email: 137333@163.com
 * @Date: 2017-12-15 16:51:10
 * @LastEditTime: 2024-07-30 19:37:31
 * @LastEditors: 简艾
*/
export const getRelativePointer = ({ x, y }: PointerEvent, { top, left }: DOMRect): Partial<DOMRect> => ({
  x: x - left,
  y: y - top,
});
