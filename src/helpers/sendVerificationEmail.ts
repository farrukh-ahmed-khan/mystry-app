import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "you@example.com",
      to: "user@gmail.com",
      subject: "Mystry app Verification code ",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "email send successfully" };
  } catch (emailError) {
    console.error("error sending verification email", emailError);
    return { success: false, message: "failed to send verififcation email" };
  }
}
