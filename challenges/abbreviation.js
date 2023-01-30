function abbreviation(a, b) {
    let aCaptalize = a.toUpperCase();
    let n = aCaptalize.length;
    let m = b.length;
    let dinamico = [];
    
    for(let i = 0; i < n; i++) {
        for(let s = 0; s <= m; s++) {
            if(s < m && a[i].toUpperCase() == b[s] ) {
                dinamico.push(aCaptalize[i])
                var resultado = dinamico.join("")         
        }
    }
    }
    return console.log(resultado === b ? "Yes" : "No");
}
abbreviation("AbcDE", "ABDE");