interface Routes {
    [key: string]: string;
}
import { NextRequest } from 'next/server';
import routesJSON from './routes.json';

export async function GET(req : NextRequest) {
    return new Response(JSON.stringify({
        message : 'Hello world!'
    }))    
}