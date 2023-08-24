/* eslint-disable react/prop-types */
import {
  Badge, useColorModeValue
} from '@chakra-ui/react'

export default function Tag ({ textTag }) {
  return (
    <Badge
      px={2}
      py={1}
      bg={useColorModeValue('teal.300', 'gray.800')}
      fontWeight='400'>
      {textTag}
    </Badge>
  )
}