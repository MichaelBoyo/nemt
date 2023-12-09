"use server";

import { baseUrl } from ".";
// import { read, utils } from "xlsx";
import { getServerAuthSession } from "./authoptions";

export const uploadFIle = async (form: FormData) => {
  const session = await getServerAuthSession();
  const file = form.get("file") as File;
  const brokerName = form.get("brokerName") as string;
  //   const buffr = await file.arrayBuffer();

  //   const wb = read(buffr);

  //   const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
  //   console.log({ data });

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
