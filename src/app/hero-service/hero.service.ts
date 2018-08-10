import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Hero } from './hero.interface';

@Injectable()
export class HeroService {
    getAsyncData(): Observable<Hero> {
        return of({
                name: {
                    alias: 'Batman',
                    realName: 'Bruce Wayne'
                },
                appearances: {
                    comics: true,
                    movies: true,
                    games: true,
                },
                powers: [
                    {
                        name: 'Batarang',
                        description: 'Throw it to stun enemies or cut ropes.',
                    },
                    {
                        name: 'Batclaw',
                        description: 'Pull away grates you cannot reach otherwise',
                    },
                ]
            })
            .pipe(delay(1000));
    }
}
