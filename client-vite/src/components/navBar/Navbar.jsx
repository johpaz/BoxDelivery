import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Flex,
  Image,
  useColorModeValue,
  HStack,
  Button,
  useColorMode
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./../../utils/Darkmode/DarkmodeToggle";
import Logo from "../../assets/categoriesIcons/logo1.png";
import logodark from "../../assets/categoriesIcons/logo1dark.png";
import NavLink from "./../../singleComponents/NavLink";

const Navbar = () => {
  const navigate = useNavigate();
  const navbarBgColor = useColorModeValue("gray.200", "gray.900");
  const { colorMode } = useColorMode();


  return (
    <nav
      style={{
        position: "sticky",
        width: '100%',
        top: 0,
        zIndex: 100,
      }}
    >
      <Flex
        position="sticky"
        top="0px"
        justifyContent="space-between"
        alignItems="center"
        borderRadius='15px'                         
        padding={3}
        bg={navbarBgColor}
        margin="10px"
        as="div"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="2xl"
        fontFamily="body"
        color="gray.700"
      >
        <HStack spacing={8} alignItems="center">
          <Box onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
            <Image
               src={colorMode === "light" ? Logo : logodark}
               width={{ base: "50%", md: "100%", lg: "100%" }}
               height="70px"
            />
          </Box>
          <HStack
            as="nav"
            spacing={10}
            display={{ base: "none", md: "flex" }}
            fontSize="1.2rem"
            fontWeight="bold"
            color={useColorModeValue("gray.900", "gray.100")}
          >
            <NavLink textLink="¿Como funciona?" routeLink="/comofunciona" />
            <NavLink textLink="Pilotos" routeLink="/TipoVehiculo" />
            <NavLink textLink="Contacto" routeLink="/feedback" />
            <NavLink textLink="Acerca de" routeLink="/aboutus" />
          </HStack>
        </HStack>

        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              size="lg"
              icon={<HamburgerIcon />}
              variant="ghost"
              textDecoration="none"
            />
            <MenuList >
              <MenuItem color={useColorModeValue("gray.900", "gray.100")} onClick={() => navigate("/comofunciona")} >
                ¿Como funciona?
              </MenuItem>
              <MenuItem color={useColorModeValue("gray.900", "gray.100")} onClick={() => navigate("/TipoVehiculo")}>
                Pilotos
              </MenuItem>
              <MenuItem
                color={useColorModeValue("gray.900", "gray.100")}  onClick={() => navigate("/feedback")}>
                Contacto
              </MenuItem>
              <MenuItem
                color={useColorModeValue("gray.900", "gray.100")} onClick={() => navigate("/aboutus")} >
                Acerca de
              </MenuItem>
              
              <MenuItem
                color={useColorModeValue("gray.900", "gray.100")}onClick={() => navigate("/userLogin")}>
                Iniciar Sesion
              </MenuItem>
              <MenuItem
                color={useColorModeValue("gray.900", "gray.100")}onClick={() => navigate("/userRegister")}>
                Registrarse
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <DarkModeToggle />
        {/* pregunto si es true, si es asi se muestra la search, de lo contrario se oculta */}
        {/* {isCategoriesRoute && <SearchBar />} */}

        <HStack
          display={{ base: "none", md: "block", lg: "row" }}
          justifyContent="space-between"
        >
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              >
              Registrarse
            </MenuButton>
            <MenuList>
              <MenuItem
                color={useColorModeValue("gray.900", "gray.100")}
                onClick={() => navigate("/userRegister")} fontSize="1.2rem"
                fontWeight="bold"
              >
                Registrarse
              </MenuItem>
              <MenuItem
                color={useColorModeValue("gray.900", "gray.100")}
                onClick={() => navigate("/userLogin")} fontSize="1.2rem"
                fontWeight="bold"
              >
                Iniciar Sesion
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </nav>
  );
};

export default Navbar;
