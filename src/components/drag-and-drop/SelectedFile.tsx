import  { FC, useMemo } from 'react';
import { formatBytes, getExtension, getFileColorByExtension, getFileIconByExtension } from './file.helpers.tsx';
import {IconBadge} from "../IconBadge.tsx";
import {Button} from "@nextui-org/react";


type SelectedFileProps = {
    file: File;
    handleDelete: () => void;
    disabled?: boolean;
};

export const SelectedFile: FC<SelectedFileProps> = (props) => {
    const size = useMemo(() => {
        return formatBytes(props.file.size);
    }, [props.file]);

    const extension = useMemo(() => getExtension(props.file.name), [props.file.name]);

    const icon = useMemo(() => {
        return getFileIconByExtension(extension);
    }, [extension]);

    const color = useMemo(() => {
        return getFileColorByExtension(extension);
    }, [extension]);

    return (
        <>
            <div className="flex flex-row items-center justify-between rounded-lg border px-4 py-1.5">
                <IconBadge
                    size="sm"
                    icon={icon}
                    color={color}
                />
                <div className="flex flex-auto flex-col px-3">
                    <span className="break-all text-xs font-semibold text-default line-clamp-1">{props.file.name}</span>
                    <span className="text-xs font-medium text-muted">{size}</span>
                </div>
                <div>
                    <Button
                        variant={'light'}

                    />
                </div>
            </div>
        </>
    );
};
