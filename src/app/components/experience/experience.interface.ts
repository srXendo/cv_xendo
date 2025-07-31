import { SafeHtml } from "@angular/platform-browser";

export interface ExperienceInterface {
    start_date_experience: Date;
    end_date_experience: Date;
    name_experience: string;
    description_experience: string;
    public_description_experience?: SafeHtml;
}
