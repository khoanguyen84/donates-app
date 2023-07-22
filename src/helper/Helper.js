class Helper {
    static formatCurrency(number) {
        number = Number(number);
        // return number.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' });
        return number.toLocaleString();
    }
}

export default Helper;