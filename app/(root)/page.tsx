import CoordinatePage from "~/components/home/CordinatePage";
import bg from "~/public/assets/landing-img.png";
import footerBg from "~/public/assets/footer-img-1.png";
import footerBg2 from "~/public/assets/footrr-img.png";
import { Submit } from "~/components/Submit";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "react-feather";
export default function Home() {
  return (
    <main className="h-screen ">
      <section
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
        className=" bg-cover bg-center bg-no-repeat h-full py-20  text-white flex flex-col gap-20 items-center justify-center"
      >
        <div className=" text-center  text-white text-[64px] font-bold ">
          Automate your NEMT existing <br /> workflow and scale.
        </div>
        <div className=" text-center text-neutral-100 text-2xl font-medium  w-[50%] ">
          &quot;Providing you with the tools and support necessary to streamline
          your business operations, freeing up your time and resources to focus
          on driving growth and delivering an exceptional customer
          experience&quot;
        </div>
        <button className="btn btn-primary btn-lg rounded-full">
          Get Started
        </button>
      </section>
      <CoordinatePage />
      <section className="  h-full   text-white flex flex-col justify-between">
        <div
          className="bg-cover h-2/4 bg-center bg-no-repeat w-full flex flex-col gap-20 py-10 items-center justify-center"
          style={{
            backgroundImage: `url(${footerBg.src})`,
          }}
        >
          <div>
            <span className="text-neutral-800 text-5xl font-bold font-['Trip Sans']">
              Why we are{" "}
            </span>
            <span className="text-primary text-5xl font-bold font-['Trip Sans']">
              different
            </span>
          </div>
          <div className="w-[1102px] text-center text-neutral-500 text-2xl font-medium font-['Trip Sans']">
            What truly sets us apart is our commitment to providing exceptional
            customer support. Our team is available 24/7 to answer any questions
            or concerns you may have, and we work closely with you to ensure
            that our system is customized to meet your specific needs.
          </div>
        </div>
        <div
          className="bg-cover h-2/4 bg-center bg-no-repeat w-full flex flex-col gap-20 py-10  px-20 justify-center"
          style={{
            backgroundImage: `url(${footerBg2.src})`,
          }}
        >
          <form className="flex flex-col bg-base-100 rounded-lg p-10 gap-5 w-max ">
            <div className="w-[318px] text-neutral-800 text-2xl font-medium font-['Trip Sans']">
              Ready, set, go in just a few quick taps
            </div>
            <input
              className="input input-bordered"
              placeholder="Enter pick-up location"
            />
            <input
              className="input input-bordered"
              placeholder="Enter pick-up location"
            />

            <Submit>Book ride</Submit>
          </form>
        </div>
      </section>
      <footer>
        <div className=" bg-info p-20 flex justify-between">
          <div className="flex flex-col gap-10">
            <div className="w-[592px] text-neutral-800 text-5xl font-bold font-['Trip Sans']">
              Your ride is few minutes away!
            </div>
            <div className="w-[590px] text-neutral-500 text-2xl font-medium font-['Trip Sans']">
              With our app, we get to improve health outcomes and reduce risk by
              thoughtfully managing transportation benefits for Medicare,
              Medicaid e.t.c
            </div>
          </div>
          <Image
            src="/assets/image/phone-group.png"
            alt=""
            width={0}
            height={0}
            className="h-[30vh] w-max"
          />
        </div>
        <div className="bg-black text-white">
          <div className="flex justify-between border-b p-20 border-slate-500">
            Logo
            <div className="flex gap-10">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
          <ul className="flex px-20 gap-10 py-4">
            {fLinks.map((link, index) => (
              <li
                key={index}
                className="text-neutral-400 text-base font-medium"
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </main>
  );
}

const fLinks = [
  {
    name: "Terms of Service",
    link: "/terms",
  },
  {
    name: "Cookie Policy",
    link: "/terms",
  },
  {
    name: "FAQ",
    link: "/terms",
  },
  {
    name: "Support",
    link: "/terms",
  },
  {
    name: "Careers",
    link: "/terms",
  },
];
