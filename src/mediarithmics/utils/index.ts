export type Index<T> = { [key: string]: T };
export type Option<T> = T | undefined;

export const map = <A, B>(a: Option<A>, f: (a: A) => B): Option<B> => {
  return a ? f(a) : undefined;
};

export const flatMap = <A, B>(a: Option<A>, f: (a: A) => Option<B>): Option<B> => {
  return a ? f(a) : undefined;
};

export const getOrElse = <T>(t: Option<T>, _default: T): T => {
  return t ? t : _default;
};

export const obfuscateString = (rawString?: string): string | undefined => {
  if (!rawString) {
    return undefined;
  }
  const stringLength = rawString.length;
  if (stringLength === 0) {
    return '';
  } else {
    const clearSize = Math.floor(0.3 * stringLength);
    const clear = rawString.substring(0, clearSize);
    const obfuscated = 'X'.repeat(stringLength - clearSize);
    return clear + obfuscated;
  }
};
