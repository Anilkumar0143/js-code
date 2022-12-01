let sno = 0;
let roIndex;
var body = document.getElementById("newRow");
var Table = document.getElementById("tableGetData");

function addNew() {
    localStorage.clear();
    for (var i = 0; i < 1; i++) {
        var row = document.createElement("tr");
        row.setAttribute("id", "texrow" + (sno++));
        for (var j = 0; j < 1; j++) {
            var cell1 = document.createElement("td");
            var cellinput1 = document.createElement("input");
            cellinput1.setAttribute("type", "text");
            cellinput1.setAttribute("id", "tex" + (i++) + (sno));
            cellinput1.setAttribute("value", "anil");
            cell1.appendChild(cellinput1);
            row.appendChild(cell1);

            var cell2 = document.createElement("td");
            var cellinput2 = document.createElement("input");
            cellinput2.setAttribute("type", "text");
            cellinput2.setAttribute("id", "tex" + (i++) + (sno));
            cellinput2.setAttribute("value", "10k");
            cell2.appendChild(cellinput2);
            row.appendChild(cell2);  

            var cell3 = document.createElement("td");
            var cellinput3 = document.createElement("input");
            cellinput3.setAttribute("type", "date");
            cellinput3.setAttribute("id", "tex" + (i++) + (sno));
            cell3.appendChild(cellinput3);
            row.appendChild(cell3);

            var cell4 = document.createElement("td");
            var button = document.createElement("button");
            button.setAttribute("class", "remove");
            button.setAttribute("id", "tex" + (i++) + (sno));
            button.innerHTML = "Delete Row" + ' <i class="fas fa-trash " aria-hidden="true title="Remove Row"></i>';
            button.addEventListener("click", function deleteRow() {
                if (sno >= 1) {
                    sno--;
                    for (var i = 0; i < body.rows.length; i++) {
                        body.rows[i].onclick = function () {
                            let rIndex = this.rowIndex - 1;
                            body.deleteRow(rIndex);
                        }
                    }
                } else(alert("you have no row to delete1"));
            });
            cell4.appendChild(button);
            row.appendChild(cell4);
        }
    }
    body.appendChild(row);
}

function removeRow() {
    if (sno >= 1) {
        document.getElementById("newRow").innerHTML = " ";
        sno = 0;
    } else {
        alert("you have no row to delete");
    };
};

function submitData() {
    Table.innerHTML = "";
    let deatils = [];
    for (let f = 1; f <= body.rows.length; f++) {
        let obj = {
            productName: document.getElementById("tex0" + f).value,
            price: document.getElementById("tex1" + f).value,
            date: document.getElementById("tex2" + f).value
        };
        deatils.push(obj);
        localStorage.setItem("person", JSON.stringify(deatils));
    }
    disPlayData();
};
let no = 0;

function disPlayData() {
    let getData = localStorage.getItem("person");
    let Arraydata = JSON.parse(getData);

    function generateTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
            let cell1 = row.insertCell();
            var buttonEdit = document.createElement("button");
            buttonEdit.setAttribute("class", "btn-primary edit");
            buttonEdit.innerHTML = ' <span   data-toggle="modal"  data-target="#fullHeightModalleft">Edit</span>';
            buttonEdit.addEventListener("click", function EditRow() {
                if (sno >= 0) {
                    for (var i = 0; i < Table.rows.length; i++) {
                        Table.rows[i].onclick = function () {
                            var productNameEditing = document.getElementById("formProduct"),
                                priceEditing = document.getElementById("formPrice"),
                                dateEditing = document.getElementById("formdate");
                            for (let j = 0; j < Arraydata.length; j++) {
                                roIndex = this.rowIndex;
                                productNameEditing.value = Arraydata[roIndex - 1].productName;
                                priceEditing.value = Arraydata[roIndex - 1].price;
                                dateEditing.value = Arraydata[roIndex - 1].date;
                                return roIndex;
                            };

                        }
                    }
                } else(alert("you have no row to delete1"));
            });
            cell1.appendChild(buttonEdit);
        }
    }
    generateTable(Table, Arraydata);
}

function saveEditedData() {
    let getData = localStorage.getItem("person");
    let Arraydata = JSON.parse(getData);

    var editedData = {
        productName: document.getElementById("formProduct").value,
        price: document.getElementById("formPrice").value,
        date: document.getElementById("formdate").value
    } 
    console.log(editedData);

    Arraydata[roIndex - 1] = editedData;
    // Arraydata.push(Arraydata[roIndex - 1]);
    localStorage.setItem("person", JSON.stringify(Arraydata));
    Table.innerHTML = "";
    disPlayData();
}

function updateData() {
    if (Table.rows.length > 0) {
        var deatilsUpdated = []
        var rowLength = Table.rows.length;
        for (i = 0; i < rowLength; i++) {
            var Cells = Table.rows.item(i).cells;
            var cellLength = Cells.length;
            for (var j = 0; j < cellLength - 1; j++) {
                let objUpdated = {
                    updattedProductName: Cells.item(0).innerHTML,
                    updattedPrice: Cells.item(1).innerHTML,
                    updatteddate: Cells.item(2).innerHTML

                }
                j = 0;
                deatilsUpdated.push(objUpdated);
            }
        }
        localStorage.setItem("updated person", JSON.stringify(deatilsUpdated));
    } else {
        alert("Table length is less then 1");
    }
}