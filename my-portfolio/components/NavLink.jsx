import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from "next/link";

export default function NavLink({ href, children, ...props }) {
    const pathname = usePathname();
    const router = useRouter();

    const pickRoute = pathname === "/" ? `${href}` : `/${href}`;

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    )
}
