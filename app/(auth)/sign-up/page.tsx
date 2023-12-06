"use client";
import { useEffect } from "react";
import { Submit } from "~/components/Submit";
import { redirect } from "next/navigation";
import { signUp } from "~/lib/auth.action";
import { useFormState } from "react-dom";

export default function SignUp() {
  const [formState, formAction] = useFormState(signUp, {
    error: undefined,
    data: undefined,
  });
  useEffect(() => {
    if (formState.data) {
      redirect(`/verify-email?email=${formState.data?.email}`);
    }
  }, [formState.data]);

  return (
    <div className="w-1/2 flex flex-col  gap-10 p-36">
      <h1 className="text-bold text-3xl">Welcome to NEMT</h1>
      <p>
        Get ready to enjoy all the features and benefits we have to offer. It
        iss quick, easy, and free!
      </p>
      <form className="flex flex-col  gap-4 " action={formAction}>
        <input
          className="input input-bordered"
          name="companyName"
          type="text"
          placeholder="Google Inc"
        />
        <input
          className="input input-bordered"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="input input-bordered"
          name="password"
          type="password"
          placeholder="*****8"
        />
        {formState.error && <div className="">{formState.error}</div>}
        <Submit>Sign Up</Submit>
      </form>
    </div>
  );
}
