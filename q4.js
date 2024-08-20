function createTaxCalculator() {
    const taxBrackets = [
        { limit: 10000, rate: 0.1 },
        { limit: 30000, rate: 0.2 },
        { limit: Infinity, rate: 0.3 }
    ];
    return function calculateTax(income) {
        let tax = 0;
        let previousLimit = 0;

        for (let bracket of taxBrackets) {
            if (income > bracket.limit) {
                tax += (bracket.limit - previousLimit) * bracket.rate;
                previousLimit = bracket.limit;
            } else {
                tax += (income - previousLimit) * bracket.rate;
                break;
            }
        }

        return tax;
    };
}
const calculateTax = createTaxCalculator();
console.log(`Tax for $5,000 income: $${calculateTax(5000)}`);
console.log(`Tax for $15,000 income: $${calculateTax(15000)}`);
console.log(`Tax for $35,000 income: $${calculateTax(35000)}`);
