import { ErrorMessage } from "../utils/ErrorMessage.js";
import { catchError } from "../utils/catchAsyncError.js";
import sendEmail, { getNewOrderStyleHtml } from "../utils/email.js";

export const addNewComp = catchError(async (request, response, next) => {
  console.log(request.body);
  const { name, notes, pasta, pizza, salad, sides, number, date } =
    request.body;
  const newDate = new Date(date).toLocaleString();
  console.log(newDate, date);
  const result = await sendEmail({
    subject: "New Complimentary",
    to: "ahmedelabasy662@gmail.com",
    // process.env.TO_EMAIL,
    html: getNewOrderStyleHtml({
      name,
      phone: number,
      pasta: pasta.toString(),
      pizza: pizza.toString(),
      sides: sides.toString(),
      notes,
      salad: salad.toString(),
      date: newDate,
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
