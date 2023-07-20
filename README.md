# CNPJ Validator

It's a function whitch receivs a **string** containing 14 numbers whitout dashs, bars or dots and chech if it's a valid CNPJ returing **true** if it is valid or **false** otherwise.

a CNPJ must fulfill a result of a specific calculation to be valid it is not enough to be fourteen numbers with 0001 and two verifier digits.

That function checks if gived CNPJ comply with all needed to be a valid CNPJ.
Note that the fact that it is a valid number does not necessarily mean that there is a company registered with this number on the **Receita Federal** website.
But this means that this number comply with the format required by **Receita Federal**.

## Sample
```javascript
function cnpjVlidator(cnpj) {
    ...
}

cnpjValidator("58577114000189") // true
cnpjValidator("58577114000179") // false
```