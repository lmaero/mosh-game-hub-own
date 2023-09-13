import { Card, CardBody } from '@chakra-ui/card'
import { Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

function GameCardSkeleton() {
  return (
    <Card borderRadius={10} overflow={'hidden'} width={'300px'}>
      <Skeleton height={'200px'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
