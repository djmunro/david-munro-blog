import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Created by <a href="https://davidmunro.dev">David Munro</a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Follow <a href="https://twitter.com/munrod86">@munrod86</a>
    </Text>
  </Box>
)

export default Footer
