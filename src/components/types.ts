import { ComponentType } from 'react';

export type Packages = {
    [key in IconPackageName]: boolean;
};

export enum IconPackageName {
    GLYPH = 'glyph',
    CLASSIC = 'classic',
    FLAG = 'flag',
}

export type SearchResult = {
    [key in IconPackageName]: {
        matchByNameArr: JSX.Element[];
        matchByDescriptionArr: JSX.Element[];
    };
};

export type ClickedElement = {
    iconName?: string;
    packageName?: string;
};

export type IconPackage = {
    [key: string]: ComponentType;
};

export type IconListProps = {
    icons: {
        [key in IconPackageName]: IconPackage;
    };
    value: string;
    packages: Packages;
};
