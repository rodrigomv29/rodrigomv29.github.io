const api_url = encodeURI("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random/");
//console.log("HELLO WORLD!!")
async function getapi(url)
{
    try {
        const response = await fetch(url, {mode: 'cors'});
        if(!response.ok){
            if (response.status == 429){
                return await quote_limit()
            }
            else {
                throw new Error(`HTTP error! status: ${response.status}`);

            }
        }
        var data = await response.json();
        return data;

    }
    catch (error){
        console.error('Error: ', error)
    }
}
async function main() {
    const data = await getapi(api_url);
    if(data && data[0] && data[0]['q'] && data[0]['a']) {
        console.log(data[0]['q']);
        console.log(data[0]['a']);
        return `${data[0]['q']}- ${data[0]['a']}`
        
    }
    else  {
        return "none"
    }   
   
}

main().then(result =>{
    document.querySelector(".last-updated").textContent = new Date(document.lastModified).toLocaleDateString()
    document.querySelector(".quote-msg").textContent = result;

});


async function quote_limit() {
    return "quote limit reached";
}

/**
 * 
 * 
 * 
 * const now = new Date()
 * console.log(now.getHours())
    if (now.getFullYear() == "2025"){
    // read first line of used-quote
    console.log("Hello World!")
        
}
 * 
 */
