
const apikey = "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"

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
