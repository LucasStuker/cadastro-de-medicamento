const cadastro = (e) => {
    e.preventDefault ();

    const remName = document.getElementById("remName");
    const remDis = document.getElementById("remDis");
    const remUnit  = document.getElementById("reUnit");
    const remClass = document.getElementById("remClass");

    const infoMedicamento = document.getElementById('infoMedicamento');
    const infoQuantidadeMedicamento = document.getElementById("infoQuantidadeMedicamento");
    const infoPrecoMedicamento = document.getElementById("infoPrecoMedicamento");

    infoMedicamento.innerHTML = remName.value;
    infoQuantidadeMedicamento.innerHTML = `${remDis.value} Unidades disponiveis`;
    infoPrecoMedicamento.innerHTML = `${remUnit.value} reais por unidade `;

}