import { Button, Text, VStack } from "@chakra-ui/react";

export default function SideBar() {
    return (
        <VStack align="stretch" gap={2}>
            <Button variant="ghost" justifyContent="flex-start">
                <Text>전적 조회</Text>
            </Button>
        </VStack>
    );
}
