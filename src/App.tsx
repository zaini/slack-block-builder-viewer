import { ChakraProvider } from "@chakra-ui/react"
import BlockBuilderEditor from "./BlockBuilderEditor"

export default function App() {
  return (
    <ChakraProvider>
      <BlockBuilderEditor />
    </ChakraProvider>
  )
}