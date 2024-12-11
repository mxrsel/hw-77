export interface GuestBook {
    id: string;
    name: string | null;
    description: string;
    image: string | null;
}

export interface GuestBookMutation {
    name: string | null;
    description: string;
    image: File | null;
}

