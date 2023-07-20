function cnpjValidator(cnpj: string): boolean {

    if (!/^\d{14}$/.test(cnpj) || /^(\d)\1{13}$/.test(cnpj)) {
        return false;
    }
    
    const baseNumber = cnpj.slice(0, 12);
    const baseNumberWithFirstDigit = cnpj.slice(0, 13);
    
    const digit01 = Number(cnpj.slice(12, 13));
    const digit02 = Number(cnpj.slice(-1));
    
    let n1 = 5;
    let n2 = 9;
    
    const isFirstValidationOk = baseNumber
        .split("")
        .map(digit => Number(digit))
        .reduce<number | boolean>((accumulator, currentValue, index, arr) => {
            if (index === 0) {
                return currentValue * n1--;
            }
    
            if (n1 >= 2) {
                return Number(accumulator) + currentValue * n1--;
            } else {
                const result = Number(accumulator) + currentValue * n2--;
    
                if (index === arr.length - 1) {
                    const checkDigit = result % 11
    
                    if (checkDigit === 0 || checkDigit === 1) {
                        return 0 === digit01;
                    }
    
                    if (checkDigit >= 2 && checkDigit <= 10) {
                        return (11 - checkDigit) === digit01;
                    } else {
                        return false;
                    }
                }
    
                return result;
            }
        }, 0) as boolean;
    
    n1 = 6;
    n2 = 9;
    
    const isSecondValidationOk = baseNumberWithFirstDigit
        .split("")
        .map(digit => Number(digit))
        .reduce<boolean | number>((accumulator, currentValue, index, arr) => {
            if (index === 0) {
                return currentValue * n1--;
            }
    
            if (n1 >= 2) {
                return Number(accumulator) + currentValue * n1--
            } else {
                const result = Number(accumulator) + currentValue * n2--
    
                if (index === arr.length - 1) {
                    const checkDigit = result % 11;
    
                    if (checkDigit === 0 || checkDigit === 1) {
                        return 0 === digit02;
                    }
    
                    if (checkDigit >= 2 && checkDigit <= 10) {
                        return (11 - checkDigit) === digit02;
                    } else {
                        return false;
                    }
                }
    
                return result
            }
        }, 0) as boolean;
    
        const isCNPJValid = isFirstValidationOk && isSecondValidationOk;
    
    return isCNPJValid
}

export { cnpjValidator };
