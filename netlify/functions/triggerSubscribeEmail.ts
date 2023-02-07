import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function (event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    subscriberName: string;
    subscriberEmail: string;
    inviteeEmail: string;
  };

  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  const b = await fetch(`${process.env.URL}/.netlify/functions/emails/subscribed`, {
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
    },
    method: "POST",
    body: JSON.stringify({
      from: requestBody.inviteeEmail,
      to: "jBosak98@gmail.cpm",
      subject: "You've been subscribed",
      parameters: {
        name: requestBody.subscriberName,
        email: requestBody.subscriberEmail,
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({a:"Subscribe email sent!", b}),
  };
};

export { handler };

