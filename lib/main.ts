interface CipherOptions {
  length?: number;
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
  charset?: string;
}

const defaultOptions: CipherOptions = {
  length: 10,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  charset:
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|;:"<>,.?/',
};

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = '!@#$%^&*()_+-={}[]|;:"<>,.?/';

function cipher(options: CipherOptions = {}): string {
  const { length, uppercase, lowercase, numbers, symbols, charset } = {
    ...defaultOptions,
    ...options,
  };

  let chars = "";

  if (charset) {
    chars = charset;
  } else {
    if (uppercase) {
      chars += uppercaseChars;
    }

    if (lowercase) {
      chars += lowercaseChars;
    }

    if (numbers) {
      chars += numberChars;
    }

    if (symbols) {
      chars += symbolChars;
    }
  }

  let password = "";

  for (let i = 0; i < (length as number); i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

export { cipher };
