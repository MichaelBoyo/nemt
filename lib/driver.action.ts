"use server";
import { baseUrl } from ".";
import { getServerAuthSession } from "./authoptions";

export const inviteDriver = async (_: any, formData: FormData) => {
  console.log({ formData });
  const session = await getServerAuthSession();
  console.log({ session });
  const providerEmail = session?.user?.email;
  const driverEmail = formData.get("driverEmail") as string;
  console.log({ driverEmail });
  try {
    const res = await fetch(`${baseUrl}/profile/providers/invite/drivers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.access_token}`,
      },
      body: JSON.stringify({ driverEmail, providerEmail }),
    });
    if (res.ok) {
      return await res.json();
    } else if (res.status === 400) {
      return await res.json();
    } else {
      console.log({ res });
      return { status: res.status };
    }
  } catch (error) {
    console.log(error);
    return { error: "wahals" };
  }
};
