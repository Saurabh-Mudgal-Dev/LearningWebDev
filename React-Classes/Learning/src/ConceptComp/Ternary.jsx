import React from 'react'

const Ternary = () => {
    const isLoggedIn = true;
    return (
        <div>
            {isLoggedIn ? <h2>Welcome</h2> : <h2>Please log in</h2>}
        </div>
    )
}

export default Ternary