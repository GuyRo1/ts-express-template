import { Router } from "express";

export type RouterContainer = {
    name: string;
    router: Router;
    dependencies: string[];
}

export type DependencyContainer = {
    name: string;
    type: 'factory' | 'constructor' | 'service';
    dependency: any
}

export type Error = {
    status: number,
    message: string
}

