async function copy() {
    try{
        await navigator.clipboard.writeText('carlos_retana_@outlook.com');
    } catch (err) {
        console.error('Error when copying', err);
    }
}