export declare function promptAutocomplete({ message, src, }: {
    message: string;
    src: any[];
}): Promise<string>;
declare type ConfirmOption = {
    message: string;
    defaultValue?: boolean;
};
export declare function promptConfirm({ message, defaultValue, }: ConfirmOption): Promise<boolean>;
export declare function promptInput(message: string): Promise<string>;
export {};
