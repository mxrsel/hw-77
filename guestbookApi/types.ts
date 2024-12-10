export interface GuestBook {
    id: string;
    name: string | null;
    description: string;
    image: string | null;
}

export type GuestBookApi = Omit<GuestBook, 'id'>;