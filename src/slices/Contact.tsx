import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Heading,
  AlertIcon,
  Alert,
} from "@chakra-ui/react";
import DefaultButton from "@/components/DefaultButton";
import { FormEvent, useState } from "react";
import config from "@/config";

const Contact = ({ sendMessageUrl }: { sendMessageUrl: string }) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<"success" | "error" | undefined>(
    undefined
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      const response = await fetch(sendMessageUrl, requestOptions);
      if (response.status === 200) setStatus("success");
      else setStatus("error");
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  return (
    <Box margin="auto" mt="300" mb="30" width="80%" maxWidth={"800"}>
      <Heading
        as="h2"
        mt="300"
        mb="30"
        fontSize={{ base: "4xl", md: "7xl" }}
        textAlign="center"
        fontWeight="semibold"
      >
        Napisz do nas!
      </Heading>
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
            size="lg"
            placeholder="Pytania? Sugestie? Wpisz je tutaj!"
          />
          <DefaultButton
            mt={4}
            mb={4}
            _hover={{ color: "black" }}
            size="lg"
            text="wyślij"
            type="submit"
          />
        </FormControl>
      </form>
      {status && (
        <Alert status={status}>
          <AlertIcon />
          {status === "success"
            ? "Wiadomość wysłana!"
            : "Coś poszło nie tak. Napisz na kontakt@sesja.linuksowa.pl"}
        </Alert>
      )}
    </Box>
  );
};

export default Contact;
