import {InjectionKey} from "vue";

export interface Config {
    ROOT_LEVEL: number;
}

export const configKey = Symbol() as InjectionKey<Config>;