import { useContext } from "react";
import { VisaContext } from "../provider/VisaProvider";
export default function AllVisas() {
  const { visas } = useContext(VisaContext);

  return (
    <>
      <section className="py-12">
        <div className="mx-auto w-11/12 max-w-screen-2xl">
          <section className="relative mb-8 h-32 rounded bg-[url('../assets/heading.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded bg-[#4682A9]/70">
              <h2 className="text-center text-4xl font-semibold text-white">
                All Visas
              </h2>
            </div>
          </section>
          {/* filter based on visa type */}
          <section className="mb-8 flex items-center gap-4">
            <h2 className="text-xl font-semibold">Filter By:</h2>
            <form action="" className="flex items-center gap-4">
              <label htmlFor="visaType" className="sr-only">
                Visa Type
              </label>
              <select
                id="visaType"
                name="visaType"
                className="rounded border px-4 py-2 focus:outline-none focus:ring focus:ring-[#749BC2]"
                required
              >
                <option value="">All</option>
                <option value="Tourist visa">Tourist visa</option>
                <option value="Student visa">Student visa</option>
                <option value="Official visa">Official visa</option>
                <option value="Business visa">Business visa</option>
              </select>
              <button
                type="submit"
                className="rounded bg-[#4682A9] px-4 py-2 text-white"
              >
                Filter
              </button>
            </form>
          </section>
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visas.map((visa) => (
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
                <div className="mt-4">
                  <button className="w-full rounded bg-[#4682A9] py-2 text-white">
                    See Details
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
