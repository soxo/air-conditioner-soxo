/*
 * @Description: 
 * @Author: 简艾
 * @Email: 137333@163.com
 * @Date: 2017-12-15 16:51:10
 * @LastEditTime: 2024-07-30 19:37:31
 * @LastEditors: 简艾
*/
export const getAssetURL = (assetsURL: string) => {
  // 参数一: 相对路径
  // 参数二: 当前路径的URL
  return new URL(`../assets/${assetsURL}`, import.meta.url).href;
};
