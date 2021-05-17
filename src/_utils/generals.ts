/**
 *
 * @param suffixCls
 * @param contextPrefix
 * @param customisedCls
 * @returns
 */

export const getPrefixCls = (
  suffixCls: string,
  contextPrefix?: string,
  customisedCls?: string
): string => {
  if (customisedCls) {
    return customisedCls;
  }
  return contextPrefix ? `${contextPrefix}-${suffixCls}` : `opt-${suffixCls}`;
};
