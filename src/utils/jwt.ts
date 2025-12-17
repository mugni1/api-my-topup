import jwt from 'jsonwebtoken';
import "dotenv/config";

export interface MyJwtPayload {
    id: string;
    name: string;
    role: string;
    iat: number;
    exp: number;
}

export const generateToken = (payload: { id: string, name: string, role: string }) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY as string, { expiresIn: '7d' });
};

export const decodeToken = (token: string): MyJwtPayload | null => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET_KEY as string) as MyJwtPayload;
    } catch (error) {
        return null;
    }
};