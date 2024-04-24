import React, {useMemo} from 'react';
import {Color, Size, TailwindColor} from "../helpers/theme.constants.ts";
import {IconType} from "../constants/icontype.ts";
import {generateChipColorClassesForStatus} from "../constants/chip.tsx";
import {classNames} from "../helpers/classname.ts";


type IconBadgeProps ={
    color?: Color | TailwindColor;
    size?: Size;
    icon: IconType;
}
export  const IconBadge: React.FC<IconBadgeProps> =(props) =>{
    const colorClass = useMemo(() => {
        return generateChipColorClassesForStatus(props?.color || 'primary');
    }, [props.color]);

    const size = useMemo(() => {
        switch (props.size) {
            case 'sm':
                return 'h-4 w-4';
            case 'lg':
                return 'h-8 w-8';
            default:
            case 'md':
                return 'h-6 w-6';
            case 'xl':
                return 'h-10 w-10';
        }
    }, [props.size]);

    const padding = useMemo(() => {
        switch (props.size) {
            case 'sm':
                return 'p-1.5';
            case 'lg':
                return 'p-2.5';
            default:
            case 'md':
                return 'p-2';
            case 'xl':
                return 'p-3';
        }
    }, [props.size]);

    return (
        <div
            className={classNames(
                'inline-flex justify-center gap-1 items-center rounded-md px-2 py-1 text-xs',
                'font-medium ring-1 ring-inset h-full pointer-events-none select-none aspect-square',
                padding,
                colorClass
            )}>
            <props.icon className={size} />
        </div>
    );
};

IconBadge.defaultProps = {
    color: 'primary',
    size: 'md',
};
