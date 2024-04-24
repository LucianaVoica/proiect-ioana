import React, { PropsWithChildren, useMemo } from 'react';
import {Color, Size, TailwindColor,} from "../helpers/theme.constants.ts";
import {IconType} from "./icontype.ts";
import {classNames} from "../helpers/classname.ts";

export type ChipProps = PropsWithChildren & {
    color?: Color | TailwindColor;
    size?: Size;
    className?: string;
    icon?: IconType;
    iconPosition?: 'left' | 'right';
};

export const generateChipColorClassesForStatus = (color: Color | TailwindColor) => {
    return `bg-${color}-50 dark:bg-${color}-500/10 text-${color}-700 dark:text-${color}-400 ring-${color}-700/10 dark:ring-${color}-500/20`;
};

// dont remove
// const generateAllColorClassesForStatus = () => {
//     const colors = [...Colors, ...TailwindColors];
//
//     console.log(classNames(...colors.map((c) => generateChipColorClassesForStatus(c))));
// };

export const Chip: React.FC<ChipProps> = (props) => {
    // dont remove
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const noPurge = classNames(
    //     'bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 ring-primary-700/10 dark:ring-primary-500/20 bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-400 ring-accent-700/10 dark:ring-accent-500/20 bg-error-50 dark:bg-error-500/10 text-error-700 dark:text-error-400 ring-error-700/10 dark:ring-error-500/20 bg-success-50 dark:bg-success-500/10 text-success-700 dark:text-success-400 ring-success-700/10 dark:ring-success-500/20 bg-warning-50 dark:bg-warning-500/10 text-warning-700 dark:text-warning-400 ring-warning-700/10 dark:ring-warning-500/20 bg-neutral-50 dark:bg-neutral-500/10 text-neutral-700 dark:text-neutral-400 ring-neutral-700/10 dark:ring-neutral-500/20 bg-slate-50 dark:bg-slate-500/10 text-slate-700 dark:text-slate-400 ring-slate-700/10 dark:ring-slate-500/20 bg-gray-50 dark:bg-gray-500/10 text-gray-700 dark:text-gray-400 ring-gray-700/10 dark:ring-gray-500/20 bg-neutral-50 dark:bg-neutral-500/10 text-neutral-700 dark:text-neutral-400 ring-neutral-700/10 dark:ring-neutral-500/20 bg-stone-50 dark:bg-stone-500/10 text-stone-700 dark:text-stone-400 ring-stone-700/10 dark:ring-stone-500/20 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 ring-red-700/10 dark:ring-red-500/20 bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 ring-orange-700/10 dark:ring-orange-500/20 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 ring-amber-700/10 dark:ring-amber-500/20 bg-yellow-50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 ring-yellow-700/10 dark:ring-yellow-500/20 bg-lime-50 dark:bg-lime-500/10 text-lime-700 dark:text-lime-400 ring-lime-700/10 dark:ring-lime-500/20 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 ring-green-700/10 dark:ring-green-500/20 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 ring-emerald-700/10 dark:ring-emerald-500/20 bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 ring-teal-700/10 dark:ring-teal-500/20 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 ring-cyan-700/10 dark:ring-cyan-500/20 bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 ring-sky-700/10 dark:ring-sky-500/20 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 ring-blue-700/10 dark:ring-blue-500/20 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 ring-indigo-700/10 dark:ring-indigo-500/20 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 ring-violet-700/10 dark:ring-violet-500/20 bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 ring-purple-700/10 dark:ring-purple-500/20 bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-400 ring-fuchsia-700/10 dark:ring-fuchsia-500/20 bg-pink-50 dark:bg-pink-500/10 text-pink-700 dark:text-pink-400 ring-pink-700/10 dark:ring-pink-500/20 bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 ring-rose-700/10 dark:ring-rose-500/20 bg-zinc-50 dark:bg-zinc-500/10 text-zinc-700 dark:text-zinc-400 ring-zinc-700/10 dark:ring-zinc-500/20'
    // );

    const colorClass = useMemo(() => {
        return generateChipColorClassesForStatus(props.color || 'neutral');
    }, [props.color]);

    const sizeClass = useMemo(() => {
        switch (props.size) {
            case 'sm':
                return 'text-xs';
            case 'lg':
                return 'text-base';
            case 'xl':
                return 'text-lg';
            case 'md':
            default:
                return 'text-sm';
        }
    }, [props.size]);

    return (
        <div
            className={classNames(
                'inline-flex justify-center gap-1 items-center rounded-md px-2 py-1 text-xs',
                'font-medium ring-1 ring-inset h-full pointer-events-none',
                colorClass,
                props.className ?? ''
            )}>
            {props?.icon && props.iconPosition === 'left' && <props.icon className={sizeClass} />}
            {props.children && <span className={sizeClass + ' whitespace-nowrap'}>{props.children}</span>}
            {props?.icon && props.iconPosition === 'right' && <props.icon className={sizeClass} />}
        </div>
    );
};

Chip.defaultProps = {
    color: 'primary',
    size: 'md',
    children: '',
    iconPosition: 'left',
};
