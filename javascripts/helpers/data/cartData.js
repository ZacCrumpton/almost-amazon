const cart = [];

const setCart = () => {
    cart.push(book);
};

const getCart = () => {
    return cart;
};

export default { setCart, getCart }