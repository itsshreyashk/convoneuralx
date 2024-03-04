interface Routes {
    [key: string]: string;
}
import { NextRequest, NextResponse } from 'next/server';
import routesJSON from './routes.json';

export async function POST(req: NextRequest, res: NextResponse) {
    const body: any = await req.json();
    const getRoute = body.getRoute;
    console.log(body);

    const routes: Routes = routesJSON;
    const response: string | undefined = routes[getRoute];
    console.log(response);

    return new Response(JSON.stringify({
        route: response
    }));
}