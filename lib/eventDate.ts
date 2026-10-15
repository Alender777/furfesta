export const EVENT_START_MS = Date.parse("2027-12-18T10:30:00+08:00");
export const EVENT_END_MS = Date.parse("2027-12-19T00:00:00+08:00");

export type CountdownParts = {
  status: "upcoming" | "today" | "ended";
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getCountdown(now: number): CountdownParts {
  if (now >= EVENT_END_MS) {
    return { status: "ended", days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  if (now >= EVENT_START_MS) {
    return { status: "today", days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const remaining = EVENT_START_MS - now;
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { status: "upcoming", days, hours, minutes, seconds };
}
