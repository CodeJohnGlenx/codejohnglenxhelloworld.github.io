let colors = ['#E74C3C', '#9B59B6', '#8E44AD', '#2980B9', '#3498DB', '#1ABC9C', '#16A085', '#27AE60',
'#2ECC71', '#F1C40F', '#F39C12', '#E67E22', '#D35400'];

let rand_color;

let interval_bg = window.setInterval(change_bg, 200);

// functions
function change_bg()
{
    rand_color = Math.trunc(Math.random() * colors.length);
    document.querySelector('body').style.background = colors[rand_color];
}



