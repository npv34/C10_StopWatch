class StopWatch {
    private _startTime: number;
    private _endTime: number;

    constructor() {

    }

    start(): void {
        this._startTime = Date.now();
    }

    stop(): void {
        this._endTime = Date.now();
    }

    getElapsedTime(): number {
        return this._endTime - this._startTime;
    }
}

export default StopWatch;