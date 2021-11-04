import { getMoods, getTransientMood, setTransientMood } from "./dataAccess.js"

document.addEventListener("change",
changeEvent => {
    if (changeEvent.target.name === "moodFilter") {
        const chosenMood = parseInt(changeEvent.target.value)
        setTransientMood(chosenMood)
    }
})

export const moodFilter = () => {
    const moods = getMoods()
    const transientMood = getTransientMood()
    return `<fieldset class="fieldset">
                <legend>Filer Journal Entries by Mood</legend>
                <input type="radio" name="moodFilter" value="0" checked/>
                <label for="moodFilter--all">No filtering</label>
                ${moods.map(
        (mood) => {
            if (transientMood.moodId === mood.id) {
                return `<input type="radio" name="moodFilter" value ="${mood.id}" checked="checked"/>
                                <label for="moodFilter--${mood.label}"> ${mood.label}</label>`
            }
            else {
                return `<input type="radio" name="moodFilter" value ="${mood.id}" />
                                <label for="moodFilter--${mood.label}"> ${mood.label}</label>`
            }
        }
    ).join("")
        }
        </fieldset>
        `
}
