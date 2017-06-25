import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

export interface AuthServiceInterface {
    APP_TOKEN_KEY: string;
    APP_TOKEN: string;
    isAuthorized(): boolean;
    authenticate(): void;
    logout();
    setToken(token: string): void;
    onCanActivate(canActivate: boolean): void;
}

@Injectable()
export class AuthService implements CanActivate, AuthServiceInterface {
    APP_TOKEN_KEY: string;
    APP_TOKEN: string;

    constructor(private router: Router) {
        this.APP_TOKEN_KEY = 'bsis-token';
        this.APP_TOKEN = localStorage.getItem(this.APP_TOKEN_KEY);
        // Have an option to set the request config default header here :D
    }

    isAuthorized(): boolean {
        return Boolean(this.APP_TOKEN);
    }

    authenticate(): void {
        // Do redirect here / token retrieval
    }

    setToken(token: string): void {
        localStorage.setItem(this.APP_TOKEN_KEY, `Bearer ${token}`);
    }

    canActivate(): boolean {
        const canActivate = this.isAuthorized();
        this.onCanActivate(canActivate);
        return canActivate;
    }

    onCanActivate(canActivate: boolean): void {
        if (!canActivate) {
            this.router.navigate(['/login']);
            // Or call a redirect method eg. this.authenticate
        }
    }

    logout() {
        localStorage.removeItem(this.APP_TOKEN_KEY);
    }

}
