import "./EventCard.css";
import FormattedDescription from "../FormattedDescription/FormattedDescription";
import React from "react";
// import { AvatarGroup, Avatar } from "@mui/material";

export default function EventCard({
  date,
  dateStr,
  name,
  description,
  img,
  attendees,
}) {
  // DATE REFORMATTING LOGIC
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short", // DDD
    year: "numeric", // YYYY
    month: "short", // MMM
    day: "numeric", // D
    hour: "2-digit", // HH
    minute: "2-digit", // MM
    hour12: true, // 12-hour clock with AM/PM
    timeZoneName: "shortOffset", // Time zone offset (ie "GMT-5")
  });

  const formattedDate = formatter.format(date);
  //

  return (
    <div className="event-card">
      <div className="event-card__top">
        <div className="event-card__top-left">
          <time className="event-card__time" dateTime={dateStr}>
            {formattedDate}
          </time>
          <h2 className="event-card__title">{name}</h2>
          <FormattedDescription
            text={description}
            textClassName={"event-card__description"}
          />
        </div>
        <div className="event-card__top-right">
          <img src={img} alt="Event image" className="event-card__img" />
        </div>
        <div className="event-card__bottom">
          <div className="event-card__attendees">
            {attendees} attendees
            {/* <AvatarGroup max={5}>
              {attendees.map((attendee) => {
                const { status, name, profile_picture, id } = attendee;

                if (status == "Going")
                  return <Avatar key={id} alt={name} src={profile_picture} />;
              })}
            </AvatarGroup> */}
          </div>
        </div>
      </div>
    </div>
  );
}
