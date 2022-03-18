function fetchData(url: string): any {
    fetch(url)
        .then(res => res.json())
        .then((data) => data)
        .catch((error) => error)
}

export default fetchData