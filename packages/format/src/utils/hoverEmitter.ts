import {config} from '../config.ts'

// 当前hover的层级
let currentHoverLevel = {
    value: config.ROOT_LEVEL
};

// 监听器类型定义
type HoverChangeListener = (level: number | null, prevLevel: number | null) => void;

// 监听器集合
const listeners = new Set<HoverChangeListener>();

function mousein(level: number) {
    listeners.forEach(listener => {
        listener(level, currentHoverLevel.value);
    });
    currentHoverLevel.value = level;
}

function mouseout(level: number) {
    listeners.forEach(listener => {
        listener(level - 1, currentHoverLevel.value);
    });
    currentHoverLevel.value = level - 1;
}

function subscribe(listener: HoverChangeListener) {
    listeners.add(listener);
}

function unsubscribe(listener: HoverChangeListener) {
    listeners.delete(listener);
}

// 响应式的当前hover层级，供Vue组件使用
export {
    mousein,
    mouseout,
    subscribe,
    unsubscribe,
    type HoverChangeListener
}
