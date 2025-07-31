import { SafeHtml } from "@angular/platform-browser"

export interface HobbyInterface {
    title_hobby: string
    arr_hobby: string[]
}
export interface HobbyPublicInterface {
    title_hobby: SafeHtml,
    arr_hobby: SafeHtml[]
}