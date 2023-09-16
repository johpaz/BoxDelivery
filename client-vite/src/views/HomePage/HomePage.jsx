import React, { useEffect } from 'react';
import { Box, Divider, useColorMode } from '@chakra-ui/react';
import Footer from '../../components/Footer/Footer';
import TopPro from '../../components/Home/TopPro/TopPro'
import FeaturesGrid from '../../components/Home/FeaturesGrid/FeaturesGrid'
import TestimonialCarrousel from '../../components/Home/TestimonialCarrousel/TestimonialCarrousel'
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks'
import TipoVehiculoSection from '../../components/Home/TipoVehiculoSection/TipoVehiculoSection'
import Map from '../../components/Home/MapSection/Map';
import  {getAllPilotos} from '../../services/redux/slice/pilotoSlice';
import { useDispatch } from 'react-redux';
import { getAllTipoVehiculo } from '../../services/redux/slice/tipoVehiculoSlice'; 


const HomePage = () => {
  const dispatch = useDispatch(); 
  const { colorMode } = useColorMode();
  
  
  useEffect(() => {
    dispatch(getAllPilotos())
    dispatch(getAllTipoVehiculo())
  }, []);
  
    // Define the general background color according to the color mode
  const backgroundColor = colorMode === 'dark' ? 'gray.800' : 'gray.100';

  // Define the colors for the dividers in both modes
  const dividerColor = colorMode === 'dark' ? 'gray.100' : 'black';

  return (
    <Box height="100vh" width="100%" backgroundColor={backgroundColor}>
       <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={{
          sm: 'auto',
          md: '70.5em',
          lg: '58em',
        }}
      >
        <HowItWorks />
      </Box>

      <Box backgroundColor={backgroundColor} margin= "1em" >
        <Divider height="3px" borderColor={dividerColor} width="80%" mx="auto"  />
      </Box>
       
      <Box
        display="flex"
        flexDirection="column"
        margin="1em"        
        justifyContent="center"
        alignItems="center"
        height={{
          sm: 'auto',
          md: '70.5em',
          lg: '60em',
        }}
        backgroundColor={backgroundColor}
      >
        
        <FeaturesGrid />
       
        <TestimonialCarrousel />
      </Box>

      <Box backgroundColor={backgroundColor}>
        <Divider height="3px" borderColor={dividerColor} width="80%" mx="auto" />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={{
          sm: 'auto',
          md: '110em',
          lg: '100em',
        }}
        backgroundColor={backgroundColor}
      >
        <TipoVehiculoSection />

        <Divider height="3px" borderColor={dividerColor} width="80%" mx="auto" />
        <TopPro />
        {/* <Divider height="3px" borderColor={dividerColor} width="80%" mx="auto" /> */}
      </Box>
    
      { <Box 
      
      backgroundColor={backgroundColor}>
      <Map />
      
      </Box>
       }
      <Footer />
    </Box>
  );
};

export default HomePage;