
export interface RouteConfig {
    path: string;
    component: string | ((...params: any[]) => string);
}

export interface Routes extends Array<RouteConfig> { }