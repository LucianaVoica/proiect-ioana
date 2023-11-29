import React from 'react';
import { Controller, Path } from 'react-hook-form';
import { SelectedFile } from './SelectedFile.tsx';
import { IconBadge } from '../../../elements';
import { FileFieldProps } from '../file-field/FileField';
import { FormGroupLabel } from '../common/FormGroupLabel';
import { FormGroupHint } from '../common/FormGroupHint';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { formGroupControlClasses } from '../common/FormGroupControl';
import {ThemeIcons} from "../../helpers/theme.icons.ts";
import {classNames} from "../../helpers/classname.ts";
import {Button} from "@nextui-org/react";


export const FileDragAndDrop = <TFieldValues extends FieldValues>(props: FileFieldProps<TFieldValues>) => {
    const id = React.useId();
    const [files, setFiles] = React.useState<File[]>([]);

    const [isInside, setIsInside] = React.useState<boolean>(false);
    const innerRef = React.useRef<HTMLInputElement | null>(null);

    const onBrowseClick = () => {
        innerRef?.current?.click();
    };

    const update = (files: File[], updateControl: Function) => {
        setFiles(files);
        if (props.multiple) {
            updateControl(files);
        } else {
            updateControl(files?.[0]);
        }
    };

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsInside(true);
    };

    const handleDragExit = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsInside(false);
    };

    const getDistinct = (old: File[], newFiles: File[]): File[] => {
        let final = [...files];
        if (props.multiple) {
            newFiles.forEach((f) => {
                if (!files.map((x) => x.name).includes(f.name)) {
                    final.push(f);
                }
            });
            return final;
        } else {
            return [newFiles[0]];
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>, onChange: Function) => {
        event.preventDefault();
        const newFiles = Array.from(event.dataTransfer.files);
        update(getDistinct(files, newFiles), onChange);
    };

    const handleDelete = (file: File, onChange: Function) => {
        const newFiles = files.filter((x) => x.name !== file.name);
        update(newFiles, onChange);
    };

    const customHint = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-1">
                {props.hint}
                <div className="flex items-center gap-1 text-muted">
                    <span className="text-xs">Extensii acceptate: </span>

                    {props?.accept?.map((p) => (
                        <span
                            key={p}
                            className="text-xs uppercase">
              {p}
            </span>
                    ))}
                </div>
            </div>
        );
    }, [props.hint, props.accept]);

    return (
        <Controller
            control={props.control}
            name={props.name as Path<TFieldValues>}
            render={({ field: { onChange, onBlur }, fieldState: { invalid, error } }) => (
                <div>
                    <FormGroupLabel
                        id={id}
                        name={props.name as Path<TFieldValues>}
                        label={props.label}
                        required={props.required || false}
                        error={error?.message}
                        disabled={props.disabled || false}
                    />

                    <div
                        className={classNames(
                            formGroupControlClasses(false, invalid, props?.disabled || false, false),
                            'px-6 !py-4',
                            isInside ? '!bg-primary-500/20' : ''
                        )}
                        onBlur={onBlur}
                        onDragEnter={handleDragStart}
                        onDragLeave={handleDragExit}
                        onDragEnd={handleDragExit}
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={(e) => {
                            handleDrop(e, onChange);
                            setIsInside(false);
                        }}>
                        <div className="pointer-events-none mx-auto flex flex-col items-center justify-center gap-2 text-secondary">
                            <IconBadge
                                color="primary"
                                size="xl"
                                icon={ThemeIcons.Upload}
                            />
                            <span className="font-medium text-secondary">Trage documentul aici</span>

                            <div className="flex flex-row items-center gap-2">
                                <hr className="bg-muted h-0.5 w-20" />
                                <span className="text-xs uppercase tracking-wide">sau</span>
                                <hr className="bg-muted h-0.5 w-20" />
                            </div>

                            <Button
                                icon={ThemeIcons.Attach}
                                iconPosition="right"
                                disabled={props.disabled}
                                className={'pointer-events-auto'}
                                variant="flat"
                                onBlur={() => {
                                    onBlur();
                                    console.log('onBLur');
                                }}
                                color="neutral"
                                onPress={() => onBrowseClick()}>
                                Caută fișier
                            </Button>
                        </div>

                        {files?.length > 0 && props.multiple && (
                            <div className="my-3 flex flex-col gap-1">
                                {files?.map((f, i) => (
                                    <SelectedFile
                                        key={i}
                                        file={f}
                                        handleDelete={() => {
                                            onBlur();
                                            handleDelete(f, onChange);
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                        {files?.length > 0 && !props.multiple && (
                            <div className="my-3 flex flex-col gap-1">
                                <SelectedFile
                                    file={files[0]}
                                    handleDelete={() => {
                                        onBlur();
                                        handleDelete(files[0], onChange);
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    <FormGroupHint
                        error={error}
                        hint={customHint}
                    />

                    <input
                        onChange={(e) => {
                            if (!e.target.files) {
                                return;
                            }
                            let newFiles = Array.from(e.target.files);
                            update(getDistinct(files, newFiles), onChange);
                            const element = e.target as HTMLInputElement;
                            element.value = '';
                        }}
                        className={'hidden'}
                        ref={innerRef}
                        type="file"
                        multiple={props.multiple}
                        accept={props.accept?.join(',')}
                    />
                </div>
            )}
        />
    );
};
FileDragAndDrop.defaultProps = {
    accept: ['.pdf'],
    multiple: false,
};
