const calculatePrice = (price: number, discount: number): number => {
    return Math.ceil((price * (100 - discount)) / 100);
};

export default calculatePrice;
