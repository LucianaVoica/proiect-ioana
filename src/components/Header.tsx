import React, {useEffect} from 'react';
import { IconType } from 'react-icons';
import {IconBadge} from "./IconBadge.tsx";


type HeaderProps = {
    title: string;
    icon?: IconType;
    subtitle?: string | React.ReactNode;
    children?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = (props) => {
    useEffect(() => {
        document.title = `Proiect Retele  | ${props.title}`;

        return () => {
            document.title = 'Proiect Retele';
        };
    }, [props.title]);

    return (
        <div className="flex flex-row flex-wrap items-center justify-between gap-2 pb-4">
            <div className="flex flex-row items-center gap-2">
                {props.icon && (
                    <IconBadge
                        color={'primary'}
                        icon={props.icon}
                    />
                )}
                <div className="flex flex-col">
          <span className="overflow-ellipsis text-lg font-bold tracking-wide line-clamp-2 md:text-xl">
            {props.title}
          </span>
                    {props?.subtitle && <div className="-mt-1 text-xs text-secondary md:text-sm">{props.subtitle}</div>}
                </div>
            </div>
            {props?.children ?? props.children}
        </div>
    );
};
