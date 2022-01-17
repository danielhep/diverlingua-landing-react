import Image from 'next/image'
export default function Section ({ fullHeight, textSide, children, img, style }) {
  return (
    <div
      className={`relative flex leading-normal px-8 justify-center font-header w-full ${fullHeight ? 'hFull' : 'h-96'}`}
      style={style}
    >
      <div
        className={`flex leading-normal mx-8 w-full z-10 max-w-screen-lg ${textSide === 'right' ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <div className={`flex flex-col justify-center ${textSide === 'full' ? 'w-full' : ''}`}>
          <p className='text-2xl'>
            {children}
          </p>
        </div>
        {textSide === 'full' && <div className='flex-grow' />}
        {img && <Image src={img} alt='' />}
      </div>
    </div>
  )
}