import { SvgIconComponent } from "@mui/icons-material"
import { Dispatch, SetStateAction } from "react";

export interface descriptiveCardProps {
    title: String,
    description: String,
    icon: React.ReactElement<SvgIconComponent>
}

export interface urlResProps {
    shortcut: String,
    setShortcut: Dispatch<SetStateAction<string>>
}

export interface urlInputProps {
    setShortcut: Dispatch<SetStateAction<string>>
}

export interface signupFormProps {
    open: boolean,
    onClose: () => void
}

export interface signinFormProps {
    open: boolean,
    onClose: () => void
}

export interface authTextFieldProps {
    textFieldLabel: string,
    textFieldPlaceholder: string,
    textFieldType: string,
    setField: Dispatch<SetStateAction<string>>,
    error: string,
    setError: Dispatch<SetStateAction<string>>
}

export interface navbarItemPrivateProps {
    href: string,
    title: string,
    icon: React.ReactElement<SvgIconComponent>
}

export interface protectedRouteProps {
    isProtected: boolean
}