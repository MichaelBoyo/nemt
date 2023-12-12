"use server";
import { FormState } from "~/types/form.state";

const baseUrl = process.env.API_URL;

export const signIn = async (email: string, password: string) => {
  try {
    const res = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error("Invalid username or password");

    // Do something
  } catch (error) {
    throw error;
  }
};

export const signUp = async (_: FormState, formData: FormData) => {
  try {
    const res = await fetch(`${baseUrl}/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName: formData.get("companyName"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const data = await res.json();

    return { data };
  } catch (error) {
    return { error: "error in catch" };
  }
};
