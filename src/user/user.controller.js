import { ErrorMessage } from "../utils/ErrorMessage.js";
import { catchError } from "../utils/catchAsyncError.js";
import { UserModel } from "./user.model.js";
import { generateToken } from "../utils/GenerateAndVerifyToken.js";
export const signUp = catchError(async (request, response, next) => {
  const { password, email } = request.body;
  if (await UserModel.findOne({ email })) {
    throw ErrorMessage(409, "Account Already Exist 🙄");
  }

  //   if (request.file) {
  //     request.body.profilePic = request.file.dest;
  //   }
  const user = await new UserModel(request.body).save();
  if (!user) {
    throw ErrorMessage(404, "No User Added Check Your Data 🙄");
  }
  response.status(201).json({ message: "success now you can login" });
});

export const signIn = catchError(async (request, response, next) => {
  const { password, email } = request.body;

  const user = await UserModel.findOne({ email: email }).select("+password");

  if (!user) {
    throw ErrorMessage(404, "not registerd account  🙄");
  }

  if (await user.isCorrectPassowrd(password, user.password)) {
    const accessToken = generateToken({
      payload: { email, id: user._id },
      expiresIn: 60 * 60 * 24,
    });

    //bjjj
    // const refreshToken = generateToken({
    //   payload: { email, id: user._id },
    //   expiresIn: 60 * 60 * 24 * 365,
    // });

    await user.save();
    return response.status(200).json({ message: "success", accessToken });
  } else {
    throw ErrorMessage(404, "not registered account 🙄");
  }
});
