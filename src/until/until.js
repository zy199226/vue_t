export const wh = window.innerHeight;

export const ww = window.innerWidth;

export const stopBubble = (e) => {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
};
