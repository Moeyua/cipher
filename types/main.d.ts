interface CipherOptions {
    length?: number;
    uppercase?: boolean;
    lowercase?: boolean;
    numbers?: boolean;
    symbols?: boolean;
    charset?: string;
}
declare function cipher(options?: CipherOptions): string;
export { cipher };
