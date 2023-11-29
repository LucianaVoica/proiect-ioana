import {ThemeIcons} from "../../helpers/theme.icons.ts";
import {Color, TailwindColor} from "../../helpers/theme.constants.ts";
import {IconType} from "../../constants/icontype.ts";


export const formatBytes = (bytes: number): string => {
    const marker = 1000; // Change to 1000 if required
    const decimal = 3; // Change as required
    const kiloBytes = marker; // One Kilobyte is 1024 bytes
    const megaBytes = marker * marker; // One MB is 1024 KB
    const gigaBytes = marker * marker * marker; // One GB is 1024 MB
    // const teraBytes = marker * marker * marker * marker; // One TB is 1024 GB
    // return bytes if less than a KB
    if (bytes < kiloBytes) {
        return bytes + ' Bytes';
    } // return KB if less than a MB
    else if (bytes < megaBytes) {
        return (bytes / kiloBytes).toFixed(decimal) + ' KB';
    } // return MB if less than a GB
    else if (bytes < gigaBytes) {
        return (bytes / megaBytes).toFixed(decimal) + ' MB';
    } // return GB if less than a TB
    else {
        return (bytes / gigaBytes).toFixed(decimal) + ' GB';
    }
};

export type Extension = 'pdf' | 'doc' | 'docx' | 'xls' | 'xlsx' | 'csv' | 'unknown';

export const getExtension = (filename: string | undefined): Extension => {
    if (!filename) {
        return 'unknown';
    }
    const extracted = filename.split('.').pop();

    if (!extracted) {
        return 'unknown';
    }

    if (['pdf', 'doc', 'docx', 'xls', 'xlsx', 'csv'].includes(extracted)) {
        return extracted as Extension;
    } else {
        return 'unknown';
    }
};

export const getFileIconByExtension = (extension: Extension): IconType => {
    switch (extension) {
        case 'xlsx':
        case 'csv':
        case 'xls':
            return ThemeIcons.FileExcel;

        case 'pdf':
            return ThemeIcons.FilePdf;

        case 'doc':
        case 'docx':
            return ThemeIcons.FileWord;

        default:
        case 'unknown':
            return ThemeIcons.FileText;
    }
};

export const getFileColorByExtension = (extension: Extension): Color | TailwindColor => {
    switch (extension) {
        case 'xlsx':
        case 'csv':
        case 'xls':
            return 'emerald';

        case 'pdf':
            return 'rose';

        case 'doc':
        case 'docx':
            return 'blue';

        default:
        case 'unknown':
            return 'slate';
    }
};
