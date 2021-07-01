import {Flex} from '@chakra-ui/react';
import {Profile} from "./Profile";
import {NotificationsNav} from "./NotificationsNav";
import {SearchBox} from "./SearchBox";
import {Logo} from "./Logo";

export function Header() {
    return (
        <Flex
            as={"header"}
            w={"100%"}
            maxWidth={1480}
            height={"20"}
            marginX={"auto"}
            mt={"4"}
            align={"center"}
            px={"6"}
        >
            <Logo />

            <Flex
                align={"center"}
                ml={"auto"}
            >
                <SearchBox />
                <NotificationsNav/>
                <Profile />
            </Flex>
        </Flex>
    )
}