import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { VisaContext } from "../provider/VisaProvider";

export default function MyAddedVisas() {
  const { user } = useContext(AuthContext);
  const { visas } = useContext(VisaContext);
  const [myAddedVisas, setMyAddedVisas] = useState([]);

  useEffect(() => {
    setMyAddedVisas(visas.filter((visa) => visa?.email === user?.email));
  }, [visas, user]);

  return (
    <>
      <section className="py-12">
        <div className="mx-auto w-11/12 max-w-screen-2xl">
          <section className="relative mb-8 h-32 rounded bg-[url('../assets/heading.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded bg-[#4682A9]/70">
              <h2 className="text-center text-4xl font-semibold text-white">
                My Added Visas
              </h2>
            </div>
          </section>
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {myAddedVisas.map((visa) => (
              <section key={visa._id} className="rounded p-4 shadow">
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="h-48 w-full rounded object-cover"
                />
                <h3 className="p-2 text-center text-lg font-semibold text-[#4682A9]">
                  {visa.countryName}
                </h3>
                <hr />
                <div className="my-2 flex justify-between">
                  <p className="font-semibold">Visa type</p>
                  <p>{visa.visaType}</p>
                </div>
                <hr />
                <div className="my-2 flex justify-between">
                  <p className="font-semibold">Procession time</p>
                  <p>{visa.processingTime}</p>
                </div>
                <hr />
                <div className="my-2 flex justify-between">
                  <p className="font-semibold">Fee</p>
                  <p>${visa.fee}</p>
                </div>
                <hr />
                <div className="my-2 flex justify-between">
                  <p className="font-semibold">Validity</p>
                  <p>{visa.validity}</p>
                </div>
                <hr />
                <div className="my-2 flex justify-between">
                  <p className="font-semibold">Application Mathod</p>
                  <p>{visa.applicationMethod}</p>
                </div>
                <div className="mt-4 flex gap-4">
                  <button className="w-full rounded bg-[#4682A9] py-2 text-white">
                    Update
                  </button>
                  <button className="w-full rounded bg-[#4682A9] py-2 text-white">
                    Delete
                  </button>
                </div>
              </section>
            ))}
          </section>
        </div>
      </section>
    </>
  );
}
