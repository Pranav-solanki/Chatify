import { Resend } from "resend";
import dotenv from "dotenv"
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendWelcomeEmail = async (email) => {
  const { data, error } = await resend.emails.send({
    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`,
    to: [`${email}`],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }
//   console.log({ data });
};
