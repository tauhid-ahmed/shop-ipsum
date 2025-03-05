import { z } from "zod";

const ISODateSchema = z.string().refine((date) => !isNaN(Date.parse(date)), {
  message: "Invalid ISO 8601 date format",
});

export const TARGET_DATE = new Date(
  Number(new Date()) + 7 * 24 * 60 * 60 * 1000
).toISOString();

export const SECONDS = 1000;
export const MINUTES = SECONDS * 60;
export const HOURS = MINUTES * 60;
export const DAYS = HOURS * 24;

export function countdown(date: string = TARGET_DATE) {
  const currentDate = new Date();
  const targetDate = new Date(ISODateSchema.parse(date));
  targetDate.setHours(0, 0, 0, 0);

  const difference = Math.max(targetDate.getTime() - currentDate.getTime(), 0);

  const REMAINING_DAYS = Math.floor(difference / DAYS);
  const REMAINING_HOURS = Math.floor((difference % DAYS) / HOURS);
  const REMAINING_MINUTES = Math.floor((difference % HOURS) / MINUTES);
  const REMAINING_SECONDS = Math.floor((difference % MINUTES) / SECONDS);

  return {
    days: REMAINING_DAYS,
    hours: REMAINING_HOURS,
    minutes: REMAINING_MINUTES,
    seconds: REMAINING_SECONDS,
  };
}
