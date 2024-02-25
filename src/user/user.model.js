import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      minLength: [1, "too short user name"],
    },
    lastName: {
      type: String,
      trim: true,

      // minLength: [1, "too short user name"],
    },
    email: {
      type: String,
      trim: true,
      required: true,
      minLength: 1,
      unique: [true, "email must be unique"],
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "minLength 6 characters"],
      select: false,
    },
  },

  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

userSchema.pre("/^update/", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

userSchema.methods.isCorrectPassowrd = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
export const UserModel =
  mongoose.models.User || mongoose.model("User", userSchema);
