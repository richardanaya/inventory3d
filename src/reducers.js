import {TOGGLE_EDITOR_DRAWER} from "./actions"

function app(state = {
    editorDrawerOpen: false
}, action) {
    switch (action.type) {
        case TOGGLE_EDITOR_DRAWER:
            return Object.assign({}, state, {
                editorDrawerOpen: !state.editorDrawerOpen
            })
        default:
            return state
    }
}

export default app;