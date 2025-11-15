
const apikey = process.env.OPENAI_API_KEY;

async function IA(texto) {
    const url = "https://api.openai.com/v1/responses";

    const resposta = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            input: texto
        })
    });

    const data = await resposta.json();
    
    return data.output[0].content[0].text;

    //const dataString = JSON.stringify(data);
    //return dataString;
}
