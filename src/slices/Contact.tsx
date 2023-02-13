import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
} from "@chakra-ui/react";
import DefaultButton from "@/components/DefaultButton";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:9999/.netlify/functions/sendMessage"
        : "";
    const requestOptions = {
      method: "POST",
      body: `
FROM: ${name}
EMAIL: ${email}
----------
${message}
      `,
    };
    try {
      const response = await fetch(url, requestOptions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box margin="auto" width="80%" maxWidth={"800"}>
      <form onSubmit={handleSubmit}>
        <FormControl display={"flex"} flexDir="column">
          <FormLabel mt={4}>Imię i nazwisko</FormLabel>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
          />
          <FormLabel mt={4}>Email</FormLabel>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <FormLabel mt={4}>Wiadomość</FormLabel>
          <Textarea
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            size='lg' 
            placeholder="Pytania? Sugestie? Wpisz je tutaj!"
          />
          <DefaultButton
            mt={4}
            mb={4}
            _hover={{ color: "black" }}
            size="lg"
            text="wyślij"
            type="submit" />
        </FormControl>
      </form>
    </Box>
  );
};

export default Contact;
