import React, { FC } from "react";
import { Calendar } from "antd";
import { Moment } from "moment";
import { IEvent } from "../models/IEvent";
import { formatDate } from "../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter((ev) => ev.date === formatedDate);

    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
          // of course, I know that it's a realy bad practice...
          // but there is no functionality to delete events =)
        ))}
      </div>
    );
  };

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  );
};
