import { baseUrl } from "..";
import { getServerAuthSession } from "../authoptions";

export const getDrivers = async () => {
  const session = await getServerAuthSession();
  const res = await fetch(
    `${baseUrl}/profile/providers/drivers?email=${session?.user.email}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.user.access_token,
      },
    }
  );
  if (res.ok) {
    return await res.json();
  }
  return null;
};
