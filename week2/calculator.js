let expr = '';
function press(val) {
    expr += val;
    document.getElementById('display').value = expr;
}
function calculate() {
    try {
        document.getElementById('display').value = eval(expr);
        expr = '';
    } catch {
        document.getElementById('display').value = 'Error';
        expr = '';
    }
}
function clearDisplay() {
    expr = '';
    document.getElementById('display').value = '';
} 