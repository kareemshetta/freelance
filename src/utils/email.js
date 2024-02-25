import nodemailer from "nodemailer";

async function sendEmail({
  to,
  cc,
  bcc,
  subject,
  html,
  attachments = [],
} = {}) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL, // generated ethereal user
      pass: process.env.GMAILPASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Fratellioj"<fratellijo24@gmail.com>`, // sender address
    to,
    cc,
    bcc,
    subject,
    html,
    attachments,
  });

  return info.rejected.length ? false : true;
}

export default sendEmail;

// const getHtml = ({ link, refreshLink }) => {
//   return `<!DOCTYPE html>
//     <html>
//     <head>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></head>
//     <style type="text/css">
//     body{background-color: #88BDBF;margin: 0px;}
//     </style>
//     <body style="margin:0px;">
//     <table border="0" width="50%" style="margin:auto;padding:30px;background-color: #F3F3F3;border:1px solid #630E2B;">
//     <tr>
//     <td>
//     <table border="0" width="100%">
//     <tr>
//     <td>
//     <h1>
//         <img width="100px" src="https://res.cloudinary.com/ddajommsw/image/upload/v1670702280/Group_35052_icaysu.png"/>
//     </h1>
//     </td>
//     <td>
//     <p style="text-align: right;"><a href="http://localhost:4200/#/" target="_blank" style="text-decoration: none;">View In Website</a></p>
//     </td>
//     </tr>
//     </table>
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <table border="0" cellpadding="0" cellspacing="0" style="text-align:center;width:100%;background-color: #fff;">
//     <tr>
//     <td style="background-color:#630E2B;height:100px;font-size:50px;color:#fff;">
//     <img width="50px" height="50px" src="https://res.cloudinary.com/ddajommsw/image/upload/v1670703716/Screenshot_1100_yne3vo.png">
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <h1 style="padding-top:25px; margin:0; color:#630E2B">Email Confirmation</h1>
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <p style="padding:0px 100px;">
//     </p>
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <a href="${link}" style="margin:2px 0px 30px 0px;border-radius:4px;padding:10px 20px;border: 0;color:#fff;background-color:#630E2B; ">Verify Email address </br></a>
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <a href="${refreshLink}" style="margin:10px 0px 30px 0px;border-radius:4px;padding:10px 20px;border: 0;color:#fff;background-color:#630E2B; ">resend verification Email </a>
//     </td>
//     </tr>
//     </table>
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <table border="0" width="100%" style="border-radius: 5px;text-align: center;">
//     <tr>
//     <td>
//     <h3 style="margin-top:10px; color:#000">Stay in touch</h3>
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <div style="margin-top:20px;">

//     <a href="${process.env.facebookLink}" style="text-decoration: none;"><span class="twit" style="padding:10px 9px;color:#fff;border-radius:50%;">
//     <img src="https://res.cloudinary.com/ddajommsw/image/upload/v1670703402/Group35062_erj5dx.png" width="50px" hight="50px"></span></a>

//     <a href="${process.env.instegram}" style="text-decoration: none;"><span class="twit" style="padding:10px 9px;color:#fff;border-radius:50%;">
//     <img src="https://res.cloudinary.com/ddajommsw/image/upload/v1670703402/Group35063_zottpo.png" width="50px" hight="50px"></span>
//     </a>

//     <a href="${process.env.twitterLink}" style="text-decoration: none;"><span class="twit" style="padding:10px 9px;;color:#fff;border-radius:50%;">
//     <img src="https://res.cloudinary.com/ddajommsw/image/upload/v1670703402/Group_35064_i8qtfd.png" width="50px" hight="50px"></span>
//     </a>

//     </div>
//     </td>
//     </tr>
//     </table>
//     </td>
//     </tr>
//     </table>
//     </body>
//     </html>`;
// };

// const getSendCodeHtml = ({ code }) => {
//   return `<!DOCTYPE html>
//     <html>
//     <head>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></head>
//     <style type="text/css">
//     body{background-color: #88BDBF;margin: 0px;}
//     </style>
//     <body style="margin:0px;">
//     <table border="0" width="50%" style="margin:auto;padding:30px;background-color: #F3F3F3;border:1px solid #630E2B;">
//     <tr>
//     <td>
//     <table border="0" width="100%">
//     <tr>
//     <td>
//     <h1>
//         <img width="100px" src="https://res.cloudinary.com/ddajommsw/image/upload/v1670702280/Group_35052_icaysu.png"/>
//     </h1>
//     </td>
//     <td>
//     <p style="text-align: right;"><a href="http://localhost:4200/#/" target="_blank" style="text-decoration: none;">View In Website</a></p>
//     </td>
//     </tr>
//     </table>
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <table border="0" cellpadding="0" cellspacing="0" style="text-align:center;width:100%;background-color: #fff;">
//     <tr>
//     <td style="background-color:#630E2B;height:100px;font-size:50px;color:#fff;">
//     <img width="50px" height="50px" src="https://res.cloudinary.com/ddajommsw/image/upload/v1670703716/Screenshot_1100_yne3vo.png">
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <h1 style="padding-top:25px; color:#630E2B">Verification Code</h1>
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <p style="padding:0px 100px;">
//     </p>
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <p  style="margin:10px 0px 30px 0px;border-radius:4px;padding:10px 20px;border: 0;color:#fff;background-color:#630E2B; ">${code} <br></p>
//     </td>
//     </tr>

//     </table>
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <table border="0" width="100%" style="border-radius: 5px;text-align: center;">
//     <tr>
//     <td>
//     <h3 style="margin-top:10px; color:#000">Stay in touch</h3>
//     </td>
//     </tr>
//     <tr>
//     <td>
//     <div style="margin-top:20px;">

//     <a href="${process.env.facebookLink}" style="text-decoration: none;"><span class="twit" style="padding:10px 9px;color:#fff;border-radius:50%;">
//     <img src="https://res.cloudinary.com/ddajommsw/image/upload/v1670703402/Group35062_erj5dx.png" width="50px" hight="50px"></span></a>

//     <a href="${process.env.instegram}" style="text-decoration: none;"><span class="twit" style="padding:10px 9px;color:#fff;border-radius:50%;">
//     <img src="https://res.cloudinary.com/ddajommsw/image/upload/v1670703402/Group35063_zottpo.png" width="50px" hight="50px"></span>
//     </a>

//     <a href="${process.env.twitterLink}" style="text-decoration: none;"><span class="twit" style="padding:10px 9px;;color:#fff;border-radius:50%;">
//     <img src="https://res.cloudinary.com/ddajommsw/image/upload/v1670703402/Group_35064_i8qtfd.png" width="50px" hight="50px"></span>
//     </a>

//     </div>
//     </td>
//     </tr>
//     </table>
//     </td>
//     </tr>
//     </table>
//     </body>
//     </html>`;
// };

const getStyleHtml = ({
  feedback1,
  feedback2,
  feedback3,
  feedback4,
  phone,
}) => {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>New Feedback</title>
    <style>
      /* Add your email styles here */
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333333;
        padding: 0;
        margin: 0;
      }

      h1 {
        font-size: 24px;
        margin-top: 0;
      }

      p {
        margin-top: 0;
        margin-bottom: 1em;
      }

      a {
        color: #FFFFFF;
        background-color: #007BFF;
        border-radius: 4px;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.5;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        transition: background-color 0.3s ease;
      }

      a:hover {
        background-color: #0069D9;
      }
    </style>
  </head>

  <body>
    <div style="max-width: 600px; margin: 0 auto;">
      <h1 style="color: #007BFF;">New Feedback</h1>

      <p>Dear Admin</p>

    

   <div class="text-left">
   <p class="m-0 p-0 garet">How satisfied were you with the taste and quality of the food?</p>
   <p class="m-0 p-0 ">كم كنت راضيا عن طعم وجودة الطعام؟</p></div>
       <p>${feedback1}</p>

       <div class="text-left"><p class="m-0 p-0 garet">Did you find the portion size satisfactor?</p><p class="m-0 p-0 jf">هل كانت كمية الطعام كافية؟</p></div>
       <p>${feedback4}</p>
     <div class="text-left"><p class="m-0 p-0 garet">Did the delivery arrive within the estimated time frame?</p><p class="m-0 p-0 jf">هل وصلت الطلبية في الوقت المحدد؟</p></div>
       <p>${feedback2}</p>
     <p class="m-0 p-0 garet">On scale from 1 to 5, How would you rate the overall experience, including both the food and the delivery service?</p>
      <p>${feedback3}</p>
 
      <div class="text-left"><p class="garet p-0 m-0">Would you like to recieve our menu please add your phone</p><p class="jf">هل تود ان نرسل اليك قائمة الطعام؟ أضف رقم التليفون</p></div>
       <p>${phone}</p>
    </div>
  </body>
</html>`;
};

const getNewOrderStyleHtml = ({
  name,
  pizza,
  pasta,
  salad,
  sides,
  phone,
  date,
  notes,
}) => {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>New Complimentary</title>
    <style>
      /* Add your email styles here */
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333333;
        padding: 0;
        margin: 0;
      }

      h1 {
        font-size: 24px;
        margin-top: 0;
      }

      p {
        margin-top: 0;
        margin-bottom: 1em;
      }

      a {
        color: #FFFFFF;
        background-color: #007BFF;
        border-radius: 4px;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.5;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        transition: background-color 0.3s ease;
      }
.title{color: #007BFF;}
      a:hover {
        background-color: #0069D9;
      }
    </style>
  </head>

  <body>
    <div style="max-width: 600px; margin: 0 auto;">
      <h1 style="color: #007BFF;">New Complimentary </h1>

      <p>Dear Admin</p>

    

   <div class="text-left">
   <p class="m-0 p-0 garet">New Complimentary has been arrived 
   </p>

    <div class="text-left"><p class="m-0 p-0 garet title">Name:</p></div>
       <p>${name}</p>
       <div class="text-left"><p class="m-0 p-0 garet title">Phone Number:</p></div>
       <p>${phone}</p>
        <div class="text-left"><p class="m-0 p-0 garet title">Pizza:</p></div>
       <p>${pizza}</p>
        <div class="text-left"><p class="m-0 p-0 garet title">Pasta:</p></div>
       <p>${pasta}</p>
         <div class="text-left"><p class="m-0 p-0 garet title">Salad:</p></div>
       <p>${salad}</p>
         <div class="text-left"><p class="m-0 p-0 garet title">Sides:</p></div>
       <p>${sides}</p>

        <div class="text-left"><p class="m-0 p-0 garet title">Notes:</p></div>
       <p>${notes}</p>

         <div class="text-left"><p class="m-0 p-0 garet title"> the date he want to be arrived at:</p></div>
       <p>${date}</p>
  
    
  </body>
</html>`;
};
{
  name: "Hambza";
  notes: "note";
  number: "01013810452";
  pasta: (2)[("Spaghetti Polognese", "Risotto Porcini")];
  pizza: (2)[("Verdure", "Pepperoni")];
  salad: ["Greek salad"];
  sides: ["mozzarella sticks"];
}
const getSendCodeHtml = ({ code }) => {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Account Activation</title>
    <style>
      /* Add your email styles here */
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333333;
        padding: 0;
        margin: 0;
      }

      h1 {
        font-size: 24px;
        margin-top: 0;
      }

      p {
        margin-top: 0;
        margin-bottom: 1em;
      }

      a {
        color: #FFFFFF;
        background-color: #007BFF;
        border-radius: 4px;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.5;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        transition: background-color 0.3s ease;
      }

      a:hover {
        background-color: #0069D9;
      }
    </style>
  </head>

  <body>
    <div style="max-width: 600px; margin: 0 auto;">
      <h1 style="color: #007BFF;">Verification Code</h1>

      <p>Dear Reciever</p>

      <p>Thank you for signing up for an account on e-shop! We're excited to have you as a new member of our community.</p>

      <p>Your Verification Code</p>

      <h1 style=" text-align:center;color: #fff;background-color:#007BFF">${code}</h1>     
      <p>Thank you for choosing e-shop!</p>
      <p>Best regards </p>
      <p>e-shop </p>
    </div>
  </body>
</html>`;
};
export { getSendCodeHtml, getStyleHtml, getNewOrderStyleHtml };
