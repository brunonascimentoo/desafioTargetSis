fetch('dados.json')
    .then(response => response.json())
    .then(json => loading(json));


function loading(json) {


    const resultado = document.querySelector('.container');
    const table = document.createElement('table');

    let listaAgrupada = [];

    json.forEach(e => {

        let existe = listaAgrupada.findIndex(i => i.dia == e.dia);
        let existeObj = listaAgrupada.find(i => i.dia == e.dia);
        if (existe == -1) {
            listaAgrupada.push(e);


        } else if (existe != -1 && existeObj.valor < e.valor) {
            listaAgrupada.splice(existe, 1);
            listaAgrupada.push(e);


        }
    });

    listaAgrupada.forEach(e => {

        const tr = document.createElement('tr');
        let td = document.createElement('td');
        
        td.innerHTML = e.dia;
        tr.appendChild(td);
        
        
        td = document.createElement('td');
        td.innerHTML = e.valor;

        tr.appendChild(td)

        table.appendChild(tr)
        resultado.appendChild(table)

    })




}

