document.getElementById('colorBtn').onclick = function() {
    document.body.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
};
document.getElementById('toggleBtn').onclick = function() {
    const text = document.getElementById('toggleText');
    text.style.display = (text.style.display === 'none') ? 'block' : 'none';
}; 