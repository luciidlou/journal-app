/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { deleteEntry, getJournalEntries, getTransientMood } from "./dataAccess.js"

export const entries = () => {
    const entries = getJournalEntries()
    const transientMood = getTransientMood()
    const filteredEntries = entries.filter(entry => {
        return entry.moodId === transientMood.moodId
    })
    let html = ""
    if (transientMood.moodId) {
        for (const entry of filteredEntries) {
                html += `
              <h3>${entry.concept}</h3>
              <h5>Mood: ${entry.mood.label}</h5>
              <p>${entry.entry}</p>
              <p>${entry.date}
              <button class="entry__delete" id="entry--${entry.id}">Delete</button>
            `
            }
    
        return html
    }
    else if (!transientMood.moodId || transientMood.moodId === 0) {
        for (const entry of entries) {
                html += `
              <h3>${entry.concept}</h3>
              <h5>Mood: ${entry.mood.label}</h5>
              <p>${entry.entry}</p>
              <p>${entry.date}
              <button class="entry__delete" id="entry--${entry.id}">Delete</button>
            `
            }
    
        return html
    }
}

document.addEventListener("click",
    click => {
        if (click.target.id.startsWith("entry--")) {
            const [, entryId] = click.target.id.split("--")
            deleteEntry(parseInt(entryId))
        }
    })

