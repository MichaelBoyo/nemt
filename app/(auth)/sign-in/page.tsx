import { Submit } from "~/components/Submit";
import { signUp } from "~/lib/auth.action";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="w-1/2 flex flex-col  gap-10 p-36">
      <h1 className="text-bold text-3xl">Welcome back</h1>
      <p>
        Get ready to enjoy all the features and benefits we have to offer. It
        iss quick, easy, and free!
      </p>
      <form className="flex flex-col  gap-4  " action={signUp}>
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
        <Link className="text-primary" href={"/forgot-password"}>
          Forgot password?
        </Link>
        <Submit>Sign Up</Submit>
      </form>
    </div>
  );
}
