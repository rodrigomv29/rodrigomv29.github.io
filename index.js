let lastUpdatedSpan = document.querySelector(".last-updated").textContent = new Date(document.lastModified).toLocaleDateString()
async function getQuoteData() {
    const url = "https://zenquotes.io/api/random"
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status ${response.status}`)
        }
        const json = await response.json()
    } catch(error){
        console.error(error.message)
    }
    return json;
}
const nowMonth = Date.now()
if (nowMonth.getFullYear() == "11"){
    // read first line of used-quote    
        
}