import React from "react";
import { useEffect, useState } from "react";

export default function LastScreen(props) {
    
    useEffect(() => {
        props.handleFade(false);
            setTimeout(()=>{
                props.handleCount(0)
                props.handleFade(true);
            }, 1000)
            setTimeout(function () {
                props.loading.current = false;
            }, 2000)
    }, [])

    return <div>
    </div>
}