export async function createInst (inst: Object) {
    await fetch("http://localhost:3333/inst", {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inst)
    });
}