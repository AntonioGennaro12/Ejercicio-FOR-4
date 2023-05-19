const   miDiv1      =   document.querySelector ("#mi-div1");
const   miLab1      =   document.querySelector ("#mi-lab1");

const   MAX_COUNT   =   20;
const   MI_IMG1     =   "https://1.bp.blogspot.com/-H4Vy4oV0WqM/XbnqCvuL_bI/AAAAAAAAcF8/yp5qRAMJeEAJXAgDsVxdQE6wbjgPNmpZACLcBGAsYHQ/s320/sintaxis%2B1.jpg";

/**
 * Genera Código HTML
 */
function generaCodigo() {
    miDiv1.innerHTML = "";  // borra todo
    let num = miLab1.value;
    if (( num > 0)&&(num <= MAX_COUNT) ) {
        for (let cont = 1 ; cont <= num; cont++) {
            miDiv1.innerHTML += `
            <img src=${MI_IMG1} alt="">
            `;
        }
    } 
    else {
        miDiv1.innerHTML += `
            <p>Solo cantidades de 1 hasta ${MAX_COUNT}</p>
            `;
    }
}
miDiv1.innerHTML = "";  // borra todo
/* Fin del codigo JS */