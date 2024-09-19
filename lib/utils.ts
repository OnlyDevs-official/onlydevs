import { type ClassValue, clsx } from "clsx";
import { FormEvent } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function Web3FormApi(e: FormEvent<HTMLFormElement>) {
  const form = e.target as HTMLFormElement;
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: form.email.value,
      message: form.message.value,
    }),
  });
  return await response.json();
}
