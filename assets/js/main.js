const brutto = document.getElementById("bruttorechner");
const netto = document.getElementById("nettorechner");
const prozent19 = document.getElementById("prozen19");
const prozent7 = document.getElementById("prozent7");
const inputbetarg = document.getElementById("input");
const h2 = document.getElementById("netto-brutto");
const mehrwertsteuerBetrag = document.getElementById("betrag");
const bruttoNetto = document.getElementById("bruttoNettoEndBetrag");
const result = document.getElementById("result");

function bruttoZuNetto(event) {
  event.preventDefault();
  if (brutto.checked) {
    h2.innerHTML = `Nettobetrag (preis ohne Mehrwertsteuer) in Euro`;
    bruttoNetto.innerHTML = "Bruttobetrrag";
  } else if (netto.checked) {
    h2.innerHTML = "Bruttobetrag (preis inklusive Mehrwertsteuer) in Euro";
    bruttoNetto.innerHTML = "Nettobetrag";
  }
}

function mehrertsteurRechner(event) {
  event.preventDefault();
  console.log(brutto.checked);
  if (brutto.checked && prozent19.checked) {
    mehrwertsteuerBetrag.innerHTML =
      ((Number(inputbetarg.value) * 19) / 100).toFixed(2) + " €";

    result.innerHTML = (inputbetarg.value * 1.19).toFixed(2) + " €";
  } else if (brutto.checked && prozent7.checked) {
    mehrwertsteuerBetrag.innerHTML =
      ((Number(inputbetarg.value) * 7) / 100).toFixed(2) + " €";
    result.innerHTML = (inputbetarg.value * 1.07).toFixed(2) + " €";
  } else if (netto.checked && prozent19.checked) {
    mehrwertsteuerBetrag.innerHTML =
      ((Number(inputbetarg.value) / 1.19) * 0.19).toFixed(2) + " €";
    result.innerHTML = (Number(inputbetarg.value) / 1.19).toFixed(2) + " €";
  } else if (netto.checked && prozent7.checked) {
    mehrwertsteuerBetrag.innerHTML =
      ((Number(inputbetarg.value) / 1.07) * 0.07).toFixed(2) + " €";
    result.innerHTML = (Number(inputbetarg.value) / 1.07).toFixed(2) + " €";
  }
}
