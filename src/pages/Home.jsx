import Banner from "../components/Banner";
import LatestVisas from "../components/LatestVisas";
import WhatWeOffer from "../components/WhatWeOffer";
import WorkingProcess from "../components/WorkingProcess";

export default function Home() {
  return (
    <>
      <Banner />
      <LatestVisas />
      <hr />
      <WhatWeOffer />
      <hr />
      <WorkingProcess />
    </>
  );
}
