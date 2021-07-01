import {Avatar, Box, Flex, Text} from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return(
        <Flex align={"center"}>
            { showProfileData && (
                    <Box mr={"4"} textAlign={"right"}>
                        <Text>Tantravahi Aditya</Text>
                        <Text color={"gray.300"} fontSize={"small"}>
                            tvaditya@gmail.com
                        </Text>
                    </Box>
            )}

                <Avatar size={"md"} name={"Tantravahi Aditya"} />
            </Flex>
        )
}

// src com o link da foto