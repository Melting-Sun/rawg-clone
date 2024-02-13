import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card width='230px' borderRadius={15} overflow='hidden'>
        <Skeleton height='200px'/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
    )
}
