"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LinkProfile() {

    const [isCpoiedLink, setIsCopiedLink] = useState(false);

    const copyLink = () => {
        const url = `${window.location.origin}/tarredevTest`;

        navigator.clipboard.writeText(url);

        setIsCopiedLink(true);
    }


  return (
    <div className="bg-indigo-100 rounded-3xl">
        <div className="flex flex-col  justify-center text-center py-4 px-4 items-center gap-2 md:flex-row md:justify-between md:text-left">
            <span className="text-sm">
                <span>🔥 Your Linktree clone is live!</span> {window.location.origin}@tarredevTest
            </span>

            <Button 
                variant="outline"
                className="rounded-full px-4 bg-white  text-xs md:text-[14px]"
                onClick={copyLink}    
            >
                {isCpoiedLink ? "Copied!" : "Copy your TarreTree URL"}
                
            </Button>
        </div>
    </div>
  )
}

