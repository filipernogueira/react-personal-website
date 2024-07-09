// typings/material-tailwind-react.d.ts
declare module "@material-tailwind/react" {
    import * as React from "react";

    // Typography Props
    export interface TypographyProps {
        variant?:
            | "h1"
            | "h2"
            | "h3"
            | "h4"
            | "h5"
            | "h6"
            | "lead"
            | "paragraph"
            | "small";
        className?: string;
        as?: React.ElementType;
        color?:
            | "inherit"
            | "current"
            | "black"
            | "white"
            | "blue-gray"
            | "gray"
            | "brown"
            | "deep-orange"
            | "orange"
            | "amber"
            | "yellow"
            | "lime"
            | "light-green"
            | "green"
            | "teal"
            | "cyan"
            | "light-blue"
            | "blue"
            | "indigo"
            | "deep-purple"
            | "purple"
            | "pink"
            | "red";
        target?: string;
        onClick?: React.MouseEventHandler<HTMLAnchorElement>;
        children?: React.ReactNode;
        href?: string;
        rel?: string;
    }

    export const Typography: React.FC<TypographyProps>;

    // Button Props
    export interface ButtonProps {
        variant?: "filled" | "outlined" | "gradient" | "text";
        size?: "sm" | "md" | "lg";
        color?:
            | "white"
            | "black"
            | "blue-gray"
            | "gray"
            | "brown"
            | "deep-orange"
            | "orange"
            | "amber"
            | "yellow"
            | "lime"
            | "light-green"
            | "green"
            | "teal"
            | "cyan"
            | "light-blue"
            | "blue"
            | "indigo"
            | "deep-purple"
            | "purple"
            | "pink"
            | "red";
        fullWidth?: boolean;
        ripple?: boolean;
        className?: string;
        children?: React.ReactNode;
        disabled?: boolean;
        onClick?: React.MouseEventHandler<HTMLButtonElement>;
        type?: "button" | "submit" | "reset";
    }

    export const Button: React.FC<ButtonProps>;

    // Input Props
    export interface InputProps {
        variant?: "standard" | "outlined" | "static";
        size?: "md" | "lg";
        color?:
            | "black"
            | "white"
            | "blue-gray"
            | "gray"
            | "brown"
            | "deep-orange"
            | "orange"
            | "amber"
            | "yellow"
            | "lime"
            | "light-green"
            | "green"
            | "teal"
            | "cyan"
            | "light-blue"
            | "blue"
            | "indigo"
            | "deep-purple"
            | "purple"
            | "pink"
            | "red";
        label?: string;
        type?: string;
        placeholder?: string;
        value?: string | number;
        onChange?: React.ChangeEventHandler<HTMLInputElement>;
        className?: string;
        labelProps?: React.HTMLAttributes<HTMLLabelElement>;
        name?: string;
    }

    export const Input: React.FC<InputProps>;

    // Card Props
    export interface CardProps {
        className?: string;
        children?: React.ReactNode;
        shadow?: boolean;
        color?:
            | "transparent"
            | "white"
            | "blue-gray"
            | "gray"
            | "brown"
            | "deep-orange"
            | "orange"
            | "amber"
            | "yellow"
            | "lime"
            | "light-green"
            | "green"
            | "teal"
            | "cyan"
            | "light-blue"
            | "blue"
            | "indigo"
            | "deep-purple"
            | "purple"
            | "pink"
            | "red";
    }

    export const Card: React.FC<CardProps>;

    // CardBody Props
    export interface CardBodyProps {
        className?: string;
        children?: React.ReactNode;
    }

    export const CardBody: React.FC<CardBodyProps>;

    // CardFooter Props
    export interface CardFooterProps {
        className?: string;
        children?: React.ReactNode;
    }

    export const CardFooter: React.FC<CardFooterProps>;

    // CardHeader Props
    export interface CardHeaderProps {
        className?: string;
        children?: React.ReactNode;
        floated?: boolean;
        shadow?: boolean;
        color?: string;
    }

    export const CardHeader: React.FC<CardHeaderProps>;

    // Navbar Props
    export interface NavbarProps {
        className?: string;
        children?: React.ReactNode;
    }

    export const Navbar: React.FC<NavbarProps>;

    // Collapse Props
    export interface CollapseProps {
        open: boolean;
        children?: React.ReactNode;
        className?: string;
    }

    export const Collapse: React.FC<CollapseProps>;

    // IconButton Props
    export interface IconButtonProps {
        variant?: "text" | "outlined" | "contained";
        size?: "sm" | "lg" | "regular";
        color?:
            | "inherit"
            | "current"
            | "black"
            | "white"
            | "blue-gray"
            | "gray"
            | "brown"
            | "deep-orange"
            | "orange"
            | "amber"
            | "yellow"
            | "lime"
            | "light-green"
            | "green"
            | "teal"
            | "cyan"
            | "light-blue"
            | "blue"
            | "indigo"
            | "deep-purple"
            | "purple"
            | "pink"
            | "red";
        className?: string;
        disabled?: boolean;
        onClick?: React.MouseEventHandler<HTMLButtonElement>;
        children?: React.ReactNode;
        ripple?: boolean;
    }

    export const IconButton: React.FC<IconButtonProps>;

    // Stepper Props
    export interface StepperProps {
        activeStep?: number;
        alternativeLabel?: boolean;
        children?: React.ReactNode;
        className?: string;
        isLastStep?: (value: boolean) => void; // Add isLastStep
        isFirstStep?: (value: boolean) => void; // Add isFirstStep
        activeLineClassName?: string;
    }

    export const Stepper: React.FC<StepperProps>;

    // Step Props
    export interface StepProps {
        active?: boolean;
        completed?: boolean;
        disabled?: boolean;
        children?: React.ReactNode;
        className?: string;
        onClick?: React.MouseEventHandler<HTMLAnchorElement>;
        activeClassName?: string;
        completedClassName?: string;
    }

    export const Step: React.FC<StepProps>;

    // Timeline Props
    export interface TimelineProps {
        children?: React.ReactNode;
        className?: string;
    }

    export const Timeline: React.FC<TimelineProps>;

    // TimelineItem Props
    export interface TimelineItemProps {
        children?: React.ReactNode;
        className?: string;
        ref?: boolean | React.MutableRefObject<Element | null>;
    }

    export const TimelineItem: React.FC<TimelineItemProps>;

    // TimelineConnector Props
    export interface TimelineConnectorProps {
        className?: string;
    }

    export const TimelineConnector: React.FC<TimelineConnectorProps>;

    // TimelineHeader Props
    export interface TimelineHeaderProps {
        className?: string;
        children?: React.ReactNode;
    }

    export const TimelineHeader: React.FC<TimelineHeaderProps>;

    // TimelineIcon Props
    export interface TimelineIconProps {
        className?: string;
        children?: React.ReactNode;
    }

    export const TimelineIcon: React.FC<TimelineIconProps>;

    // TimelineBody Props
    export interface TimelineBodyProps {
        className?: string;
        children?: React.ReactNode;
    }

    export const TimelineBody: React.FC<TimelineBodyProps>;
}
