import React, { useState } from 'react';

export default function Home() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1> Home</h1>
            <p>You have booked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Book a seat
            </button>
        </div>
    );
}

