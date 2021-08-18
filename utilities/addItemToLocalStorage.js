function addToLocalStorage(title, todo) {
    var existingEntries = JSON.parse(localStorage.getItem(title));
    if (existingEntries == null) existingEntries = [];

    existingEntries.push(todo);
    localStorage.setItem(title, JSON.stringify(existingEntries));
}

export default addToLocalStorage;
