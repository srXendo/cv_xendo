import { SafeHtml } from "@angular/platform-browser"

export interface IntroductionInterface {
    title_introduction: string,
    arr_presentation: string[]
}
export interface IntroductionPublicInterface {
    title_introduction: SafeHtml,
    arr_presentation: SafeHtml[]
}