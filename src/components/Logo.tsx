import Image, { ImageProps } from "next/image"
import logo from "public/images/logos/logo.png"

const Logo = ({ ...rest }: Omit<ImageProps, 'src' | 'alt'>) => <Image
    {...rest}
    width={rest.width ?? 100}
    height={rest.height ?? 100}
    src={logo}
    alt="GLYS Logo"
/>


export default Logo
