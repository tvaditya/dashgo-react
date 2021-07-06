import {
    Box,
    Flex,
    Heading,
    Button,
    Icon,
    Table,
    Thead,
    Tr,
    Th,
    Checkbox,
    Tbody,
    Td,
    Text,
    Spinner,
    useBreakpointValue
} from "@chakra-ui/react";
import NextLink from 'next/link';
import {Pagination} from "../../components/Pagination";
import {Sidebar} from "../../components/Sidebar";
import {Header} from "../../components/Header";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import {useUsers} from "../../services/hooks/useUsers";
import { useState } from "react";
import {Link as ChakraLink} from "@chakra-ui/react"
import { queryClient} from "../../services/queryClient";
import { api } from "../../services/api";

export default function UserList() {
    const [page, setPage] = useState(1)
    const { data, isLoading, isFetching, error} = useUsers(page)

    console.log(page)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    async function handlePrefetchUser(userId: number) {
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`)

            return response.data;
        }, {
            staleTime: 1000 * 60 * 10
        })
    }

    return (
        <Box>
            <Header />
            <Flex w={"100%"} my={"6"}  maxWidth={1480} mx={"auto"} px={"6"}>
                <Sidebar/>
                <Box flex={"1"} borderRadius={8} bg={"gray.800"} p={"8"}>
                    <Flex mb={"8"} justify={"space-between"} align={"center"}>
                        <Heading size="lg" fontWeight={"normal"}>
                            Usuarios

                            { !isLoading && isFetching && <Spinner size={"sm"} color={"gray.500"} ml={"4"}/> }
                        </Heading>
                        <NextLink href={"/users/create"} passHref>
                            <Button
                                as={"a"}
                                size={"sm"}
                                fontSize={"sm"}
                                colorScheme={"pink"}
                                leftIcon={<Icon as={RiAddLine} fontSize={"20"}/>}
                            >
                                Criar novo
                            </Button>
                        </NextLink>

                    </Flex>
                    { isLoading ? (
                        <Flex justify={"center"}>
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify={"center"}>
                            <Text>Falha ao obter dados dos usuários.</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme={"whiteAlpha"}>
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color={"gray.300"} width={"8"}>
                                            <Checkbox colorScheme={"pink"} />
                                        </Th>
                                        <Th>Usuario</Th>
                                        { isWideVersion && <Th>Data de cadastro</Th> }
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.users.map(user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme={"pink"} />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <ChakraLink
                                                            color={"purple.400"}
                                                            onMouseEnter={() => handlePrefetchUser(user.id)}
                                                        >
                                                            <Text fontWeight={"bold"}>{user.name}</Text>
                                                        </ChakraLink>
                                                        <Text fontSize={"sm"} color={"gray.300"}>{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                { isWideVersion && <Td>{user.createdAt}</Td> }
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                            <Pagination
                                totalCountOfRegisters={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage}
                            />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}