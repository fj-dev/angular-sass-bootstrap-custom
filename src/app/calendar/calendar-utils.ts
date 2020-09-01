import { MyEvent } from "./mock-events";

export function parseAllDayEvent(evt: MyEvent) {
  return {
    title: evt.title,
    start: evt.start,
    end: evt.end ? evt.end : null,
    className: evt.className,
    allDay: true,
    extendedProps: { allDay: true }
  };
}

export function parseAllDayMultiDayEvent(evt: MyEvent) {
  return {
    title: evt.title,
    start: evt.start,
    end: new Date(
      evt.end.getFullYear(),
      evt.end.getMonth(),
      evt.end.getDate() + 1
    ),
    className: evt.className,
    allDay: true,
    extendedProps: { multiDay: true, allDay: true }
  };
}

export function parseEvent(evt: MyEvent) {
  return {
    title: evt.title,
    start: evt.start,
    end: evt.end ? evt.end : null,
    className: evt.className
  };
}

export function parseMultiDayEvent(evt: MyEvent) {
  return {
    title: evt.title,
    start: evt.start,
    end: evt.end,
    className: evt.className,
    extendedProps: { multiDay: true }
  };
}

export function transformMultiDayEvent(evt: MyEvent) {
  return {
    title: evt.title,
    start: evt.start,
    end: new Date(
      evt.end.getFullYear(),
      evt.end.getMonth(),
      evt.end.getDate() + 1
    ),
    className: evt.className,
    allDay: true,
    extendedProps: {
      multiDay: true,
      allDay: false,
      startDate:
        (evt.start.getMonth() + 1).toString() +
        "/" +
        evt.start.getDate().toString(),
      startTime:
        evt.start
          .getHours()
          .toString()
          .padStart(2, "0") +
        ":" +
        evt.start
          .getMinutes()
          .toString()
          .padStart(2, "0"),
      endDate:
        (evt.end.getMonth() + 1).toString() +
        "/" +
        evt.end.getDate().toString(),
      endTime:
        evt.end
          .getHours()
          .toString()
          .padStart(2, "0") +
        ":" +
        evt.end
          .getMinutes()
          .toString()
          .padStart(2, "0")
    }
  };
}

export function createEventTitleDiv(title) {
  const titleEl = document.createElement('div');
  titleEl.classList.add('fc-event-title');
  titleEl.innerHTML = title;

  const containerEl = document.createElement('div');
  containerEl.classList.add('fc-event-title-container');
  containerEl.appendChild(titleEl);

  return containerEl;
}

export function createEventTimeDiv(time) {
  const timeEl = document.createElement('div');
  timeEl.classList.add('fc-event-time');
  timeEl.innerHTML = time;

  return timeEl;
}

export function createDayGridEvent(arg) {
  const arrayOfDomNodes = [];
  let eventTitle;

  if (arg.event.allDay) {
    eventTitle = createEventTitleDiv('All Day - ' + arg.event.title);
  } else {
    eventTitle = createEventTitleDiv(arg.event.title);
  }

  if (arg.event.extendedProps.multiDay) {
    if (arg.event.extendedProps.allDay) { // multi-day all day event
      eventTitle.style.margin = 'auto';
      arrayOfDomNodes.push(eventTitle);
    } else { // multi-day non-all day event
      if (arg.isStart ===  true) {
        const startTime = arg.event.start.getHours().toString().padStart(2,0) + ':' + arg.event.start.getMinutes().toString().padStart(2,0);
        arrayOfDomNodes.push(createEventTimeDiv(startTime));
      } else {
        eventTitle.style.margin = 'auto';
      }

      if (arg.isEnd === true) {
        arrayOfDomNodes.push(eventTitle);
        const endTime = arg.event.end.getHours().toString().padStart(2,0) + ':' + arg.event.end.getMinutes().toString().padStart(2,0);
        arrayOfDomNodes.push(createEventTimeDiv(endTime));
      } else {
        eventTitle.style.margin = 'auto';
        arrayOfDomNodes.push(eventTitle);
      }
    }
  } else {
    if (arg.event.allDay) { // single all day event
      arrayOfDomNodes.push(eventTitle);
    } else { // single non-all day event
      arrayOfDomNodes.push(createEventTimeDiv(arg.timeText));
      arrayOfDomNodes.push(eventTitle);
    }
  }

  return { domNodes: arrayOfDomNodes };
}

export function createTimeGridEvent(arg) {
  const arrayOfDomNodes = [];
  let eventTitle;

  if (arg.event.extendedProps.allDay) {
    eventTitle = createEventTitleDiv('All Day - ' + arg.event.title);
  } else {
    eventTitle = createEventTitleDiv(arg.event.title);
  }

  if (arg.event.extendedProps.allDay) { // single & multi-day all day event
    arrayOfDomNodes.push(eventTitle);
  } else {
    if (arg.event.extendedProps.multiDay) { // multi-day non-all day event
      if (arg.isStart === true && arg.isEnd === true) {
        eventTitle.style.margin = 'auto';
      }

      if (arg.isStart === true) {
        const startTime = arg.event.start.getHours().toString().padStart(2,0) + ':' + arg.event.start.getMinutes().toString().padStart(2,0);
        arrayOfDomNodes.push(createEventTimeDiv(startTime));
      } else {
        arrayOfDomNodes.push(createEventTimeDiv('From ' + arg.event.extendedProps.startDate));
      }

      arrayOfDomNodes.push(eventTitle);

      if (arg.isEnd === true) {
        const endTime = arg.event.end.getHours().toString().padStart(2,0) + ':' + arg.event.end.getMinutes().toString().padStart(2,0);
        arrayOfDomNodes.push(createEventTimeDiv(endTime));
      } else {
        arrayOfDomNodes.push(createEventTimeDiv('To ' + arg.event.extendedProps.endDate));
      }
    } else { // single non-all day event
      arrayOfDomNodes.push(createEventTimeDiv(arg.timeText));
      arrayOfDomNodes.push(eventTitle);
    }
  }
  
  return { domNodes: arrayOfDomNodes };
}

export function createListWeekEvent(arg) {
  const titleEl = document.createElement('a');
  titleEl.innerHTML = arg.event.title;
  const arrayOfDomNodes = [titleEl];
  return { domNodes: arrayOfDomNodes };
}