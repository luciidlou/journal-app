import { getMoods, postEntry } from "./dataAccess.js"

export const journalForm = () => {
    const moods = getMoods()
    let formAsHTML = ""

    formAsHTML += `
        <fieldset>
            <label for="date">Date</label>
            <input type="date" name="date" class="entryForm__date">
        </fieldset>
        <fieldset>
            <label for="concepts">Concepts Covered</label>
            <input type="text" name="concepts" class="entryForm__concepts">
        </fieldset>
        <fieldset>
            <label for="mainEntry">Journal Entry</label>
            <input type="text" name="mainEntry" class="entryForm__main">
        </fieldset>
        <fieldset>
            <label for="mood">Mood for the day</label>
            <select name="mood" class="entryForm__mood">
                <option value="0">Select a mood!</option>
                ${moods.map(
        (mood) => {
            return `<option value="${mood.id}">${mood.label}</option>`
        }
    ).join("")
        }
            </select>
        </fieldset>
        <fieldset>  
            <input type="submit" name="submitBtn" class="entryForm__btn" value="Record Journal Entry">
        </fieldset>
        `
    return formAsHTML
}


document.addEventListener("click",
    (event) => {
        if (event.target.name === "submitBtn") {
            const date = document.querySelector("input[name='date']").value
            const concept = document.querySelector("input[name='concepts']").value
            const entry = document.querySelector("input[name='mainEntry']").value
            const mood = document.querySelector("select[name='mood']").value

            const newEntryObj = {
                date: date,
                concept: concept,
                entry: entry,
                moodId: mood
            }
            postEntry(newEntryObj)
        }
    })
