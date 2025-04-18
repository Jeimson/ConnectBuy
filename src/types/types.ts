export interface Promotion {
    id: number;
    title: string;
    description: string;
    category: string;
    store: string;
    distance: number;
    isSpecial: boolean;
    imageUrl: string;
    expirationDate: string;
}

export interface Filters {
    category: string;
    store: string;
    maxDistance: number;
}

export interface PromotionsState {
    promotions: Promotion[];
    filteredPromotions: Promotion[];
    filters: Filters;
    loading: boolean;
    error: string | null;
    notification: string | null;
}