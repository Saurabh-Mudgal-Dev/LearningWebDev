import React, {useState} from 'react'

const AddToWishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    const addItem = () => {
        setWishlist([...wishlist, "iPhone"]);
    };

    return (
        <div>
            <button onClick={addItem}>Add to Wishlist</button>
            <h2>Total Items: {wishlist.length}</h2>
        </div>
    );
}

export default AddToWishlist