import { Control } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface IScreenNavigation {
    navigate: (screen: string) => void;
}

export interface IPropsInputControl extends TextInputProps {
    control: Control;
    name: string;
    errors: string | undefined;
}
