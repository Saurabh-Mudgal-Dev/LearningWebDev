import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='main-header'>
                <div>Navbar</div>
                <div>Logo</div>
                <div><ol><li>abc</li>
                    <li>def</li></ol></div>
            </div>
        </>
    )
}

export default Navbar

// the angle brackets are reacts fragments. Use them to avoid error when writing html in jsx
// either wrap it all in div or use react fragments