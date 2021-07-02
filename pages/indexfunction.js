import React, { useState } from 'react'
import Head from "next/head";

export default function indexfunction() {
    const [num, setNum] = useState(0)
    
    const decreaseNumber = () => {
        console.log("Button was clicked");
        if (num > 0) {
            setNum(num-1)
        }
    }

    const increaseNumber = () => {
        console.log("Button was clicked");
        if (num < 100) {
            setNum(num+1)
        }
    }

    return (
        <div>
            <Head>
                <title>The Number</title>
            </Head>
            <p>Number Change</p>
            <div>
                <button type="button" onClick={decreaseNumber}>
                    -
                </button>
                <input type="text" value={num}></input>
                <button type="button" onClick={increaseNumber}>
                    +
                </button>
            </div>
        </div>
    )
}
