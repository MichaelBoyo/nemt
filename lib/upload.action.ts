"use server";

import { baseUrl } from ".";
import { getServerAuthSession } from "./authoptions";

export const uploadFIle = async (form: FormData) => {
  const session = await getServerAuthSession();
  console.log(session?.user);
  const file = form.get("file") as File;
  const brokerName = form.get("brokerName") as string;

  try {
    const body = new FormData();
    body.append("file", file);
    body.append("provider-email", session?.user?.email);
    body.append("broker-name", brokerName);
    const res = await fetch(`${baseUrl}/brokers/import`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${session?.user?.access_token}`,
      },
      body,
    });
    console.log({ res });
  } catch (error) {
    console.log(error);
  }
};
