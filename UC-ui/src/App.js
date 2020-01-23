import React, { useState } from 'react';
import Calendar from '@bit/vagacoder.testing.calendar';
import ThemeController from '@bit/vagacoder.testing.theme-controller';


const events = [
  {
    id: "123ABC456efg",
    start: new Date("2019-12-25T12:00:00").toISOString(),
    end: "",
    title: "Event 3"
  },
  {
    id: "123ABC456efg",
    start: new Date("2020-01-11T12:00:00").toISOString(),
    end: "",
    title: "party"
  },
  {
    id: "123ABC456efg",
    start: new Date("2020-01-11T12:00:00").toISOString(),
    end: "",
    title: "clean"
  },
  {
    id: "123ABC456efg",
    start: new Date("2020-01-11T12:00:00").toISOString(),
    end: "",
    title: "wash"
  },
  {
    id: "123ABC456eff",
    start: new Date("2020-01-09T10:00:00").toISOString(),
    end: "",
    title: "Nayf meeting",
    location:'',
    leading:''
  },
  {
    id: "hj12UY89mL54",
    start: new Date("2019-12-25T11:00:00").toISOString(),
    end: "",
    title: "Event 1"
  },
  {
    id: "abc543kji987",
    start: new Date("2019-12-25T11:30:00").toISOString(),
    end: "",
    title: "Event 2"
  },
  {
    id: "yuRl683Ndejd2",
    start: new Date("2019-12-25T12:30:00").toISOString(),
    end: "",
    title: "Event 4"
  },
];

function App() {
  let [selectedEvent, setSelectedEvent] = useState("")
  return (
    <div className="">
      <ThemeController>
        <Calendar events={events}
          onEventClick={(props) => { setSelectedEvent(props) }} />
        <hr />
        selected event : {selectedEvent}
      </ThemeController>
    </div>
  );
}

export default App;
