import { getServerAuthSession } from "~/lib/authoptions";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div className="grow p-6">
      {JSON.stringify(session)}
      <div className="card bg-primary w-full text-white">
        <div className="card-body">
          <h1 className="card-title">Passengers satisfaction</h1>
          <p>
            Connect with a broad variety of driver and enjoy satisfying and
            relaxing trips to your destinations.
          </p>
        </div>
      </div>
    </div>
  );
}
