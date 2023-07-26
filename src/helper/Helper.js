var XLSX = require("xlsx");

class Helper {
    static formatCurrency(number) {
        number = Number(number);
        // return number.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' });
        return number.toLocaleString();
    }

    static exportToExecel(data, sheetName, fileName){
        return new Promise((resolve, reject) => {
            var wb = XLSX.utils.book_new();
            var ws = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(wb, ws, sheetName);
            XLSX.writeFile(wb, `${fileName}_${Date.parse(new Date())}.xlsx`);
            resolve('ok');
        })
    }
}

export default Helper;