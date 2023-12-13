import { Control } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface IScreenNavigation {
    navigate: (screen: string) => void;
}

export interface IScreenNavigationParans {
    navigate: (
        screen: string,
        params?: { autor?: string; userId?: string },
    ) => void;
}

export interface IPropsInputControl extends TextInputProps {
    control: Control;
    name: string;
    errors: string | undefined;
}

export interface IUser {
    email: string;
    name: string;
    userName: string;
    created: string;
    uid: string;
}

export interface IPost {
    id: string;
    created: { seconds: number; nanoseconds: number };
    content: string;
    autor: string;
    userId: string;
    likes: number;
    avatarUrl: string;
}
