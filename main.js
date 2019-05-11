
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

