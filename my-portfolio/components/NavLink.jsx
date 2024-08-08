import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from "next/link";

export default function NavLink({ href, id, children, ...props }) {
    const pathname = usePathname();
    const router = useRouter();

    const pickRoute = pathname === "/" ? `${href}` : `/${href}` ;



    return (
        <Link href={pickRoute} {...props}>
            {children}
        </Link>
    )
}
