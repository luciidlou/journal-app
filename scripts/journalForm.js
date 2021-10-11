export const journalForm = () => {
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
                <option value="default">Select your mood</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="stressed">Stressed</option>
                <option value="anxious">Anxious</option>
            </select>
        </fieldset>
        <fieldset>  
            <input type="submit" name="submitBtn" class="entryForm__btn" value="Record Journal Entry">
        </fieldset>
        `
    return formAsHTML
}
