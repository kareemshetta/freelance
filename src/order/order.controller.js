import { ErrorMessage } from "../utils/ErrorMessage.js";
import { catchError } from "../utils/catchAsyncError.js";
import sendEmail, { getNewOrderStyleHtml } from "../utils/email.js";

export const formatDateAndTime = (utcDateTime) => {
  const date = new Date(utcDateTime);
  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dateOptions = {
    timeZone: "Asia/Amman",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // Adding notation for the date format
    formatMatcher: "basic",
  };

  const timeOptions = {
    timeZone: "Asia/Amman",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  // Create a formatter for the date with dashes
  const dateFormatter = new Intl.DateTimeFormat("en-IN", dateOptions);
  const formattedDate = dateFormatter.format(date).replace(/\//g, "-");

  const formattedTime = new Intl.DateTimeFormat("en-IN", timeOptions).format(
    date
  );
  const isRtl = true; // This would be dynamically determined based on your application's locale or user preferences.
  const timeForRtl = isRtl
    ? formattedTime.split(" ").reverse().join(" ")
    : formattedTime;

  return {
    date: formattedDate,
    time: formattedTime,
    timeForRtl,
  };
};

export const addNewComp = catchError(async (request, response, next) => {
  console.log(request.body);
  const { name, notes, pasta, pizza, salad, sides, number, date } =
    request.body;
  const { date: newDate, time } = formatDateAndTime(date);
  console.log(newDate, date);
  const result = await sendEmail({
    subject: "New Complimentary",
    to: process.env.TO_EMAIL,
    html: getNewOrderStyleHtml({
      name,
      phone: number,
      pasta: pasta.toString(),
      pizza: pizza.toString(),
      sides: sides.toString(),
      notes,
      salad: salad.toString(),
      date: `${newDate} ${time}`,
    }),
  });

  if (result) {
    return response.status(201).json({
      message: "Add  Successfully 😃",
      result,
    });

    // console.error(err.response.body.errors);
    // console.log(err);
  } else {
    throw new ErrorMessage(400, "mo comp has sent check data you provide");
  }
});
