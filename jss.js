let eltHeader = document.getElementById('top');
let eltAvantage = document.getElementById('avant');
let eltPresent = document.getElementById('present');
let eltProduit = document.getElementById('prod')
let eltPromo = document.getElementById('pro');

let eltBntPanier = document.getElementById("bntPanier");

let eltBnt1 = document.getElementById('bnt1');
let eltBnt2 = document.getElementById('bnt2');
let eltBnt3 = document.getElementById('bnt3');

let eltQntPanier = 0;
eltBntPanier.textContent = " " + eltQntPanier;
//eltBntPanier.textContent.style.fontfamily = "Montserrat";

eltBnt1.addEventListener("click", qntBnt, false);
eltBnt2.addEventListener("click", qntBnt, false);
eltBnt3.addEventListener("click", qntBnt, false);

function qntBnt() {
  eltQntPanier += 1;
  eltBntPanier.textContent = " " + eltQntPanier;
}

let eltPagePanier = document.getElementById("pagePanier");
eltPagePanier.style.display = "none";

eltBntPanier.addEventListener("click", AffPagePanier, false);

function AffPagePanier() {
  eltHeader.style.display = "none";
  eltAvantage.style.display = "none";
  eltPresent.style.display = "none";
  eltProduit.style.display = "none";
  eltPromo.style.display = "none";
  eltPagePanier.style.display = "inherit";
}

let eltrow1 = document.getElementById('row_1');
let eltrow2 = document.getElementById('row_2');
let eltrow3 = document.getElementById('row_3');
let eltrow4 = document.getElementById('row_4');
let eltrow5 = document.getElementById('row_5');
let eltInputRow2 = document.getElementById('value_row2');
let eltInputRow3 = document.getElementById('value_row3');
let eltInputRow4 = document.getElementById('value_row4');
let eltTotalPrixProduct1 = document.getElementById('total_product1');
let eltTotalPrixProduct2 = document.getElementById('total_product2');
let eltTotalPrixProduct3 = document.getElementById('total_product3');
let eltTotalPrixProduct = document.getElementById('total_product');

eltrow2.style.display = "none";
eltrow3.style.display = "none";
eltrow4.style.display = "none";

let eltAjoutQnt1 = document.getElementById('ajout_qnt1')
let eltMoinsQnt1 = document.getElementById('moins_qnt1')
let eltAjoutQnt2 = document.getElementById('ajout_qnt2')
let eltMoinsQnt2 = document.getElementById('moins_qnt2')
let eltAjoutQnt3 = document.getElementById('ajout_qnt3')
let eltMoinsQnt3 = document.getElementById('moins_qnt3')

let prixProductTotal = 0;

let qntPanier1 = 0;
let prixProduct1 = 19.99;

eltBnt1.addEventListener("click", qntBnt1, false);
function qntBnt1() {
  qntPanier1 += 1;
    eltrow2.style.display = "flex";
    eltInputRow2.textContent = qntPanier1;
    prixProduct1 = 19.99 * qntPanier1;
    eltTotalPrixProduct1.textContent = prixProduct1.toFixed(2) + "€";
    prixProductTotal = prixProduct1 + prixProduct2 + prixProduct3;
    eltTotalPrixProduct.textContent = prixProductTotal.toFixed(2) + "€";
  }

eltAjoutQnt1.addEventListener("click", qnt1, false);
function qnt1() {
  qntPanier1 += 1;
    eltrow2.style.display = "flex";
    eltInputRow2.textContent = qntPanier1;
    prixProduct1 = 19.99 * qntPanier1;
    eltTotalPrixProduct1.textContent = prixProduct1.toFixed(2) + "€";
    prixProductTotal = prixProduct1 + prixProduct2 + prixProduct3;
    eltTotalPrixProduct.textContent = prixProductTotal.toFixed(2) + "€";
  }

  eltMoinsQnt1.addEventListener("click", qnt1bis, false);
  function qnt1bis() {
    qntPanier1 -= 1;
    if (qntPanier1 > 0) {
      eltrow2.style.display = "flex";
      eltInputRow2.textContent = qntPanier1;
      prixProduct1 = 19.99 * qntPanier1;
      eltTotalPrixProduct1.textContent = prixProduct1.toFixed(2) + "€";
      prixProductTotal = prixProduct1 + prixProduct2 + prixProduct3;
      eltTotalPrixProduct.textContent = prixProductTotal.toFixed(2) + "€";
    } else {
      eltrow2.style.display = "none";
    }
    }

let qntPanier2 = 0;
let prixProduct2 = 14.99;

eltBnt2.addEventListener("click", qntBnt2, false);
function qntBnt2() {
  qntPanier2 += 1;
    eltrow3.style.display = "flex";
    eltInputRow3.textContent = qntPanier2;
    prixProduct2 = 14.99 * qntPanier2;
    eltTotalPrixProduct2.textContent = prixProduct2.toFixed(2) + "€";
    prixProductTotal = prixProduct1 + prixProduct2 + prixProduct3;
    eltTotalPrixProduct.textContent = prixProductTotal.toFixed(2) + "€";
  }

eltAjoutQnt2.addEventListener("click", qnt2, false);
function qnt2() {
  qntPanier2 += 1;
    eltrow3.style.display = "flex";
    eltInputRow3.textContent = qntPanier2;
    prixProduct2 = 14.99 * qntPanier2;
    eltTotalPrixProduct2.textContent = prixProduct2.toFixed(2) + "€";
    prixProductTotal = prixProduct1 + prixProduct2 + prixProduct3;
    eltTotalPrixProduct.textContent = prixProductTotal.toFixed(2) + "€";
  }

  eltMoinsQnt2.addEventListener("click", qnt2bis, false);
  function qnt2bis() {
    qntPanier2 -= 1;
    if (qntPanier2 > 0) {
      eltrow3.style.display = "flex";
      eltInputRow3.textContent = qntPanier2;
      prixProduct2 = 14.99 * qntPanier2;
      eltTotalPrixProduct2.textContent = prixProduct2.toFixed(2) + "€";
      prixProductTotal = prixProduct1 + prixProduct2 + prixProduct3;
      eltTotalPrixProduct.textContent = prixProductTotal.toFixed(2) + "€";
    } else {
      eltrow3.style.display = "none";
    }
  }

  eltAjoutQnt3.addEventListener("click", qnt3, false);
  function qnt3() {
    qntPanier3 += 1;
      eltrow4.style.display = "flex";
      eltInputRow4.textContent = qntPanier3;
      prixProduct3 = 14.99 * qntPanier3;
      eltTotalPrixProduct3.textContent = prixProduct3.toFixed(2) + "€";
      prixProductTotal = prixProduct1 + prixProduct2 + prixProduct3;
      eltTotalPrixProduct.textContent = prixProductTotal.toFixed(2) + "€";
    }

    eltMoinsQnt3.addEventListener("click", qnt3bis, false);
    function qnt3bis() {
      qntPanier3 -= 1;
      if (qntPanier3 > 0) {
        eltrow4.style.display = "flex";
        eltInputRow4.textContent = qntPanier3;
        prixProduct3 = 14.99 * qntPanier3;
        eltTotalPrixProduct3.textContent = prixProduct3.toFixed(2) + "€";
        prixProductTotal = prixProduct1 + prixProduct2 + prixProduct3;
        eltTotalPrixProduct.textContent = prixProductTotal.toFixed(2) + "€";
      } else {
        eltrow4.style.display = "none";
      }
    }

let qntPanier3 = 0;
let prixProduct3 = 39.99;
eltBnt3.addEventListener("click", qntBnt3, false);
function qntBnt3() {
  qntPanier3 += 1;
  if (qntPanier3 > 0) {
    eltrow4.style.display = "flex";
    eltInputRow4.textContent= qntPanier3;
    prixProduct3 = 39.99 * qntPanier3;
    eltTotalPrixProduct3.textContent = prixProduct3.toFixed(2) + "€";
    prixProductTotal = prixProduct1 + prixProduct2 + prixProduct3;
    eltTotalPrixProduct.textContent = prixProductTotal.toFixed(2) + "€";
  } else {
    eltrow4.style.display = "none";
  }
}

let eltBntValider = document.getElementById("bntValider");

let eltPageCreateCompte = document.getElementById("pageCreateCompte");
eltPageCreateCompte.style.display = "none";

eltBntValider.addEventListener("click", AffPageCreateCompte, false);

function AffPageCreateCompte() {
  eltHeader.style.display = "none";
  eltAvantage.style.display = "none";
  eltPresent.style.display = "none";
  eltProduit.style.display = "none";
  eltPromo.style.display = "none";
  eltPagePanier.style.display = "none";
  eltPageCreateCompte.style.display = "inherit";
}