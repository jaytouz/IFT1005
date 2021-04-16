function generate_quote(){
    var quotes = [
        "“Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need like my need to be praised.”",
        "“Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject so you know you are getting the best possible information.”",
        "“That’s what she said.”",
        "“Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.”",
        "“I am Beyoncé, always.”",
        "“Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.”",
        "“You cheated on me?....When I specifically asked you not to?”",
        "“I love inside jokes. I hope to be a part of one someday.”",
        "“I feel like all my kids grew up and then they married each other. It’s every parent’s dream.”",
        "“The worst thing about prison was the Dementors. They were flying all over the place and they were scary and they'd come down and they'd suck the soul out of your body and it hurt!”",
        "“I… Declare…. Bankruptcy!”",
        "“I learned a while back that if I do not text 911, people do not return my calls. Um, but people always return my calls because they think that something horrible has happened."];
    let i = Math.floor(Math.random() * quotes.length);
    var generated_quote = quotes[i].toString();
    document.getElementById("quote").innerHTML = generated_quote;
    return;
}
