import Image from 'next/image'

export default function Logo({ size = 24 }: { size?: number }) {
  return (
    <div className="relative flex items-center justify-center">
      <Image src="/assets/logo.png" alt="❤️" width={size} height={size}/>
    </div>
  )
}
