import NavBar from "@/components/NavBar";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import coinsImage from "../../public/Group 1691.png";
import rocketImg from '../../public/rocket.svg'
import vaultImg from '../../public/vault.svg'
import wifiImg from '../../public/wifi.svg'

export default function Home() {
  useEffect(() => {
    const axios = require("axios");

    const config = {
      method: "get",
      url: "https://api.vehicledatabases.com/vehicle-history/{vin}",
      headers: {
        "x-AuthKey": "{X-AUTHKEY}",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <main className="min-h-screen relative">
      <div>
        <NavBar />
      </div>
      <section className="flex flex-col justify-center gap-8 h-screen px-12">
        <h1 className="text-3xl font-semibold">Welcome, Emmanuel!</h1>
        <div className="grid grid-cols-4 items-center justify-items-center">
          <Link href={'/overview'} className="rounded-md w-full h-full grid justify-center">
            <Image src={coinsImage} alt="coins" className="mx-auto" />
            <p>Estimation Lab</p>
          </Link>
          <Link href={'/overview'} className="rounded-md w-full h-full grid justify-center">
            <Image src={rocketImg} alt="coins" className="mx-auto" />
            <p>Projects Control System</p>
          </Link>
          <Link href={'/overview'} className="rounded-md w-full h-full grid justify-center">
            <Image src={vaultImg} alt="coins" className="mx-auto" />
            <p>Resources Module</p>
          </Link>
          <Link href={'/overview'} className="rounded-md w-full h-full grid justify-center">
            <Image src={wifiImg} alt="coins" className="mx-auto" />
            <p>Reports</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
