"use server";
const baseUrl = process.env.API_URL;
export const signIn = async (email: string, password: string) => {
  try {
    const res = await fetch(`${baseUrl}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    return data;
    // Do something
  } catch (error) {
    throw error;
  }
};

export const signUp = async (formData: FormData) => {
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
    console.log(data);

    return data;
    // Do something
  } catch (error) {
    console.log(error);
  }
};

export const verifyEmail = async (email: string, otp: string) => {
  try {
    const res = await fetch(`${baseUrl}users/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();

    return data;
    // Do something
  } catch (error) {
    throw error;
  }
};
