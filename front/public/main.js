function addCost(){
    const product_name = document.getElementById("product_name").value
    const product_cost = document.getElementById("product_cost").value
    const product_labels = document.getElementById("product_labels").value

    if ((product_name.trim()).length == 0){
        alert("The name of product is empty")
        return
    }
    if ((product_cost.trim()).length == 0){
        alert("The cost of product is empty")
        return
    }

    addCostToHtmlList(product_name, product_cost, product_labels)
    clearAllHtmlLabel()

}

function addCostToHtmlList(product_name, product_cost, product_labels){
    const labels = createHtmlForLabels(product_labels)
    const product_list_value = `<tr><td>${product_name}</td><td>${product_cost}</td><td>${labels}</td></tr>`
    document.querySelector("#costs_list").innerHTML += product_list_value
}

function createHtmlForLabels(label){
    const labels = label.split(';')
    const labelsForList = labels.map(element => `<li>${element}</li>`).join('')
    return `<ul>${labelsForList}</ul>`
}

function clearAllHtmlLabel(){
    const text_input = document.querySelectorAll("input[type=text], input[type=number]")
    text_input.forEach(element => element.value = "")
}

function clearCosts(){
    document.querySelector("#costs_list").innerHTML = "<tr><th>Name</th><th>Cost</th><th>Labels</th></tr>"
}