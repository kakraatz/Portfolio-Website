import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function LinkChanger({ href, children, ...props }) {
    const pathname = usePathname();

    console.log(pathname)

    const pickHref = pathname === "/" ? `#${href}` : `${href}`;

    console.log(pickHref)

    return (
        <Link href={pickHref} {...props}>
            {children}
        </Link>
    )
};
