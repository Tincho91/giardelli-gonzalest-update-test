import nodemailer from "nodemailer";

export async function sendEmail ({
  to, 
  name, 
  subject, 
  body,
} : {
  to: string; 
  name: string; 
  subject: string; 
  body: string
}) {
  const {SMPT_EMAIL, SMPT_PASSWORD} = process.env;

  const transport = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: SMPT_EMAIL,
      pass: SMPT_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  }
  catch(error){
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMPT_EMAIL, to, subject, html:body
    });

    console.log(sendResult);
  }
  catch(error){
    console.log(error);
  }

}