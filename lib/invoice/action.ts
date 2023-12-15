"use server";
import { axiosInstance } from "..";
import { getServerAuthSession } from "../authoptions";

export const generateInvoice = async (_: any, form: FormData) => {
  const session = await getServerAuthSession();
  console.dir({ form }, { depth: null });
  try {
    const res = await axiosInstance.post(
      "/invoices/generate",
      {
        providerEmail: session?.user.email,
        driverEmail: form.get("driverEmail") as string,
        brokerId: Number(form.get("brokerId") as string),
        brokerOrderId: Number(form.get("brokerOrderId") as string),
        milestone: "50miles",
        signatureUrl: "https://google.con",
        loadedMiles: "30miles",
        unloadedMiles: "20miles",
        costOverride: "20miles",
      },
      {
        headers: {
          Authorization: `Bearer ${session?.user.access_token}`,
        },
      }
    );
    console.log(res.data);
    return {
      message: "",
      data: "",
    };
  } catch (error: any) {
    // console.dir({ error }, { depth: null });
    return {
      message: error?.response?.data?.message,
      data: undefined,
    };
  } finally {
  }
};
