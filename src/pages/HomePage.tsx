import { Box, Center, Heading, Text } from "@chakra-ui/react";
import SmoothScrollProvider from "./../providers/smoothScroll";
import { useTranslation } from "react-i18next";
import WavyText from "../components/WavyText";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <SmoothScrollProvider>
      <Center
        w="100%"
        h="100vh"
        bgGradient="linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)"
      >
        <Box position={"relative"}>
          <WavyText
            text={t("supTitle")}
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "-40px",
              left: "-40px",
              color: "var(--chakra-colors-green-light)",
              fontWeight: "bold",
            }}
          />
          <Heading
            as="h1"
            size="4xl"
            noOfLines={1}
            color="white"
            textAlign="center"
          >
            {t("title")}
          </Heading>
        </Box>
      </Center>
      <Box w="100%" h="100vh">
        eeeee 2
      </Box>
    </SmoothScrollProvider>
  );
};

export default HomePage;
