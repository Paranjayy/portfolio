import { formatIncompletePhoneNumber } from "@/lib/libphonenumber";

export function decodeEmail(email: string) {
  try {
    // fast check: if it has @, it's likely plain text
    if (email.includes("@")) return email;
    return atob(email);
  } catch {
    return email;
  }
}

export function decodePhoneNumber(phone: string) {
  try {
    // fast check: if it looks like a phone number (digits, +, spaces, parens, dashes) and is not obviously base64
    // But base64 can have + and / and digits.
    // However, phone numbers usually don't have letters. Base64 usually does.
    if (/[a-zA-Z]/.test(phone) && !/[@.]/.test(phone)) {
       // has letters, likely base64 (unless it's an extension like "ext").
       // But if it fails atob, we return original.
       return atob(phone);
    }
    return phone;
  } catch {
    return phone;
  }
}

export function formatPhoneNumber(phone: string) {
  return formatIncompletePhoneNumber(phone);
}
