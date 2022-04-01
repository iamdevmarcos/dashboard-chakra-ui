import { Flex, IconButton, Icon, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { Search } from "./Search";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1200}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <Search />}

      <Flex align="center" ml="auto">
        <Notifications />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
