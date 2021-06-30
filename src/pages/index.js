import {Flex, Input, Button, FormLabel, Stack, FormControl} from "@chakra-ui/react";

export default function Home() {
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
        >
            <Stack spacing={"4"}>
                <FormControl>
                    <FormLabel htmlFor={"email"}>E-mail</FormLabel>
                    <Input
                        name={"email"}
                        type={"email"}
                        id={"email"}
                        focusBorderColor={"pink.500"}
                        bgColor={"gray.900"}
                        variant={"filled"}
                        _hover={{
                            bgColor: 'gray.900'
                        }}
                        size={"lg"}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor={"password"}>Password</FormLabel>
                    <Input
                        name={"password"}
                        type={"password"}
                        id={"password"}
                        focusBorderColor={"pink.500"}
                        bgColor={"gray.900"}
                        variant={"filled"}
                        _hover={{
                            bgColor: 'gray.900'
                        }}
                        size={"lg"}
                    />
                </FormControl>

            </Stack>

            <Button type={"submit"} mt={"6"} colorScheme={"pink"} size={"lg"}>Entrar</Button>
        </Flex>
      </Flex>
  )
}
