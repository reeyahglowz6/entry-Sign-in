import { Flex,Box,Spacer,ButtonGroup,Button,} from '@chakra-ui/react'
import { Img } from '@chakra-ui/react'

function HomePage() {
  return (
  <>
      <Flex 
      minWidth='max-content'
      height='100px' 
      alignItems='center'
       gap='2'
       backgroundColor='black' >
     <Box width='40%' marginLeft='50px'>
   <img
    width='30%' 
    src="./images/logo-white.png"
     alt="logo"  />
     </Box>
    <ButtonGroup gap='2'>
      <Button>Services</Button>
      <Button>Technology</Button>
      <Button>Products</Button>
      <Button>Token</Button>
      <Button>Spports</Button>
      <Button>Blog</Button>
      <Button  color='yellow.400' backgroundColor='black'>Sign Up for free</Button>
     <Spacer/>
    </ButtonGroup>
  </Flex>

  <Box
   border='1px solid red'
   width='100%'
   height='500px'
   >

  </Box>
  </>



    
  );
}

export default HomePage;