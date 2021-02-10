/**
 * 
 * USE MIXINS RESPONSABLY.
 * PLEASE!
 * 
 */

import { Vue, Component, Prop } from 'vue-property-decorator';

const DEFAULT_INTERVAL = 1000;

@Component
export class CountdownMixin extends Vue {
    @Prop({
        type: Number,
        default: 0,
    })
    readonly countdown!: number;
    remainingSeconds: number = this.countdown;

    private intervalId: number = 0;

    private start(): void {
        clearInterval(this.intervalId);

        if (this.remainingSeconds <= 0) {
            return;
        }
        
        this.intervalId = setInterval(
            () => this.decrease(), 
            DEFAULT_INTERVAL
        );
    }

    private decrease(): void {
        console.log('[CountdownMixin]', this.remainingSeconds);
        this.remainingSeconds -= 1;

        if (this.remainingSeconds > 0) {
            return;
        }

        clearInterval(this.intervalId);
        console.log('[CountdownMixin] ⏰ Countdown is over!');
    }

    restart(): void {
        this.remainingSeconds = this.countdown;
        this.start();
    }

    mounted(): void {
        console.log('[mounted mixin] Hello! I\'m a countdown');
        this.start();
    }
}
