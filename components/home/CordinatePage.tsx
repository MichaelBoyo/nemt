import Image from "next/image";

import CoordinatesBox from "../CordinateBos";

const CoordinatePage = () => {
  return (
    <section className="w-full px-10 py-20 flex flex-col gap-20 h-full  items-center ">
      <div className=" w-full flex flex-col items-center justify-center">
        <h3 className="text-center text-neutral-800 text-5xl font-bold">
          Coordinate from one place
        </h3>
        <Image
          src={"/assets/image/Ellipse.svg"}
          alt=""
          width={10}
          height={10}
          className=" w-[10vw]"
        />
      </div>
      <div className="flex justify-around items-center h-4/5 px-[10vw] w-full">
        <div className="flex flex-col gap-10">
          <CoordinatesBox
            image={"/assets/image/Mail.svg"}
            header="AutoDispatch"
            content="Efficiently manage your NEMT business. Our smart dispatching system uses real-time data to automatically assign drivers to trips, 
                        reducing waiting times and ensuring timely pickups and drop-offs for your clients"
          />
          <CoordinatesBox
            image={"/assets/image/Billing.svg"}
            header="Billing and invoicing"
            content="Generate invoices for completed rides and ensure timely payment from clients. Keep track of billing history all in one place and save time for your business."
          />
        </div>
        <Image
          src={"/assets/image/Telephone.svg"}
          alt="hhshs"
          width={10}
          height={10}
          className="h-full w-full"
        />
        <div className="flex flex-col gap-10">
          <CoordinatesBox
            image={"/assets/image/DriversAndVehicles.svg"}
            header="Manage Drivers and Vehicles"
            content="Manage and keep track of your drivers and vehicles all in one place to avoid the hassle of switching between multiple platforms. Stay on top of vehicle maintenance schedules, to maximize efficiency and minimize downtime."
          />
          <CoordinatesBox
            image={"/assets/image/Customizable.svg"}
            header="Customizable reporting:"
            content="Generate reports on everything from vehicle usage to driver performance, and tailor them to your unique needs. Make data-driven decisions and optimize your operations"
          />
        </div>
      </div>

      {/* <div className="coordinate-dispatch">
        <div className="auto-dispatch">
          <div style={{ width: "90%", height: "45%" }}>
            <CoordinatesBox
              image={"/assets/image/Mail.svg"}
              header="AutoDispatch"
              content="Efficiently manage your NEMT business. Our smart dispatching system uses real-time data to automatically assign drivers to trips, 
                        reducing waiting times and ensuring timely pickups and drop-offs for your clients"
            />
          </div>
          <div style={{ width: "90%", height: "45%" }}>
            <CoordinatesBox
              image={"/assets/image/Billing.svg"}
              header="Billing and invoicing"
              content="Generate invoices for completed rides and ensure timely payment from clients. Keep track of billing history all in one place and save time for your business."
            />
          </div>
        </div>
        <div className="desktop-telephone">
          <Image
            width={0}
            height={0}
            src={"/assets/image/DesktopTelephone.svg"}
            alt=""
          />
        </div>
        <div className="manage-drivers">
          <div style={{ width: "90%", height: "45%" }}>
            <CoordinatesBox
              image={"/assets/image/DriversAndVehicles.svg"}
              header="Manage Drivers and Vehicles"
              content="Manage and keep track of your drivers and vehicles all in one place to avoid the hassle of switching between multiple platforms. Stay on top of vehicle maintenance schedules, to maximize efficiency and minimize downtime."
            />
          </div>
          <div style={{ width: "90%", height: "45%" }}>
            <CoordinatesBox
              image={"/assets/image/Customizable.svg"}
              header="Customizable reporting:"
              content="Generate reports on everything from vehicle usage to driver performance, and tailor them to your unique needs. Make data-driven decisions and optimize your operations"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default CoordinatePage;
