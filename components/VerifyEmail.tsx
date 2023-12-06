"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
// @ts-ignore
import { MuiOtpInput } from "mui-one-time-password-input";
import { baseUrl } from "~/lib";
export default function VeriifyEmail({ searchParams }: { searchParams: any }) {
  const [otp, setOTP] = useState("");
  const handleChange = (newValue: any) => {
    setOTP(newValue);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/users/verify`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: searchParams?.email, otp }),
      });
      const data = await res.json();
      if (data) {
        redirect("/sign-in");
      }

      return data;
      // Do something
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="w-1/2 flex flex-col  items-center gap-10 p-36">
      <h1 className="text-bold text-3xl">Verify your Email</h1>
      <p>
        A verification code was sent to you email &quot;{searchParams?.email}
        &quot;,
        <br /> Kindly input the code below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 "
      >
        <div className="flex justify-center">
          <MuiOtpInput
            style={{ width: "50%" }}
            value={otp}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-[200px] ">
          Submit
        </button>
      </form>
    </div>
  );
}
