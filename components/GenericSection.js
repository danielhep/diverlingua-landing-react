import Image from 'next/image'
import { bool, object, string } from 'prop-types'
import RandomStars from './RandomStars'

function GenericSection ({ fullHeight, textSide = 'left', children, img, shadow, stars, style, className }) {
  return (
    <div
      className={`relative flex px-8 justify-center font-header w-full ${fullHeight ? 'hFull' : 'h-96'} ${className || ''} ${shadow ? 'shadow-md' : ''}`}
      style={style}
    >
      <div
        className={`flex leading-normal sm:mx-8 w-full z-10 max-w-screen-lg flex-col my-6 sm:my-0 ${textSide === 'right' ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
      >
        <div className={`flex flex-col justify-center ${textSide === 'full' ? 'w-full' : ''}`}>
          <span className='text-2xl'>
            {children}
          </span>
        </div>
        {textSide !== 'full' && <div className='flex-grow' />}
        {img && <Image src={img} alt='' />}
      </div>
      {stars && <RandomStars />}
    </div>
  )
}

GenericSection.propTypes = {
  fullHeight: bool,
  textSide: string,
  img: object,
  shadow: bool,
  stars: bool,
  style: object,
  className: string
}

export default GenericSection
