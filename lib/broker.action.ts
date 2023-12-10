"use server";
import { revalidatePath } from "next/cache";
import { baseUrl } from ".";
import { getServerAuthSession } from "./authoptions";

export const inviteBroker = async (_: any, formData: FormData) => {
  const session = await getServerAuthSession();
  const providerEmail = session?.user?.email;
  const brokerName = formData.get("brokerName") as string;
  try {
    const res = await fetch(`${baseUrl}/brokers/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.access_token}`,
      },
      body: JSON.stringify({ brokerName, providerEmail }),
    });
    if (res.ok) {
      return {
        ok: true,
      };
    } else if (res.status === 400) {
      return await res.json();
    } else {
      return { status: res.status };
    }
  } catch (error) {
    return { error: "wahala" };
  } finally {
    revalidatePath("/brokers");
  }
};
