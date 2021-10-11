/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

export const entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML += `
          <h3>${entry.concept}</h3>
          <h5>Mood: ${entry.mood}</h5>
          <p>${entry.entry}</p>
          <p>${entry.date}
        `
    }

    return allEntriesAsHTML
}
