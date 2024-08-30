'use client';

import {useEffect, useState} from "react";
import {Spinner} from "@nextui-org/react";

export default function Loader() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <Spinner color="success" size="lg" label="Approaching Earth..."/>
        </div>
    )
}
