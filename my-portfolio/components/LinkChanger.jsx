import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";

export default function LinkChanger({ href, children, ...props }) {
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname);

    const pickRoute = (e) => {
        if (pathname === "/") {
            e.preventDefault();
            if (href === pathname) {
                document.querySelector(`[name='#${href}']`).scrollIntoView({ behavior: "smooth" });
            } else {
                document.querySelector(`[name='${href}']`).scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push(href);
        }
    }
    return (
        <Link href={href} onClick={pickRoute} {...props}>
            {children}
        </Link>
    )
};