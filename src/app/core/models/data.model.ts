import { GroupByDateReportOption } from "../enums/date-range-options";

export interface LibraryStatistics {
    checkoutCount?: number;
    holdCount?: number;
    overdueCount?: number;
    durationMillis?: number;
}

export interface LibraryStatisticsOptions {
    statisticalYearStartDate: Date;
    limitByGradeLevelValues: string[];
    durationMillis: number;
}

export interface StatisticsAggregateGroup {
    groupByOption: GroupByDateReportOption,
    groups?: StatisticsGroup[];
    durationMillis?: number;
}

export interface StatisticsGroup {
    rangeStartDateTime: Date;
    rangeEndDateTime: Date;
    count: number;
}

export interface TopMostPopular {
    groups?: PopularGroup[];
    durationMillis?: number;
}
export interface PopularGroup {
    name: string;
    author?: string;
    circulationCount: number;    
}


export interface Sites {
    sites: Site[];
    durationMillis?: number;
}
export interface Site {
    guid: string;
    name: string;
    siteType: SiteType;
    guestAllowed?: boolean;
    librarySite?: boolean;
    resourceSite?: boolean;
    mediaSite?: boolean;
    enrolled?: boolean;
    primarySite?: boolean;
    districtWarehouse?: boolean;
    districtAdvancedBooking?: boolean;
}
export interface SiteType {
    id: number
    name: string;
    priorityOrder: number;
}