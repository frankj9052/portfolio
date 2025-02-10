import { isValidDate } from '../dateUtils';

describe('isValidDate', () => {
  // 测试有效的日期字符串
  test('returns true for valid date strings', () => {
    expect(isValidDate('2023-10-05')).toBe(true);
    expect(isValidDate('2023-10-05T14:30:00.000Z')).toBe(true);
    expect(isValidDate('October 5, 2023')).toBe(true);
  });

  // 测试无效的日期字符串
  test('returns false for invalid date strings', () => {
    expect(isValidDate('invalid-date')).toBe(false);
    expect(isValidDate('2023-02-30')).toBe(false); // 无效的日期
    expect(isValidDate('')).toBe(false); // 空字符串
  });

  // 测试有效的时间戳
  test('returns true for valid timestamps', () => {
    expect(isValidDate(1696521600000)).toBe(true); // 2023-10-05 的时间戳
  });

  // 测试无效的时间戳
  test('returns false for invalid timestamps', () => {
    expect(isValidDate(NaN)).toBe(false);
    expect(isValidDate(Infinity)).toBe(false);
  });

  // 测试边界情况
  test('returns false for non-date values', () => {
    expect(isValidDate(null as unknown as string)).toBe(false);
    expect(isValidDate(undefined as unknown as string)).toBe(false);
    expect(isValidDate({} as unknown as string)).toBe(false);
  });
});