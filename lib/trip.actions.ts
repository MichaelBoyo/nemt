"use server";
import { baseUrl } from ".";
import { getServerAuthSession } from "./authoptions";

export const assignDriver = async (_: any, form: FormData) => {
  const session = await getServerAuthSession();
  const driverEmail = form.get("email") as string;
  try {
    const res = await fetch(
      `${baseUrl}/profile/providers/assign/trip/${session?.user?.email}/:brokerId/:containerId/:brokerOrderId?driver=${driverEmail}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.access_token}`,
        },
      }
    );
    return {
      data: undefined,
      message: undefined,
    };
  } catch (error) {
    console.log(error);
    return {
      data: undefined,
      message: undefined,
    };
  } finally {
    return {
      data: undefined,
      message: undefined,
    };
  }
};
