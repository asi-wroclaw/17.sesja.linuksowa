import { FormControl, FormLabel, Input, FormHelperText, Box, Button } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = process.env.NODE_ENV === 'development' ?'http://localhost:9999/.netlify/functions/sendMessage' : '';
    const requestOptions = {
      method: 'POST',
      body: `
FROM: ${name}
EMAIL: ${email}
----------
${message}
      `
    };
    try {
      const response = await fetch(url, requestOptions);
    } catch (err) {
      console.log(err)
    }
  };

  return <Box margin="auto" width="80%">
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Imię i nazwisko</FormLabel>
        <Input value={name} onChange={(event) => setName(event.target.value)} type='text' />
        <FormLabel>Email</FormLabel>
        <Input value={email} onChange={(event) => setEmail(event.target.value)} type='email' />
        <FormLabel>Wiadomość</FormLabel>
        <Input value={message} onChange={(event) => setMessage(event.target.value)} type='text' />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <Button width="full" type="submit">
          wyślij
        </Button>
      </FormControl>
    </form>
  </Box>
};

export default Contact;
