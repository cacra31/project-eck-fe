import { Box, Flex, HStack, Text, IconButton, Drawer } from "@chakra-ui/react";
import { ENV } from "@/shared/lib/env";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const TOPBAR_H = "56px";

export default function AppShell() {
    return (
        <Box minH="100vh" bg="gray.50">
            <Drawer.Root placement="start">
                {/* Topbar */}
                <Flex as="header" h={TOPBAR_H} bg="white" borderBottomWidth="1px" align="center" px={4} justify="space-between">
                    <HStack gap={2} align="center">
                        <Drawer.Trigger asChild>
                            <IconButton variant="ghost" display={{ base: "inline-flex", md: "none" }}>
                                <Text fontSize="lg">☰</Text>
                            </IconButton>
                        </Drawer.Trigger>
                        <Text
                            fontWeight="800"
                            letterSpacing="tight"
                            bgGradient="linear(to-r, cyan.400, blue.500, orange.400)"
                            lineHeight="1"
                            userSelect="none"
                        >
                            {ENV.APP_NAME}
                        </Text>
                    </HStack>
                </Flex>
                {/* Body */}
                <Flex minH={`calc(100vh - ${TOPBAR_H})`}>
                    {/* Desktop Sidebar */}
                    <Box
                        as="aside"
                        w="240px"
                        bg="white"
                        borderRightWidth="1px"
                        display={{ base: "none", md: "block" }}
                        p={4}
                        minH={`calc(100vh - ${TOPBAR_H})`}
                    >
                        <SideBar />
                    </Box>
                    {/* Main */}
                    <Box as="main" flex="1" p={4}>
                        <Box bg="white" borderWidth="1px" rounded="md" p={4} minH="100%">
                            <Outlet />
                        </Box>
                    </Box>
                </Flex>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <HStack justify="space-between">
                                <Text fontWeight="bold">{ENV.APP_NAME}</Text>
                                <Drawer.CloseTrigger asChild>
                                    <IconButton aria-label="Close drawer" variant="ghost">
                                        <Text fontSize="lg">✕</Text>
                                    </IconButton>
                                </Drawer.CloseTrigger>
                            </HStack>
                        </Drawer.Header>
                        <Drawer.Body p={4}>
                            <SideBar />
                        </Drawer.Body>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Drawer.Root>
        </Box>
    );
}
