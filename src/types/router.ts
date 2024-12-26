
export interface RouteConfig {
    path: string;
    component: string | ((...params: any[]) => string | Promise<string>);
}

export interface Routes extends Array<RouteConfig> { }