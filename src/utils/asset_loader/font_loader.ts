export async function fontLoader() {

    await new Promise((res) => {
        const link = document.createElement('link')
        link.className = "TEXTLINK"
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&family=Sigmar&display=swap`;
        link.onload = res;
        document.head.appendChild(link);
    })
}

