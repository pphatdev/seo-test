import { Event, GlobalEvents } from "./logo-events";

export const logo = () => {
    const defaultEvent: Event = {
        name: "default",
        condition: () => false,
        svgContent: ()=> ""
    };
    const activeEvent = (GlobalEvents).find(event => event.condition()) || defaultEvent;
    return activeEvent.svgContent()
}