import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      access_token?: string;
      refresh_token?: string;
      firstName: string;
      companyName: string;
      roles: string[];
    } & DefaultSession["user"];
  }
}
