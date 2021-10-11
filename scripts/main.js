import { dailyJournal } from "./dailyJournal.js"

const container = document.querySelector("#entries")

const render = () => {
    container.innerHTML = dailyJournal()
}
render()
