export declare function promptAutocomplete({ message, src, }: {
    message: string;
    src: any[];
}): Promise<any>;
declare type ConfirmOption = {
    message: string;
    defaultValue?: boolean;
};
export declare function promptConfirm({ message, defaultValue, }: ConfirmOption): Promise<boolean>;
export {};
