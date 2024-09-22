import { NextResponse } from 'next/server';
import configureDB from '../../db/index';

export const GET = async () => {
    try {
        await configureDB();
        return NextResponse.json({
            message: "Healthy..."
        }, {
            status: 200
        });   
    } catch (error) {
        return NextResponse.json({
            error: error
        }, {
            status: 500
        });
    }
}