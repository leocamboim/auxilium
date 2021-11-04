export async function createUser(person: object) {
    await fetch("http://localhost:3333/users", {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    });
}