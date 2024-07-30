import React from 'react';
import CardDefault from "../components/Card";
import { fashionEvents } from "../Events";

function PastEvents(props) {
  return (
    <div id="Past" className="bg-[#EAE7E4] Past">
      <div className="bg-black">
        <h1 className="w-full text-center tracking-widest font-bold text-[#EAE7E4]">PAST EVENTS</h1>
      </div>
      <div className="flex justify-center items-center p-5">
        <div className="grid bg-[#EAE7E4] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            fashionEvents.map((val) => (
              <CardDefault
                key={val.id} // Assuming val.id is a unique identifier for each event
                des={val.description}
                title={val.title}
                startD={val.startDate}
                endD={val.endDate}
                imgUrl={val.imageURL}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default PastEvents;
