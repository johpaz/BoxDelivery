/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllCategories } from '../services/redux/actions/actions'
import { Stack } from '@chakra-ui/layout'
import DropdownMenu from './DropdownMenu'

export default function SelectCategories ({ fnSelectCategory, fnSelectOcupation, titleCategory, titleOcupation }) {
  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)
  const [categoryName, setCategoryName] = useState(filters.category)
  const [ocupationName, setOcupationName] = useState(filters.ocupation)
  const [ocupationsArray, setOcupationsArray] = useState([])

  function handleClickCategory (event) {
    const { name } = event.target
    setCategoryName(name)
    setOcupationName('Ocupacion')
    if (name !== 'Todas') {
      const array = categories.find(item => item.name === name)
      setOcupationsArray(array.Ocupations)
    } else {
      setOcupationsArray([])
    }
    fnSelectCategory && fnSelectCategory(name)
  }

  function handleClickOcupation (event) {
    const { name } = event.target
    setOcupationName(name)
    fnSelectOcupation && fnSelectOcupation(name)
  }

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  return (
    <Stack direction='row' spacing={6}>
      <DropdownMenu
        titleMenu={titleCategory || categoryName}
        menuItems={[{ name: 'Todas' }, ...categories]}
        onClick={handleClickCategory}
      />
      <DropdownMenu
        titleMenu={titleOcupation || ocupationName}
        menuItems={ocupationsArray}
        onClick={handleClickOcupation}
      />
    </Stack>
  )
}
