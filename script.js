let realData ="";
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const btn = document.getElementById("newQuote");
const tweet = document.getElementById("tweet");
let quoteData="";
const tweetNow = ()=>{
    const tweetPost = `https://twitter.com/intent/tweet?text=${quoteData.text}`;
    window.open(tweetPost);
};
const getNewQuotes=(len)=>{
    let rnum = Math.floor(Math.random()*len);
    quoteData = realData[rnum];
    quotes.innerText=`${quoteData.text}`;
    author.innerText = quoteData.author==null?"By Unknown":`By ${quoteData.author}`; 
    return rnum;
}
const getQuotes = async()=>{
    try {
        let data = await fetch(api);
         realData = await data.json();
         getNewQuotes(realData.length);
         //console.log(realData.length)
        //  console.log(realData[quoteNum].text);
        //  console.log(realData[quoteNum].author);
    } catch (error) {
        
    }
};
const api = "https://type.fit/api/quotes";
getQuotes();
btn.addEventListener("click",getQuotes);
tweet.addEventListener("click",tweetNow);