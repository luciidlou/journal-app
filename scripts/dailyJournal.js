import { entries } from "./entries.js"
import { journalForm } from "./journalForm.js"
import { moodFilter } from "./MoodFilter.js"

export const dailyJournal = () => {
    return `<header>
                <div class="header-left">
                    <img class="logo" src="./images/daily-journal-logo2.png" alt="daily journal logo">
                    <h1>The Daily Journal</h1>
                </div>
                <div class="header-right">
                    <h2>Welcome, person</h2>
                </div>
            </header>
            <article class="entryForm">
                ${journalForm()}
            </article>
                ${moodFilter()}
            <div class="entryList">
                ${entries()}
            </div>
            `
}
