/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux'
import { Stack } from '@chakra-ui/layout'
import DropdownMenu from './DropdownMenu'

export default function SelectCategories () {
    const tipoVehiculo = useSelector(state => state.tipoVehiculo)
  

  function handleClickTipoVehiculo(event) {
    const { name } = event.target
  }

  return (
    <Stack direction='row' spacing={6}>
      <DropdownMenu
        titleMenu={titleTipoVehiculo || tipoVehiculoName}
        menuItems={[{ name: 'Todas' }, ...tipoVehiculo]}
        onClick={handleClickTipoVehiculo}
      />
    </Stack>
  )
}
