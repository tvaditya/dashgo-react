import {Flex, Button, Stack} from "@chakra-ui/react";
import { Input } from '../components/Form/Input';
import {SubmitHandler, useForm} from 'react-hook-form';

type SignInFormData = {
    email: string;
    password: string;
}

export default function SignIn() {
    const { register, handleSubmit, formState} = useForm()

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 1555))
        console.log(values);
    }

  return (
      <Flex
          w={"100vw"}
          h={"100vh"}
          align={"center"}
          justify={"center"}
      >
        <Flex
            as={"form"}
            width={"100%"}
            maxWidth={"360px"}
            background={"gray.800"}
            padding={"8"}
            borderRadius={"8px"}
            flexDir={"column"}
            onSubmit={handleSubmit(handleSignIn)}
        >
            <Stack spacing={"4"}>
                <Input name={"email"} type={"email"} label={"E-mail"} {...register('email')}/>
                <Input name={"password"} type={"password"} label={"Password"} {...register('password')} />
            </Stack>

            <Button
                type={"submit"}
                mt={"6"}
                colorScheme={"pink"}
                size={"lg"}
                isLoading={formState.isSubmitting}
            >
                Entrar
            </Button>
        </Flex>
      </Flex>
  )
}
