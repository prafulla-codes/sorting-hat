let wrapper = document.querySelector('.wrapper');

const STAR1 = 50;
const STAR2 = 50;
const STAR3 = 50;


for (let i=0;i<STAR1;i++)
{
    let star = document.createElement('div');
    star.setAttribute('class','stars');
    wrapper.appendChild(star);
}