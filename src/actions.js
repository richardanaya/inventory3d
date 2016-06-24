export const TOGGLE_EDITOR_DRAWER = "TOGGLE_EDITOR_DRAWER";

export function toggleEditorDrawer(open){
    return {
        type: TOGGLE_EDITOR_DRAWER,
        open: open
    }
}