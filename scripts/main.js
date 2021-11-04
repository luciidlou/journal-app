import { dailyJournal } from "./dailyJournal.js"
import { fetchData } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchData().then(
        () => {
            mainContainer.innerHTML = dailyJournal()
        }
    )
}
render()

document.addEventListener("stateChanged",
    event => {
        console.log(`State change detected! Regenerating HTML...`)
        render()
    })