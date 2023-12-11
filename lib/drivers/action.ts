"use server";
import { revalidatePath } from "next/cache";
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
    // const data = await res.json();
    // console.log("data =>>>>>>>>>>>>>>>", data);
    if (res.statusText === "OK") {
      return {
        message: "Driver invited successfully",
        success: true,
      };
    } else if (res.status === 400) {
      return await res.json();
    } else {
      return { status: res.status };
    }
  } catch (error) {
    console.log({ error });
    return { error: "an error occured" };
  } finally {
    revalidatePath("/drivers");
  }
};

export const assignTripToDriver = async (_: any, formData: FormData) => {
  console.dir({ formData }, { depth: null });
  const brokerId = formData.get("brokerId") as string;
  const containerId = (formData.get("containerId") as string) || 0;
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
      const data = await res.json();
      return {
        data,
        message: undefined,
      };
    } else if (res.status === 400) {
      const data = await res.json();
      return {
        message: data.message,
        data: undefined,
      };
    } else {
      return {
        message: "",
        data: undefined,
      };
    }
  } catch (error) {
    return {
      message: "an error occured",
      data: undefined,
    };
  } finally {
    revalidatePath("/brokers/[brokerName]");
  }
};
