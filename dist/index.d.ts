import puppeteer from 'puppeteer';
export interface Location {
    city: string | null;
    province: string | null;
    country: string | null;
}
export interface Profile {
    fullName: string | null;
    title: string | null;
    location: Location | null;
    photo: string | null;
    description: string | null;
    url: string;
}
export interface Experience {
    title: string | null;
    company: string | null;
    employmentType: string | null;
    location: Location | null;
    startDate: string | null;
    endDate: string | null;
    endDateIsPresent: boolean;
    durationInDays: number | null;
    description: string | null;
}
interface Certification {
    name: string | null;
    issuingOrganization: string | null;
    issueDate: string | null;
    expirationDate: string | null;
}
export interface Education {
    schoolName: string | null;
    degreeName: string | null;
    fieldOfStudy: string | null;
    startDate: string | null;
    endDate: string | null;
    durationInDays: number | null;
}
export interface VolunteerExperience {
    title: string | null;
    company: string | null;
    startDate: string | null;
    endDate: string | null;
    endDateIsPresent: boolean;
    durationInDays: number | null;
    description: string | null;
}
export interface RawOrganizationAccomplishments {
    name: string | null;
    position: string | null;
    startDate: string | null;
    endDate: string | null;
    endDateIsPresent: boolean;
    description: string | null;
}
export interface OrganizationAccomplishments {
    name: string | null;
    position: string | null;
    startDate: string | Date | null;
    endDate: string | Date | null;
    endDateIsPresent: boolean;
    durationInDays: number | null;
    description: string | null;
}
export interface RawLanguageAccomplishments {
    language: string | null;
    proficiency: string | null;
}
export interface LanguageAccomplishments {
    language: string | null;
    proficiency: string | null;
}
export interface RawProjectAccomplishments {
    name: string | null;
    description: string | null;
}
export interface ProjectAccomplishments {
    name: string | null;
    description: string | null;
}
export interface Skill {
    skillName: string | null;
    endorsementCount: number | null;
}
interface ScraperUserDefinedOptions {
    sessionCookieValue: string;
    keepAlive?: boolean;
    userAgent?: string;
    timeout?: number;
    headless?: boolean;
}
interface ScraperOptions {
    sessionCookieValue: string;
    keepAlive: boolean;
    userAgent: string;
    timeout: number;
    headless: boolean;
}
export declare class LinkedInProfileScraper {
    readonly options: ScraperOptions;
    private browser;
    private launched;
    constructor(userDefinedOptions: ScraperUserDefinedOptions);
    setup: () => Promise<void>;
    isPuppeteerLoaded: () => Promise<boolean>;
    private createPage;
    private getBlockedHosts;
    close: (page?: puppeteer.Page | undefined) => Promise<void>;
    checkIfLoggedIn: () => Promise<void>;
    run: (profileUrl: string) => Promise<{
        userProfile: Profile;
        experiences: Experience[];
        certifications: Certification[];
        education: Education[];
        volunteerExperiences: VolunteerExperience[];
        skills: Skill[];
        organizationAccomplishments: OrganizationAccomplishments[];
        languageAccomplishments: LanguageAccomplishments[];
        projectAccomplishments: ProjectAccomplishments[];
    }>;
}
export {};
