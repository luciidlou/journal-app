/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const applicationState = {
    entries: [],
    moods: [],
    transientMood: {}
}

const API = "http://localhost:8088"

/*
    You export a function that provides a version of the
    raw data in the format that you want
    */

export const fetchData = () => {
    fetch(`${API}/moods`) // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(moods => {
            // What should happen when we finally have the array?
            applicationState.moods = moods
        })
    return fetch(`${API}/entries?_expand=mood`) // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entries => {
            // What should happen when we finally have the array?
            applicationState.entries = entries
        })
}


export const getJournalEntries = () => {
    return applicationState.entries.map(f => ({ ...f }))
}
export const getMoods = () => {
    return applicationState.moods.map(f => ({ ...f }))
}
export const getTransientMood = () => {
    const transientMoodCopy = Object.assign({}, applicationState.transientMood)
    return transientMoodCopy
}

export const setTransientMood = (id) => {
    applicationState.transientMood.moodId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


// This function performs the POST request in order to save the request object to the API (the request object we want to POST is passed in as an argument to the function)
export const postEntry = (entry) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    }
    // We then return a fetch call on the array from the API that we want the user input data to. Pass in our newly decared fetchOptions object as the second argument in the fetch call
    return fetch(`${API}/entries`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteEntry = (id) => {
    return fetch(`${API}/entries/${id}`, { method: "DELETE" })
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
