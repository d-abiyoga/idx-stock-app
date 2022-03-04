import { FC } from 'react';
import { StyledBox } from './Box.styled';

interface BoxProps {
    primary?: boolean;
    backgroundColor?: string;
    label: string;
    padding: string;
    borderRadius: number;
}

export const Box: FC<BoxProps> = ({
    primary = false,
    backgroundColor,
    label,
    padding,
    borderRadius,
    ...props
}) => {
    const mode = primary ? 'box--primary' : 'box--secondary';
    return (
        <StyledBox
            style={{ backgroundColor, padding, borderRadius: `${borderRadius}px` }}
            className={mode}
            {...props}
        >
            {label}
        </StyledBox>
    );
};
