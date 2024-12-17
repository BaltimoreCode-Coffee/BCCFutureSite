import "./EventCalElement.css";
import EventCard from "../EventCard/EventCard.jsx";
import { useEffect, useState } from "react";

import supabase from "../../../utils/supabaseClient.js";

export default function EventCalElement({ setPageCount }) {
  const [eventsData, setEventsData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchEventsData = async () => {
      const { data, error } = await supabase.from("event").select();

      if (error) {
        setFetchError("Could not fetch data from supabase");
        console.error(error);
        setEventsData(null);
        setPageCount(null);
      }

      if (data) {
        if (data.length < 1) {
          setFetchError("There is no data in the supabase table");
          console.error(
            "SUPABASE ERROR: There is no data in the supabase table"
          );
          setPageCount(null);
        } else {
          const sortedData = data.sort((a, b) => a.id - b.id);

          setFetchError(null);
          setEventsData(sortedData);
          setPageCount(Math.ceil(data.length / 6));
        }
      }
    };

    fetchEventsData();
  }, []);

  // useEffect(() => {
  //   function organizeEvents() {
  //     if (eventsData) {
  //       const currentDate = new Date();
  //       const pastEvents = [];
  //       const upcomingEvents = [];
  //       let i = 0;
  //       let j = 1;
  //       let k = 1;

  //       while (i < eventsData.length) {
  //         let eventDate = new Date(eventsData[i].start_date);

  //         if (eventDate < currentDate) {
  //           const currentPastEventsIndex = Math.floor(j / 6);

  //           if (j % 6 !== 1) {
  //             pastEvents[currentPastEventsIndex].push(j);
  //             // pastEvents[currentPastEventsIndex].push(eventsData[i]);
  //           } else {
  //             pastEvents.push([j]);
  //             // pastEvents.push([eventsData[i]]);
  //           }
  //           console.log(pastEvents);
  //           j++;
  //         } else {
  //           upcomingEvents.push(eventsData[i]);
  //         }
  //         i++;
  //       }
  //     }
  //   }

  //   organizeEvents();

  // }, [eventsData]);

  return (
    <section className="event-cal">
      {fetchError && <p className="event-cal__error-msg">{fetchError}</p>}
      {eventsData &&
        eventsData.map((event) => {
          const {
            id,
            title,
            image,
            description,
            start_date,
            attendees,
            hyper_link,
          } = event;

          // REFORMAT DATE
          const date = new Date(start_date);

          const simpleDate = new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }).format(date);
          //

          return (
            <div key={id} className="event-cal__section">
              <time className="event-cal__date" dateTime={start_date}>
                {simpleDate.toUpperCase()}
              </time>
              <div className="event-cal__divider">
                <div className="event-cal__dot"></div>
                <div className="event-cal__line"></div>
              </div>
              <EventCard
                date={date}
                dateStr={start_date}
                name={title}
                description={description}
                img={image}
                attendees={attendees}
              />
            </div>
          );
        })}
    </section>
  );
}
