export interface GuestBook {
    id: string;
    name: string | null;
    description: string;
    image: string | undefined;
}

export interface GuestBookMutation {
    name: string | null;
    description: string;
    image: File | undefined;
}

