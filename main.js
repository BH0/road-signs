
    let terms = [
        {term: "national speed limit", definition: "the national speed limit is 60mph"}, 
        {term: "give way", definition: "lorem2" },
        {term: "overtaking", definition: "lorem3"}, 
        {term: "clearway", definition: "lorem4"},
        {term: "dual carriage way", definition: "lorem bada ba bada ba ba ba dskasnkldandkldnksdnsklndklasndskasnkldandkldnksdnsklndklasndskasnkldandkldnksdnsklndklasndskasnkldandkldnksdnsklndklasn5" }
    ];

  
terms.forEach(term => { 
    document.querySelector(".terms").innerHTML += `<li class="term tooltip">
        <b>${term.term}
            <span class="tooltip-bottom">${term.definition}</span>
        </b></li>`;
}); 

document.querySelector("#search-term").addEventListener("keyup", e => { 
    document.querySelector(".terms").innerHTML = ""; 
    if (document.querySelector("#search-term").value != "") { 
        let termsToRender = terms.filter(term => term.term.toLowerCase().includes(e.target.value)); 
        termsToRender.forEach(term => { 
            document.querySelector(".terms").innerHTML += `<li class="term tooltip">
                <b>${term.term}
                    <span class="tooltip-bottom">${term.definition}</span>
                </b></li>`;
        }); 
    } else { 
        terms.forEach(term => { 
            document.querySelector(".terms").innerHTML += `<li class="term tooltip">
                <b>${term.term}
                    <span class="tooltip-bottom">${term.definition}</span>
                </b></li>`;
        }); 
    }
}); 

document.querySelector("#search-definition").addEventListener("keyup", e => { 
    document.querySelector(".terms").innerHTML = ""; 
    if (document.querySelector("#search-definition").value != "") { 
        let termsToRender = terms.filter(term => term.definition.toLowerCase().includes(e.target.value)); 
        termsToRender.forEach(term => { 
            document.querySelector(".terms").innerHTML += `<li class="term tooltip">
                <b>${term.term}
                    <span class="tooltip-bottom">${term.definition}</span>
                </b></li>`;
        }); 
    } else { 
        terms.forEach(term => { 
            document.querySelector(".terms").innerHTML += `<li class="term tooltip">
                <b>${term.term}
                    <span class="tooltip-bottom">${term.definition}</span>
                </b></li>`;
        }); 
    }
}); 