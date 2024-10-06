document.addEventListener('DOMContentLoaded', () => {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const leftBtn = left.querySelector('.btn');
    const rightBtn = right.querySelector('.btn');

    function expandSide(side) {
        side.style.width = '70%';
        side.classList.add('expanded');
        (side === left ? right : left).style.width = '30%';
    }

    function resetSides() {
        left.style.width = '50%';
        right.style.width = '50%';
        left.classList.remove('expanded');
        right.classList.remove('expanded');
    }

    leftBtn.addEventListener('click', (e) => {
        e.preventDefault();
        expandSide(left);
    });

    rightBtn.addEventListener('click', (e) => {
        e.preventDefault();
        expandSide(right);
    });

    document.addEventListener('click', (e) => {
        if (!left.contains(e.target) && !right.contains(e.target)) {
            resetSides();
        }
    });
});