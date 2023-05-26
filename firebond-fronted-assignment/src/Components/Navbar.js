import React from 'react'

export default function Navbar() {
    let globalarguments =[];
    function addArgument() {
        const argumentsContainer = document.getElementById("arguments-container");

        // Create a new div element
        const newArgument = document.createElement("div");

        // Create input element with value "my arg"
        const argInput = document.createElement("input");
        argInput.type = "text";
        argInput.value = "my arg";
        argInput.classList.add("arg-input");
        newArgument.appendChild(argInput);

        // Create select element with options "true" and "false"
        const argSelect = document.createElement("select");
        argSelect.classList.add("arg-select");
        
        const optionFalse = document.createElement("option");
        optionFalse.value = "false";
        optionFalse.textContent = "false";
        argSelect.appendChild(optionFalse);
        
        const optionTrue = document.createElement("option");
        optionTrue.value = "true";
        optionTrue.textContent = "true";
        argSelect.appendChild(optionTrue);

        newArgument.appendChild(argSelect);

        // Insert the new argument above the add-arg-button
        argumentsContainer.append(newArgument);
    }

    // Add event listener to the add-arg-button
    // const addArgButton = document.getElementById("add-arg-button");
    // addArgButton.addEventListener("click", addArgument);

    function resetSelect() {
        const selectElement = document.querySelector(".form-select");
        selectElement.selectedIndex = 0;
    }

    function handleSelectChange(selectElement) {
        const selectedValue = selectElement.value;
        const newbox = document.querySelector("#addbox");
        newbox.innerHTML="";
        if (selectedValue === "and") {
            addArgument();
            addArgument();
            
            //selectElement.selectedIndex = 0; // Reset the select option to the default value
        }
        else if(selectedValue==='constant')
        {
            constantValueChange();
        }
        
    }

    function constantValueChange()
    {
          const newbox = document.querySelector("#addbox");

          const selectElement = document.createElement("select");
          selectElement.classList.add("form-select");
          selectElement.setAttribute("aria-label", "Default select example");

          const selectDefaultOption = document.createElement("option");
            selectDefaultOption.value = "false";
            selectDefaultOption.textContent = "false";

            const constantOption = document.createElement("option");
            constantOption.value = "true";
            constantOption.textContent = "true";

          selectElement.append(selectDefaultOption,constantOption);
          newbox.append(selectElement);


    }

    function argumentlist()
    {

    }

    function handleValueChange(selectValue)
    {
        document.querySelector("#result").innerHTML="result : "+selectValue.value;
    }

    function addNewArgument()
    {
        const formtag= document.createElement("form");
        formtag.setAttribute("class","container");

        const newArgumentDiv1= document.createElement("div");
        newArgumentDiv1.setAttribute("class","col-auto");

        const newArgumentDiv2= document.createElement("div");
        newArgumentDiv2.setAttribute("class","col-auto");

        const button1 = document.createElement("input");
        button1.value="newArg";
        button1.textContent="newArg"
        // button1.classList.add("btn btn-light border-button");
       
        const selectElement = document.createElement("select");
        selectElement.classList.add("form-select");
        selectElement.setAttribute("aria-label", "Default select example");

        const selectDefaultOption = document.createElement("option");
        selectDefaultOption.value = "false";
        selectDefaultOption.textContent = "false";

        const constantOption = document.createElement("option");
        constantOption.value = "true";
        constantOption.textContent = "true";

        newArgumentDiv1.append(button1);
        selectElement.append(selectDefaultOption,constantOption);
        newArgumentDiv2.append(selectElement);
        
        formtag.append(newArgumentDiv1,newArgumentDiv2)
        document.querySelector("#box").append(formtag);

    }
  return (
    <>
        <div id="arguments-container">
        <div>
            <input type="text" className="arg-input" value="my arg"/>
            <select className="arg-select" onchange={handleValueChange(this)}>
                <option value="false">false</option>
                <option value="true">true</option>
            </select>
        </div>
    </div>

    <button type="button" id="add-arg-button">+ add arg</button>

   

        <div id="argumentsContainer">
            
            <div className="container">
                <div className="select-reset">
                    <select className="form-select" aria-label="Default select example" onchange="handleSelectChange(this)">
                        <option value="select_default">select...</option>
                        <option value="constant" >constant</option>
                        <option value="arg">argument</option>
                        <option value="and">and</option>
                        <option value="or">or</option>
                    </select>
                </div>
                <div className="container" id="addbox"></div>
                <button onclick="resetSelect()">✕</button>
            </div>
        </div>
        <p id="result">result : undefined</p>
    
    </>
  )
}
