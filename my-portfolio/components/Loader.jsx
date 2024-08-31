'use client';

import {useEffect, useState} from "react";
import {Spinner} from "@nextui-org/react";
import {useTheme} from "next-themes";

export default function Loader() {

    return (
        <div className="fixed inset-0 top-0 flex items-center justify-center z-50">
            <Spinner color="success" size="lg" label="Approaching Earth..."/>
        </div>
    )
}
