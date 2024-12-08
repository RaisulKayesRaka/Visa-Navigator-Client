export default function AllVisas() {
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
            <form action="">
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
            </form>
          </section>
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <section className="rounded p-4 shadow">
              <div className="h-48 rounded bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofoHVTNeOXThr6qwXtFZjcCUJTgYcNG3cxA&s')] bg-cover bg-no-repeat text-white"></div>
              <h3 className="p-2 text-center text-lg font-semibold text-[#4682A9]">
                United State of America
              </h3>
              <hr />
              <div className="my-2 flex justify-between">
                <p className="font-semibold">Visa type</p>
                <p>Tourist Visa</p>
              </div>
              <hr />
              <div className="my-2 flex justify-between">
                <p className="font-semibold">Procession time</p>
                <p>5 business days</p>
              </div>
              <hr />
              <div className="my-2 flex justify-between">
                <p className="font-semibold">Fee</p>
                <p>1800$</p>
              </div>
              <hr />
              <div className="my-2 flex justify-between">
                <p className="font-semibold">Validity</p>
                <p>30 days</p>
              </div>
              <div className="mt-4">
                <button className="w-full rounded bg-[#4682A9] py-2 text-white">
                  See Details
                </button>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
