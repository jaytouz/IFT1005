function generate_quote(){
    var quotes = ["quote1","quote2","quote3","quote4"];
    let i = Math.floor(Math.random() * quotes.length);
    var generated_quote = quotes[i].toString();
    document.getElementById("demo").innerHTML = generated_quote;
    return;
}
