import bullsEye from '@/public/bulls-eye.webp'
import meh from '@/public/meh.webp'
import thumbsUp from '@/public/thumbs-up.webp'
import { Image } from '@chakra-ui/react'

interface Props {
  rating: number
}

interface ImageProps {
  src: string
  alt: string
  boxSize: string
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh.src, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp.src, alt: 'recommended', boxSize: '25px' },
    5: { src: bullsEye.src, alt: 'exceptional', boxSize: '35px' },
  }

  return (
    <Image
      boxSize={emojiMap[rating].boxSize}
      marginTop={1}
      src={emojiMap[rating].src}
      alt={emojiMap[rating].alt}
    />
  )
}

export default Emoji
