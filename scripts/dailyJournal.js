import { entries } from "./entries.js"
import { journalForm } from "./journalForm.js"

export const dailyJournal = () => {
    return `
        <article class="entryForm">
            ${ journalForm() }
        </article>
        <div class="entryList">
            ${ entries() }
        </div>
    `
}
