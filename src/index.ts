/***
 * @file:
 * @author: caojianping
 * @Date: 2023-03-30 15:44:16
 */

/**
 * 加减乘除计算器（解决精度问题）
 */
export default class Calculator {
  /**
   * 加法运算
   * @param num1 数字1
   * @param num2 数字2
   * @param precision 精度
   * @returns 返回运算结果
   */
  public static add(num1: number, num2: number, precision: number = 0): number {
    let parts1 = (String(num1) || '').split('.'),
      parts2 = (String(num2) || '').split('.'),
      decimal1 = parts1.length === 2 ? parts1[1] : '',
      decimal2 = parts2.length === 2 ? parts2[1] : '',
      maxLen = Math.max(decimal1.length, decimal2.length),
      pow = Math.pow(10, maxLen),
      result = Number(((num1 * pow + num2 * pow) / pow).toFixed(maxLen));
    return precision !== undefined ? Number(result.toFixed(precision)) : result;
  }

  /**
   * 减法运算
   * @param num1 数字1
   * @param num2 数字2
   * @param precision 精度
   * @returns 返回运算结果
   */
  public static subtract(num1: number, num2: number, precision: number = 0) {
    return Calculator.add(num1, -num2, precision);
  }

  /**
   * 乘法运算
   * @param num1 数字1
   * @param num2 数字2
   * @param precision 精度
   * @returns 返回运算结果
   */
  public static multiply(num1: number, num2: number, precision: number = 0): number {
    let str1 = String(num1) || '',
      str2 = String(num2) || '',
      parts1 = str1.split('.'),
      parts2 = str2.split('.'),
      len1 = parts1[1] ? parts1[1].length : 0,
      len2 = parts2[1] ? parts2[1].length : 0,
      pow = len1 + len2,
      result = (Number(str1.replace('.', '')) * Number(str2.replace('.', ''))) / Math.pow(10, pow);
    return precision !== undefined ? Number(result.toFixed(parseInt(String(precision)))) : Number(result);
  }

  /**
   * 除法运算
   * @param num1 数字1
   * @param num2 数字2
   * @param precision 精度
   * @returns 返回运算结果
   */
  public static divide(num1: number, num2: number, precision: number = 0): number {
    let str1 = String(num1) || '',
      str2 = String(num2) || '',
      parts1 = str1.split('.'),
      parts2 = str2.split('.'),
      len1 = parts1[1] ? parts1[1].length : 0,
      len2 = parts2[1] ? parts2[1].length : 0,
      pow = len2 - len1,
      result = (Number(str1.replace('.', '')) / Number(str2.replace('.', ''))) * Math.pow(10, pow);
    return precision !== undefined ? Number(result.toFixed(parseInt(String(precision)))) : Number(result);
  }
}
