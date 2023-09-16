import { Grid, Box,Flex} from '@chakra-ui/react';
import Categories from "../../Categories/TipoVehiculo"

import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
      <Flex >
        <SidebarClient />
        
        <Categories />
      </Flex>
    // <Box display={{ base: 'grid', lg: 'flex' }} height="100vh">
    //     <Grid templateRows="5% 95%" display={{ base: 'grid', sm: 'grid',md: 'flex', lg: 'flex'}} width='100%'>
    //       <SidebarClient />
    //       <Categories />
    //     </Grid>
    // </Box>
  );
};

export default DashboardClient;