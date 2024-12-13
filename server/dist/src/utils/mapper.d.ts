export declare function exclude<T, Key extends keyof T>(model: T, ...keys: Key[]): Omit<T, Key>;
export declare function mapper<T1, T2>(target: T1, source: T2, transform?: (obj: T1) => void): T1;
