import { CommentApi } from '../interface';
declare const _sfc_main: import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    props: any;
    ContentBox: import("vue").DefineComponent<{
        small: {
            type: BooleanConstructor;
            required: false;
        };
        data: {
            type: null;
            required: true;
        };
        parentId: {
            type: StringConstructor;
            required: true;
        };
    }, {
        props: any;
        state: {
            active: boolean;
            visible: boolean;
        };
        commentRef: import("vue").Ref<import("./comment-box.vue").CommentBoxApi | undefined>;
        btnRef: import("vue").Ref<HTMLDivElement | undefined>;
        allEmoji: import("../..").Emoji;
        like: (id: string) => void;
        user: import("../interface").UserApi;
        isUserInfo: boolean;
        getUser: (uid: string, show: Function) => void;
        level: (v: number) => "" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"831\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#8CDBF4\" p-id=\"832\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"833\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m950.857143-365.714285l73.142857-73.142858v146.285715h-73.142857z m73.142857-73.142858h146.285715v146.285715h-146.285715z m0 146.285715h146.285715v438.857143h-146.285715z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"765\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#6ECEFF\" p-id=\"766\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"767\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m877.714286-438.857143h365.714286v146.285715h-365.714286z m219.428572 146.285715h146.285714v146.285714h-146.285714z m-219.428572 292.571428V512h146.285714v146.285714z\" fill=\"#FFFFFF\" p-id=\"768\"></path><path d=\"M1097.142857 585.142857V438.857143h365.714286v146.285714z m0 73.142857h365.714286v146.285715h-365.714286z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"799\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#599DFF\" p-id=\"800\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"801\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m877.714286-438.857143h365.714286v146.285715h-365.714286z m219.428572 146.285715h146.285714v73.142857h-146.285714z m0 219.428571h146.285714v73.142857h-146.285714z m-146.285715-146.285714h292.571429v146.285714h-292.571429z m-73.142857 219.428571h365.714286v146.285715h-365.714286z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"815\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#34D19B\" p-id=\"816\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"817\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m975.213715-365.714285L1243.428571 219.428571v219.428572h-146.285714zM1097.142857 438.857143h146.285714v292.571428h-146.285714z m146.285714 146.285714h73.142858v146.285714h-73.142858z m0-365.714286h73.142858v146.285715h-73.142858z m73.142858 0h146.285714v585.142858h-146.285714z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"782\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#FFA000\" p-id=\"783\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"784\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m1097.142858-73.142857h146.285714v219.428572h-146.285714z m-219.428572-365.714286h365.714286v146.285715h-365.714286z m0 438.857143h219.428572v146.285715h-219.428572z m73.142857-219.428571h219.428572v146.285714h-219.428572z\" fill=\"#FFFFFF\" p-id=\"785\"></path><path d=\"M1316.571429 438.857143h146.285714v146.285714h-146.285714z m-219.428572-73.142857h146.285714v219.428571h-146.285714z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"748\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#F36262\" p-id=\"749\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"750\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m1097.142858-146.285714h146.285714v292.571429h-146.285714z m-73.142858-292.571429h146.285715v146.285715h-146.285715z m-146.285714 146.285715h146.285714v438.857143h-146.285714z\" fill=\"#FFFFFF\" p-id=\"751\"></path><path d=\"M1243.428571 438.857143h219.428572v146.285714h-219.428572z m-48.786285-170.642286L1243.428571 219.428571v146.285715h-146.285714zM1243.428571 658.285714h146.285715v146.285715h-146.285715z\" fill=\"#FFFFFF\"></path></svg>";
        reply: () => void;
        hide: (event: Event) => void;
        content: import("vue").ComputedRef<string>;
        CommentBox: import("vue").DefineComponent<{
            placeholder: {
                type: StringConstructor;
                required: true;
            };
            contentBtn: {
                type: StringConstructor;
                required: true;
            };
            parentId: {
                type: StringConstructor;
                required: false;
            };
            replay: {
                type: StringConstructor;
                required: false;
            };
        }, {
            props: any;
            content: import("vue").Ref<string>;
            action: import("vue").Ref<boolean>;
            disabled: import("vue").Ref<boolean>;
            editorRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    minHeight: number;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    placeholder: {
                        type: StringConstructor;
                        required: false;
                    };
                    modelValue: {
                        type: StringConstructor;
                        required: true;
                    };
                    minHeight: {
                        type: NumberConstructor;
                        required: false;
                        default: number;
                    };
                }>> & {
                    onSubmit?: ((...args: any[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                    onInput?: ((...args: any[]) => any) | undefined;
                    onFocus?: ((...args: any[]) => any) | undefined;
                    onBlur?: ((...args: any[]) => any) | undefined;
                } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "minHeight">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                $emit: (event: "submit" | "update:modelValue" | "input" | "focus" | "blur", ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    placeholder: {
                        type: StringConstructor;
                        required: false;
                    };
                    modelValue: {
                        type: StringConstructor;
                        required: true;
                    };
                    minHeight: {
                        type: NumberConstructor;
                        required: false;
                        default: number;
                    };
                }>> & {
                    onSubmit?: ((...args: any[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                    onInput?: ((...args: any[]) => any) | undefined;
                    onFocus?: ((...args: any[]) => any) | undefined;
                    onBlur?: ((...args: any[]) => any) | undefined;
                }, {
                    props: any;
                    range: import("vue").Ref<Range | undefined>;
                    editorRef: import("vue").Ref<HTMLDivElement | undefined>;
                    text: import("vue").Ref<any>;
                    isLocked: import("vue").Ref<boolean>;
                    active: import("vue").Ref<boolean>;
                    minHeight: import("vue").ComputedRef<string>;
                    padding: import("vue").ComputedRef<"4px 10px" | "8px 12px">;
                    emit: {
                        (e: "update:modelValue", val: string): void;
                        (e: "input", event: Event): void;
                        (e: "focus", event: Event): void;
                        (e: "blur", event: Event): void;
                        (e: "submit"): void;
                    };
                    onFocus: (event: Event) => void;
                    onBlur: (event: Event) => void;
                    onInput: (event: Event) => void;
                    addText: (val: string) => void;
                    clear: () => void;
                    focus: () => void;
                    keyDown: (e: KeyboardEvent) => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "update:modelValue" | "input" | "focus" | "blur")[], string, {
                    minHeight: number;
                }, {}, string> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                placeholder: {
                    type: StringConstructor;
                    required: false;
                };
                modelValue: {
                    type: StringConstructor;
                    required: true;
                };
                minHeight: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
            }>> & {
                onSubmit?: ((...args: any[]) => any) | undefined;
                "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                onInput?: ((...args: any[]) => any) | undefined;
                onFocus?: ((...args: any[]) => any) | undefined;
                onBlur?: ((...args: any[]) => any) | undefined;
            } & import("vue").ShallowUnwrapRef<{
                props: any;
                range: import("vue").Ref<Range | undefined>;
                editorRef: import("vue").Ref<HTMLDivElement | undefined>;
                text: import("vue").Ref<any>;
                isLocked: import("vue").Ref<boolean>;
                active: import("vue").Ref<boolean>;
                minHeight: import("vue").ComputedRef<string>;
                padding: import("vue").ComputedRef<"4px 10px" | "8px 12px">;
                emit: {
                    (e: "update:modelValue", val: string): void;
                    (e: "input", event: Event): void;
                    (e: "focus", event: Event): void;
                    (e: "blur", event: Event): void;
                    (e: "submit"): void;
                };
                onFocus: (event: Event) => void;
                onBlur: (event: Event) => void;
                onInput: (event: Event) => void;
                addText: (val: string) => void;
                clear: () => void;
                focus: () => void;
                keyDown: (e: KeyboardEvent) => void;
            }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
            popperRef: import("vue").Ref<any>;
            emit: {
                (e: "hide", event: Event): void;
                (e: "close"): void;
            };
            submit: (obj: import("../interface").CommentSubmitParam) => void;
            emoji: import("../..").EmojiApi | undefined;
            onSubmit: () => void;
            onClickOutside: (event: Event) => void;
            onFocus: () => void;
            readonly isEmpty: typeof import("../../..").isEmpty;
            readonly vClickOutside: import("vue").ObjectDirective<any, any>;
            readonly ElButton: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                readonly icon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "submit" | "button" | "reset", unknown, "button", boolean>;
                readonly loading: BooleanConstructor;
                readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
                readonly plain: BooleanConstructor;
                readonly text: BooleanConstructor;
                readonly link: BooleanConstructor;
                readonly bg: BooleanConstructor;
                readonly autofocus: BooleanConstructor;
                readonly round: BooleanConstructor;
                readonly circle: BooleanConstructor;
                readonly color: StringConstructor;
                readonly dark: BooleanConstructor;
                readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly disabled: BooleanConstructor;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                    readonly icon: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "submit" | "button" | "reset", unknown, "button", boolean>;
                    readonly loading: BooleanConstructor;
                    readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
                    readonly plain: BooleanConstructor;
                    readonly text: BooleanConstructor;
                    readonly link: BooleanConstructor;
                    readonly bg: BooleanConstructor;
                    readonly autofocus: BooleanConstructor;
                    readonly round: BooleanConstructor;
                    readonly circle: BooleanConstructor;
                    readonly color: StringConstructor;
                    readonly dark: BooleanConstructor;
                    readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
                }>> & {
                    onClick?: ((evt: MouseEvent) => any) | undefined;
                }>>;
                emit: (event: "click", evt: MouseEvent) => void;
                buttonStyle: import("vue").ComputedRef<Record<string, string>>;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                _ref: import("vue").Ref<HTMLButtonElement | undefined>;
                _size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                _type: import("vue").ComputedRef<"" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger">;
                _disabled: import("vue").ComputedRef<boolean>;
                shouldAddSpace: import("vue").ComputedRef<boolean>;
                handleClick: (evt: MouseEvent) => void;
                ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    style: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {}>> & Record<string, any>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (evt: MouseEvent) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                readonly icon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "submit" | "button" | "reset", unknown, "button", boolean>;
                readonly loading: BooleanConstructor;
                readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
                readonly plain: BooleanConstructor;
                readonly text: BooleanConstructor;
                readonly link: BooleanConstructor;
                readonly bg: BooleanConstructor;
                readonly autofocus: BooleanConstructor;
                readonly round: BooleanConstructor;
                readonly circle: BooleanConstructor;
                readonly color: StringConstructor;
                readonly dark: BooleanConstructor;
                readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            }>> & {
                onClick?: ((evt: MouseEvent) => any) | undefined;
            }, {
                readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
                readonly text: boolean;
                readonly nativeType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "submit" | "button" | "reset", unknown>;
                readonly loadingIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
                readonly autoInsertSpace: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly disabled: boolean;
                readonly loading: boolean;
                readonly plain: boolean;
                readonly link: boolean;
                readonly bg: boolean;
                readonly autofocus: boolean;
                readonly round: boolean;
                readonly circle: boolean;
                readonly dark: boolean;
            }>> & {
                ButtonGroup: import("vue").DefineComponent<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                }>>, {
                    readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
                }>;
            };
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "close")[], "hide" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            placeholder: {
                type: StringConstructor;
                required: true;
            };
            contentBtn: {
                type: StringConstructor;
                required: true;
            };
            parentId: {
                type: StringConstructor;
                required: false;
            };
            replay: {
                type: StringConstructor;
                required: false;
            };
        }>> & {
            onHide?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
        }, {}>;
        readonly UFold: import("../../..").SFCWithInstall<import("vue").DefineComponent<{
            line: {
                type: (NumberConstructor | StringConstructor)[];
                required: false;
                default: number;
            };
            unfold: {
                type: BooleanConstructor;
                required: false;
            };
        }, {
            props: any;
            line: import("vue").ComputedRef<number>;
            fold: import("vue").Ref<boolean>;
            isOver: import("vue").Ref<boolean>;
            divBox: import("vue").Ref<HTMLDivElement | undefined>;
            observer: ResizeObserver;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            line: {
                type: (NumberConstructor | StringConstructor)[];
                required: false;
                default: number;
            };
            unfold: {
                type: BooleanConstructor;
                required: false;
            };
        }>>, {
            line: string | number;
            unfold: boolean;
        }>> & Record<string, any>;
        readonly UIcon: import("../../..").SFCWithInstall<import("vue").DefineComponent<{
            name: {
                type: StringConstructor;
                required: false;
            };
            size: {
                type: (NumberConstructor | StringConstructor)[];
                required: false;
            };
            color: {
                type: StringConstructor;
                required: false;
            };
        }, {
            props: any;
            name: import("vue").ComputedRef<string>;
            style: import("vue").ComputedRef<{
                fontSize: string | number | undefined;
                color: string | undefined;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            name: {
                type: StringConstructor;
                required: false;
            };
            size: {
                type: (NumberConstructor | StringConstructor)[];
                required: false;
            };
            color: {
                type: StringConstructor;
                required: false;
            };
        }>>, {}>> & Record<string, any>;
        Operation: import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        small: {
            type: BooleanConstructor;
            required: false;
        };
        data: {
            type: null;
            required: true;
        };
        parentId: {
            type: StringConstructor;
            required: true;
        };
    }>>, {
        small: boolean;
    }>;
    ReplyBox: import("vue").DefineComponent<{
        data: {
            type: null;
            required: false;
        };
        parentId: {
            type: StringConstructor;
            required: true;
        };
    }, {
        props: any;
        state: {
            loading: boolean;
            over: boolean;
            pageNum: number;
            pageSize: number;
        };
        replyPage: (parentId: string, pageNum: number, pageSize: number, finish: (comments: CommentApi[]) => void) => void;
        showSize: number;
        page: boolean;
        comments: import("vue").Ref<CommentApi[]>;
        data: import("vue").ComputedRef<{
            total: number;
            length: number;
            list: any[];
        }>;
        replyMore: () => void;
        replyFinish: (val: any) => void;
        currentChange: (val: number) => void;
        sizeChange: (val: number) => void;
        ContentBox: import("vue").DefineComponent<{
            small: {
                type: BooleanConstructor;
                required: false;
            };
            data: {
                type: null;
                required: true;
            };
            parentId: {
                type: StringConstructor;
                required: true;
            };
        }, {
            props: any;
            state: {
                active: boolean;
                visible: boolean;
            };
            commentRef: import("vue").Ref<import("./comment-box.vue").CommentBoxApi | undefined>;
            btnRef: import("vue").Ref<HTMLDivElement | undefined>;
            allEmoji: import("../..").Emoji;
            like: (id: string) => void;
            user: import("../interface").UserApi;
            isUserInfo: boolean;
            getUser: (uid: string, show: Function) => void;
            level: (v: number) => "" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"831\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#8CDBF4\" p-id=\"832\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"833\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m950.857143-365.714285l73.142857-73.142858v146.285715h-73.142857z m73.142857-73.142858h146.285715v146.285715h-146.285715z m0 146.285715h146.285715v438.857143h-146.285715z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"765\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#6ECEFF\" p-id=\"766\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"767\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m877.714286-438.857143h365.714286v146.285715h-365.714286z m219.428572 146.285715h146.285714v146.285714h-146.285714z m-219.428572 292.571428V512h146.285714v146.285714z\" fill=\"#FFFFFF\" p-id=\"768\"></path><path d=\"M1097.142857 585.142857V438.857143h365.714286v146.285714z m0 73.142857h365.714286v146.285715h-365.714286z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"799\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#599DFF\" p-id=\"800\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"801\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m877.714286-438.857143h365.714286v146.285715h-365.714286z m219.428572 146.285715h146.285714v73.142857h-146.285714z m0 219.428571h146.285714v73.142857h-146.285714z m-146.285715-146.285714h292.571429v146.285714h-292.571429z m-73.142857 219.428571h365.714286v146.285715h-365.714286z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"815\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#34D19B\" p-id=\"816\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"817\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m975.213715-365.714285L1243.428571 219.428571v219.428572h-146.285714zM1097.142857 438.857143h146.285714v292.571428h-146.285714z m146.285714 146.285714h73.142858v146.285714h-73.142858z m0-365.714286h73.142858v146.285715h-73.142858z m73.142858 0h146.285714v585.142858h-146.285714z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"782\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#FFA000\" p-id=\"783\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"784\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m1097.142858-73.142857h146.285714v219.428572h-146.285714z m-219.428572-365.714286h365.714286v146.285715h-365.714286z m0 438.857143h219.428572v146.285715h-219.428572z m73.142857-219.428571h219.428572v146.285714h-219.428572z\" fill=\"#FFFFFF\" p-id=\"785\"></path><path d=\"M1316.571429 438.857143h146.285714v146.285714h-146.285714z m-219.428572-73.142857h146.285714v219.428571h-146.285714z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"748\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#F36262\" p-id=\"749\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"750\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m1097.142858-146.285714h146.285714v292.571429h-146.285714z m-73.142858-292.571429h146.285715v146.285715h-146.285715z m-146.285714 146.285715h146.285714v438.857143h-146.285714z\" fill=\"#FFFFFF\" p-id=\"751\"></path><path d=\"M1243.428571 438.857143h219.428572v146.285714h-219.428572z m-48.786285-170.642286L1243.428571 219.428571v146.285715h-146.285714zM1243.428571 658.285714h146.285715v146.285715h-146.285715z\" fill=\"#FFFFFF\"></path></svg>";
            reply: () => void;
            hide: (event: Event) => void;
            content: import("vue").ComputedRef<string>;
            CommentBox: import("vue").DefineComponent<{
                placeholder: {
                    type: StringConstructor;
                    required: true;
                };
                contentBtn: {
                    type: StringConstructor;
                    required: true;
                };
                parentId: {
                    type: StringConstructor;
                    required: false;
                };
                replay: {
                    type: StringConstructor;
                    required: false;
                };
            }, {
                props: any;
                content: import("vue").Ref<string>;
                action: import("vue").Ref<boolean>;
                disabled: import("vue").Ref<boolean>;
                editorRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        minHeight: number;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        placeholder: {
                            type: StringConstructor;
                            required: false;
                        };
                        modelValue: {
                            type: StringConstructor;
                            required: true;
                        };
                        minHeight: {
                            type: NumberConstructor;
                            required: false;
                            default: number;
                        };
                    }>> & {
                        onSubmit?: ((...args: any[]) => any) | undefined;
                        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                        onInput?: ((...args: any[]) => any) | undefined;
                        onFocus?: ((...args: any[]) => any) | undefined;
                        onBlur?: ((...args: any[]) => any) | undefined;
                    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "minHeight">;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                    $emit: (event: "submit" | "update:modelValue" | "input" | "focus" | "blur", ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        placeholder: {
                            type: StringConstructor;
                            required: false;
                        };
                        modelValue: {
                            type: StringConstructor;
                            required: true;
                        };
                        minHeight: {
                            type: NumberConstructor;
                            required: false;
                            default: number;
                        };
                    }>> & {
                        onSubmit?: ((...args: any[]) => any) | undefined;
                        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                        onInput?: ((...args: any[]) => any) | undefined;
                        onFocus?: ((...args: any[]) => any) | undefined;
                        onBlur?: ((...args: any[]) => any) | undefined;
                    }, {
                        props: any;
                        range: import("vue").Ref<Range | undefined>;
                        editorRef: import("vue").Ref<HTMLDivElement | undefined>;
                        text: import("vue").Ref<any>;
                        isLocked: import("vue").Ref<boolean>;
                        active: import("vue").Ref<boolean>;
                        minHeight: import("vue").ComputedRef<string>;
                        padding: import("vue").ComputedRef<"4px 10px" | "8px 12px">;
                        emit: {
                            (e: "update:modelValue", val: string): void;
                            (e: "input", event: Event): void;
                            (e: "focus", event: Event): void;
                            (e: "blur", event: Event): void;
                            (e: "submit"): void;
                        };
                        onFocus: (event: Event) => void;
                        onBlur: (event: Event) => void;
                        onInput: (event: Event) => void;
                        addText: (val: string) => void;
                        clear: () => void;
                        focus: () => void;
                        keyDown: (e: KeyboardEvent) => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "update:modelValue" | "input" | "focus" | "blur")[], string, {
                        minHeight: number;
                    }, {}, string> & {
                        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                        created?: ((() => void) | (() => void)[]) | undefined;
                        beforeMount?: ((() => void) | (() => void)[]) | undefined;
                        mounted?: ((() => void) | (() => void)[]) | undefined;
                        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                        updated?: ((() => void) | (() => void)[]) | undefined;
                        activated?: ((() => void) | (() => void)[]) | undefined;
                        deactivated?: ((() => void) | (() => void)[]) | undefined;
                        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                        destroyed?: ((() => void) | (() => void)[]) | undefined;
                        unmounted?: ((() => void) | (() => void)[]) | undefined;
                        renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    placeholder: {
                        type: StringConstructor;
                        required: false;
                    };
                    modelValue: {
                        type: StringConstructor;
                        required: true;
                    };
                    minHeight: {
                        type: NumberConstructor;
                        required: false;
                        default: number;
                    };
                }>> & {
                    onSubmit?: ((...args: any[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                    onInput?: ((...args: any[]) => any) | undefined;
                    onFocus?: ((...args: any[]) => any) | undefined;
                    onBlur?: ((...args: any[]) => any) | undefined;
                } & import("vue").ShallowUnwrapRef<{
                    props: any;
                    range: import("vue").Ref<Range | undefined>;
                    editorRef: import("vue").Ref<HTMLDivElement | undefined>;
                    text: import("vue").Ref<any>;
                    isLocked: import("vue").Ref<boolean>;
                    active: import("vue").Ref<boolean>;
                    minHeight: import("vue").ComputedRef<string>;
                    padding: import("vue").ComputedRef<"4px 10px" | "8px 12px">;
                    emit: {
                        (e: "update:modelValue", val: string): void;
                        (e: "input", event: Event): void;
                        (e: "focus", event: Event): void;
                        (e: "blur", event: Event): void;
                        (e: "submit"): void;
                    };
                    onFocus: (event: Event) => void;
                    onBlur: (event: Event) => void;
                    onInput: (event: Event) => void;
                    addText: (val: string) => void;
                    clear: () => void;
                    focus: () => void;
                    keyDown: (e: KeyboardEvent) => void;
                }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
                popperRef: import("vue").Ref<any>;
                emit: {
                    (e: "hide", event: Event): void;
                    (e: "close"): void;
                };
                submit: (obj: import("../interface").CommentSubmitParam) => void;
                emoji: import("../..").EmojiApi | undefined;
                onSubmit: () => void;
                onClickOutside: (event: Event) => void;
                onFocus: () => void;
                readonly isEmpty: typeof import("../../..").isEmpty;
                readonly vClickOutside: import("vue").ObjectDirective<any, any>;
                readonly ElButton: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly disabled: BooleanConstructor;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                    readonly icon: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "submit" | "button" | "reset", unknown, "button", boolean>;
                    readonly loading: BooleanConstructor;
                    readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
                    readonly plain: BooleanConstructor;
                    readonly text: BooleanConstructor;
                    readonly link: BooleanConstructor;
                    readonly bg: BooleanConstructor;
                    readonly autofocus: BooleanConstructor;
                    readonly round: BooleanConstructor;
                    readonly circle: BooleanConstructor;
                    readonly color: StringConstructor;
                    readonly dark: BooleanConstructor;
                    readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly disabled: BooleanConstructor;
                        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                        readonly icon: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "submit" | "button" | "reset", unknown, "button", boolean>;
                        readonly loading: BooleanConstructor;
                        readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
                        readonly plain: BooleanConstructor;
                        readonly text: BooleanConstructor;
                        readonly link: BooleanConstructor;
                        readonly bg: BooleanConstructor;
                        readonly autofocus: BooleanConstructor;
                        readonly round: BooleanConstructor;
                        readonly circle: BooleanConstructor;
                        readonly color: StringConstructor;
                        readonly dark: BooleanConstructor;
                        readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
                    }>> & {
                        onClick?: ((evt: MouseEvent) => any) | undefined;
                    }>>;
                    emit: (event: "click", evt: MouseEvent) => void;
                    buttonStyle: import("vue").ComputedRef<Record<string, string>>;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    _ref: import("vue").Ref<HTMLButtonElement | undefined>;
                    _size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                    _type: import("vue").ComputedRef<"" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger">;
                    _disabled: import("vue").ComputedRef<boolean>;
                    shouldAddSpace: import("vue").ComputedRef<boolean>;
                    handleClick: (evt: MouseEvent) => void;
                    ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly size: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly color: {
                                readonly type: import("vue").PropType<string>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                        }>> & {
                            [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        ns: {
                            namespace: import("vue").Ref<string>;
                            b: (blockSuffix?: string | undefined) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        style: import("vue").ComputedRef<import("vue").CSSProperties>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>>, {}>> & Record<string, any>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    click: (evt: MouseEvent) => boolean;
                }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly disabled: BooleanConstructor;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                    readonly icon: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "submit" | "button" | "reset", unknown, "button", boolean>;
                    readonly loading: BooleanConstructor;
                    readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
                    readonly plain: BooleanConstructor;
                    readonly text: BooleanConstructor;
                    readonly link: BooleanConstructor;
                    readonly bg: BooleanConstructor;
                    readonly autofocus: BooleanConstructor;
                    readonly round: BooleanConstructor;
                    readonly circle: BooleanConstructor;
                    readonly color: StringConstructor;
                    readonly dark: BooleanConstructor;
                    readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
                }>> & {
                    onClick?: ((evt: MouseEvent) => any) | undefined;
                }, {
                    readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
                    readonly text: boolean;
                    readonly nativeType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "submit" | "button" | "reset", unknown>;
                    readonly loadingIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
                    readonly autoInsertSpace: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly disabled: boolean;
                    readonly loading: boolean;
                    readonly plain: boolean;
                    readonly link: boolean;
                    readonly bg: boolean;
                    readonly autofocus: boolean;
                    readonly round: boolean;
                    readonly circle: boolean;
                    readonly dark: boolean;
                }>> & {
                    ButtonGroup: import("vue").DefineComponent<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                    }, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly size: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                        }>> & {
                            [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        ns: {
                            namespace: import("vue").Ref<string>;
                            b: (blockSuffix?: string | undefined) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                    }>>, {
                        readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
                    }>;
                };
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "close")[], "hide" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                placeholder: {
                    type: StringConstructor;
                    required: true;
                };
                contentBtn: {
                    type: StringConstructor;
                    required: true;
                };
                parentId: {
                    type: StringConstructor;
                    required: false;
                };
                replay: {
                    type: StringConstructor;
                    required: false;
                };
            }>> & {
                onHide?: ((...args: any[]) => any) | undefined;
                onClose?: ((...args: any[]) => any) | undefined;
            }, {}>;
            readonly UFold: import("../../..").SFCWithInstall<import("vue").DefineComponent<{
                line: {
                    type: (NumberConstructor | StringConstructor)[];
                    required: false;
                    default: number;
                };
                unfold: {
                    type: BooleanConstructor;
                    required: false;
                };
            }, {
                props: any;
                line: import("vue").ComputedRef<number>;
                fold: import("vue").Ref<boolean>;
                isOver: import("vue").Ref<boolean>;
                divBox: import("vue").Ref<HTMLDivElement | undefined>;
                observer: ResizeObserver;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                line: {
                    type: (NumberConstructor | StringConstructor)[];
                    required: false;
                    default: number;
                };
                unfold: {
                    type: BooleanConstructor;
                    required: false;
                };
            }>>, {
                line: string | number;
                unfold: boolean;
            }>> & Record<string, any>;
            readonly UIcon: import("../../..").SFCWithInstall<import("vue").DefineComponent<{
                name: {
                    type: StringConstructor;
                    required: false;
                };
                size: {
                    type: (NumberConstructor | StringConstructor)[];
                    required: false;
                };
                color: {
                    type: StringConstructor;
                    required: false;
                };
            }, {
                props: any;
                name: import("vue").ComputedRef<string>;
                style: import("vue").ComputedRef<{
                    fontSize: string | number | undefined;
                    color: string | undefined;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                name: {
                    type: StringConstructor;
                    required: false;
                };
                size: {
                    type: (NumberConstructor | StringConstructor)[];
                    required: false;
                };
                color: {
                    type: StringConstructor;
                    required: false;
                };
            }>>, {}>> & Record<string, any>;
            Operation: import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            small: {
                type: BooleanConstructor;
                required: false;
            };
            data: {
                type: null;
                required: true;
            };
            parentId: {
                type: StringConstructor;
                required: true;
            };
        }>>, {
            small: boolean;
        }>;
        readonly ElPagination: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly total: NumberConstructor;
            readonly pageSize: NumberConstructor;
            readonly defaultPageSize: NumberConstructor;
            readonly currentPage: NumberConstructor;
            readonly defaultCurrentPage: NumberConstructor;
            readonly pageCount: NumberConstructor;
            readonly pagerCount: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
            readonly layout: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
            readonly pageSizes: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
            readonly popperClass: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly prevText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly prevIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
            readonly nextText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly nextIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
            readonly small: BooleanConstructor;
            readonly background: BooleanConstructor;
            readonly disabled: BooleanConstructor;
            readonly hideOnSinglePage: BooleanConstructor;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:current-page': (val: number) => boolean;
            'update:page-size': (val: number) => boolean;
            'size-change': (val: number) => boolean;
            'current-change': (val: number) => boolean;
            'prev-click': (val: number) => boolean;
            'next-click': (val: number) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly total: NumberConstructor;
            readonly pageSize: NumberConstructor;
            readonly defaultPageSize: NumberConstructor;
            readonly currentPage: NumberConstructor;
            readonly defaultCurrentPage: NumberConstructor;
            readonly pageCount: NumberConstructor;
            readonly pagerCount: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
            readonly layout: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
            readonly pageSizes: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
            readonly popperClass: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly prevText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly prevIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
            readonly nextText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly nextIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
            readonly small: BooleanConstructor;
            readonly background: BooleanConstructor;
            readonly disabled: BooleanConstructor;
            readonly hideOnSinglePage: BooleanConstructor;
        }>> & {
            "onUpdate:current-page"?: ((val: number) => any) | undefined;
            "onUpdate:page-size"?: ((val: number) => any) | undefined;
            "onSize-change"?: ((val: number) => any) | undefined;
            "onCurrent-change"?: ((val: number) => any) | undefined;
            "onPrev-click"?: ((val: number) => any) | undefined;
            "onNext-click"?: ((val: number) => any) | undefined;
        }, {
            readonly small: boolean;
            readonly disabled: boolean;
            readonly popperClass: string;
            readonly layout: string;
            readonly background: boolean;
            readonly pagerCount: number;
            readonly pageSizes: number[];
            readonly prevText: string;
            readonly prevIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
            readonly nextText: string;
            readonly nextIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
            readonly hideOnSinglePage: boolean;
        }>> & Record<string, any>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: null;
            required: false;
        };
        parentId: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        required: true;
    };
}>>, {}>;
export default _sfc_main;
