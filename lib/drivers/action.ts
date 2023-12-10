"use server";
import { baseUrl } from "..";
import { getServerAuthSession } from "../authoptions";

export const inviteDriver = async (_: any, formData: FormData) => {
  const session = await getServerAuthSession();
  const providerEmail = session?.user?.email;
  const driverEmail = formData.get("driverEmail") as string;
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
      return { status: res.status };
    }
  } catch (error) {
    return { error: "an error occured" };
  }
};

export const assignTripToDriver = async (formData: FormData) => {
  console.log({ formData });
  const brokerId = formData.get("brokerId") as string;
  const containerId = formData.get("containerId") as string;
  const brokerOrderId = formData.get("brokerOrderId") as string;
  const driverEmail = formData.get("driverEmail") as string;
  const session = await getServerAuthSession();
  try {
    const res = await fetch(
      `${baseUrl}/profile/providers/assign/trip/${session?.user.email}/${brokerId}/${containerId}/${brokerOrderId}?driver=${driverEmail}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.access_token}`,
        },
      }
    );
    if (res.ok) {
      return await res.json();
    } else if (res.status === 400) {
      return await res.json();
    } else {
      return { status: res.status };
    }
  } catch (error) {
    console.log(error);
  }
};
