const typingText = document.querySelector(".typing-text p");

function randomParagraph()
{
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    paragraphs[randIndex].split("").forEach(span => 
        {
            let spanTag = `<span>${span}</span>`;
            typingText.innerHTML += spanTag;
        });
}

randomParagraph();
