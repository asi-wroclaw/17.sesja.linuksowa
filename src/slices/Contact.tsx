import { useState } from "react";
import DefaultButton from "@/components/DefaultButton";

const Contact = () => {
  const [email, setEmail] = useState("");
  const options = {
    from: "you@example.com",
    to: "user@gmail.com",
    subject: "hello world",
    html: "test",
  };

  const handleSubmit = async () => {
    const data = {
      subscriberName: "target.name",
      subscriberEmail: "target.email",
    };
    //call to the Netlify Function you created
    fetch("./.netlify/functions/triggerSubscribeEmail", {
      method: "POST",
      body: JSON.stringify({
        subscriberName: data.subscriberName,
        subscriberEmail: data.subscriberEmail,
        inviteeEmail: "info@netlify.com",
      }),
    });
  };

  return (
    <>
      <DefaultButton text="xd" onClick={handleSubmit}>
        asd
      </DefaultButton>
    </>
  );
};
export default Contact;
