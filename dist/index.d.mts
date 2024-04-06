declare function Hello(): string;
declare function GoodBye(): string;
declare const _default: {
    Hello: typeof Hello;
    GoodBye: typeof GoodBye;
};

export { GoodBye, Hello, _default as default };
