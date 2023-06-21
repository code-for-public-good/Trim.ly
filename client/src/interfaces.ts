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