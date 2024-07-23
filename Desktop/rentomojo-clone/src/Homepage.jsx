import React from "react";
import { Grid } from "@chakra-ui/react";
import { TbTruckReturn } from "react-icons/tb";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BiPackage } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { GiWashingMachine, GiOfficeChair } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import { RiEBikeLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FcLike } from "react-icons/fc";
import { BsCart2 } from "react-icons/bs";
import Crousel from "./Crousel"

import {
  Container,
  Stack,
  SimpleGrid,
  Link,
  chakra,
  useColorModeValue,
  Input,
  Image,
 
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaFacebook,
  FaDribbble,
} from "react-icons/fa";


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};


const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("whiteAlpha.200"),
      }}
    >
      {/* <VisuallyHidden>{label}</VisuallyHidden> */}
      {children}
    </chakra.button>
  );
};

const Homepage = () => {

  const options = {
    arrows: true,
    loop: true,
    margin: 10,
    items: 4.5,
    // infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
  };
  

  return (



    <Box>

<Box
      className="navbar"
      margin="auto"
      width="100%"
      bg={useColorModeValue("white")}
    >
      <Flex
        bg={useColorModeValue("white")}
        // bg={"transparent"}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        width={"90%"}
        margin="auto"
        gap="10px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        flexDirection="row"
        justifyContent={"space-between"}
        // border={"1px solid red"}
        padding="2px 5px 2px 2px"
      >
        <Link to="/">
          <Box cursor="pointer" marginLeft={"-15px"}>
            <Flex>
              <Image
                src="data:image/png;base64,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"
                // boxSize="80px"
                padding={"5px"}
                width={"60px"}
                h="60px"
              />
              <Text
                fontSize={25}
                textAlign="center"
                as=""
                marginLeft="0px"
                p="10px 5px"
                fontWeight="bold"
                color="rgb(109,109,109)"
                cursor="pointer"
              >
                rentomojo
              </Text>
            </Flex>
          </Box>
        </Link>
        <Box marginLeft="10px">
          <Flex>
          pune
          </Flex>
        </Box>
        <Box>
          <Flex
            border="1px solid rgb(186,186,186)"
            borderRadius={"10px"}
            padding="10px"
          >
            <Input
              placeholder="Search for products"
              type="search"
              variant="unstyled"
              width={"580px"}
              margin={"auto"}
              autoComplete="on"
            />
          </Flex>
        </Box>
      
          <Flex alignItems={"center"} gap="10px" cursor="pointer">
            <BsCart2 size={"20px"} />
            <Text>Cart</Text>
          </Flex>
          <FcLike color="red" size={"20px"} />
        
          <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"red"}
              href={"#"}
              border="1px solid red"
              borderRadius={"8px"}
              _hover={{
                bg: "white",
                color: "red",
              }}
            >
              LOGIN/SIGNUP
            </Button>
      </Flex>
    </Box>

         <Crousel />




      <Box>
        <Box width={"90%"} margin={"auto"}>
          {/* <Carousel /> */}
          <Flex
      marginTop={"140px"}
      padding="5px"
      gap="20px"
      flexDirection={"row"}
      justifyContent="space-between"
      transform={"translate(0%, -50%)"}

      // border={"1px solid red"}
    >

   
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <BiPackage size={"60px"} />
          <Text>Package</Text>
        </Box>
    

        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <IoBedOutline size={"60px"} />
          <Text>Furniture</Text>
        </Box>
     

        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          cursor="pointer"
          padding="30px 40px 15px 40px"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <GiWashingMachine size={"60px"} />
          <Text>Appliances</Text>
        </Box>
    
  
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <AiOutlineMobile size={"60px"} />
          <Text>Electronics</Text>
        </Box>
    
      
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <RiEBikeLine size={"60px"} />
          <Text>Bikes</Text>
        </Box>
    

     
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <CgGym size={"60px"} />
          <Text>Fitness</Text>
        </Box>
     
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <GiOfficeChair size={"60px"} />
          <Text margin={"0"}>WFH Essentials</Text>
        </Box>
    </Flex>
        </Box>
        <Box
          bg={"rgb(245,247,250)"}
          border="1px solid rgb(245,247,250)"
          marginTop="-50px"
        >
<Box
      width={"85%"}
      margin="auto"
    >
      <Box textAlign={"start"} marginTop="100px">
        <Flex flexDirection={"row"} justifyContent="space-between">
          <Box>
            <Text
              fontFamily={"Muli, sans-serif"}
              fontSize="30px"
              fontWeight={"bold"}
            >
              You'll love to
            </Text>
            <Text
              fontFamily={"Muli, sans-serif"}
              fontSize="30px"
              color={"grey"}
            >
              take these home
            </Text>
            <Box width="50px" border="1px solid red"></Box>
          </Box>
          <Box marginTop={"50px"}>
            <Flex>
              <AiOutlineLeftCircle size="50" color="grey" />
              <AiOutlineRightCircle
                size="50"
                color="black"
                fontVariant={"red"}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>


    <Box
      padding={"20px 0px 20px 0px"}
      marginTop="5px"
      gap={"10px"}
      marginLeft="80px"
      z-index={1}
    >
      <OwlCarousel className="owl-theme" {...options}>
            <Flex gap={"30px"} flexDirection="row">
              <Box
                className="item"
                border="1px solid grey"
                padding={"30px 10px 10px 10px"}
                bg={"white"}
              >
                <img src={"https://p.rmjo.in/productSquare/70rj36m0-500x500.jpg"} alt="img" />
                <Box marginTop={"10px"}>
                  <Text textAlign={"left"}>{"Poise Wooden Queen Bed (6x5)"}</Text>
                  <Flex
                    flexDirection={"row"}
                    justifyContent="space-between"
                    // gap="20px"
                    marginTop={"10px"}
                    marginBottom="10px"
                  >
                    <Box textAlign={"left"}>
                      <Text color={"grey"}>Rent</Text>
                      <Text>₹{"9999"}/mo</Text>
                    </Box>
                    <Button
                      border={"1px solid red"}
                      color="red"
                      _hover={{ bg: "red", color: "white" }}
                      borderRadius="1px"
                      marginTop={"5px"}
                    >
                      See more
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </Flex>
      </OwlCarousel>
    </Box>
        </Box>
        {/* <Features /> */}
      
      {/* featues part */}

        <Box width="95%" margin="auto">
      <Flex>
        <Box padding={"20px"} marginTop="70px">
          <Text
            fontFamily={"Muli, sans-serif"}
            fontSize="30px"
            fontWeight={"bold"}
          >
            There's more
          </Text>
          <Text
            fontFamily={"Muli, sans-serif"}
            fontSize="30px"
            color={"grey"}
            textAlign="start"
          >
            to renting
          </Text>
          <Box width="50px" border={"1px solid red"}></Box>
        </Box>
      </Flex>
      <Box marginTop={"20px"} margin="20px">
      
        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
        
              <Box  >
                {<TbTruckReturn size={"100px"} />}
                <Text textAlign={"start"} fontWeight="600">
                  {"Easy return on delivery"}
                </Text>
                <Text textAlign={"start"}>{"Bored of the same product? Upgrade to try another, newer design and enjoy the change!"}</Text>
              </Box>
              <Box  >
                {<TbTruckReturn size={"100px"} />}
                <Text textAlign={"start"} fontWeight="600">
                  {"Easy return on delivery"}
                </Text>
                <Text textAlign={"start"}>{"Bored of the same product? Upgrade to try another, newer design and enjoy the change!"}</Text>
              </Box>
              <Box  >
                {<TbTruckReturn size={"100px"} />}
                <Text textAlign={"start"} fontWeight="600">
                  {"Easy return on delivery"}
                </Text>
                <Text textAlign={"start"}>{"Bored of the same product? Upgrade to try another, newer design and enjoy the change!"}</Text>
              </Box> <Box  >
                {<TbTruckReturn size={"100px"} />}
                <Text textAlign={"start"} fontWeight="600">
                  {"Easy return on delivery"}
                </Text>
                <Text textAlign={"start"}>{"Bored of the same product? Upgrade to try another, newer design and enjoy the change!"}</Text>
              </Box>
              <Box  >
                {<TbTruckReturn size={"100px"} />}
                <Text textAlign={"start"} fontWeight="600">
                  {"Easy return on delivery"}
                </Text>
                <Text textAlign={"start"}>{"Bored of the same product? Upgrade to try another, newer design and enjoy the change!"}</Text>
              </Box>
        </Grid>
      </Box>
 
    </Box>


        {/* <Footer /> */}


        {/* footer */}

        <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>RENTOMOJO</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Culture</Link>
            <Link href={"#"}>Investors</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Our Benefits</Link>
            <Link href={"#"}>Sitemap</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>INFORMATION</ListHeader>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>FAQs</Link>
            <Link href={"#"}>Documents Required</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>POLICIES</ListHeader>
            <Link href={"#"}>Shipping Policy</Link>
            <Link href={"#"}>Cancellation & Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Rental Terms & Conditions</Link>
            <Link href={"#"}>Referral Terms & Conditions </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>NEED HELP ?</ListHeader>
            <Button
              border={"1px solid rgb(49,49,49)"}
              bg="rgb(245,247,250)"
              _hover={{ bg: "rgb(245,247,250)" }}
            >
              Chat with us (9AM-6PM)
            </Button>

            <Flex flexDirection={"row"} gap="10px" padding="10px">
              <FaTelegramPlane
                size={"25px"}
                color="grey"
                // border="2px solid red"
              />
              jo@rentomojo.com
            </Flex>
            <ListHeader>DOWNLOAD APP</ListHeader>

            <Box width={"120px"} padding="-40px">
              <Flex gap="10px">
                <img
                  src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png"
                  alt=""
                  height={"70px"}
                />
                <img
                  src="https://uwswpa.org/wp-content/uploads/2017/07/apple-app-store-icon.png"
                  alt=""
                  height={"70px"}
                  border="1px solid red"
                />
              </Flex>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box>
        {/* <Chatbox /> */}
      </Box>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Flex}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022. Edunetwork Pvt. Ltd.</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"Linkedin"} href={"#"}>
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Dribble"} href={"#"}>
              <FaDribbble />
            </SocialButton>
          </Stack>
          <Stack>
            {/* <ScrollToTop /> */}
          </Stack>
        </Container>
      </Box>
    </Box>


      </Box>
    
    </Box>
  );
};

export default Homepage;
