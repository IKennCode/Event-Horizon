import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t bg-zinc-300 ">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logoLordsRecovery.png"
            alt="logo"
            width={80}
            height={38}
          />
        </Link>

        <p>2024 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer