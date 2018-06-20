import { Injectable } from '@angular/core';
// import { Changelly } from '../assets/swap-lib-bundle.js';

declare var Changelly

@Injectable()
export class SwapService {
    changelly: any
    // Your key: 51fc7f87a0a1447c84a7064d975ab217
    // Your secret: cdcbd2cdd14fb17ac0f20e327dbcd358f2169377ea8ef94855b4c062ac0ff92d
    constructor() {
        this.changelly = new Changelly("51fc7f87a0a1447c84a7064d975ab217",
            "cdcbd2cdd14fb17ac0f20e327dbcd358f2169377ea8ef94855b4c062ac0ff92d")
    }

    getCurrencies = async () => {
        const response = await this.promisify(cb => this.changelly.getCurrencies(cb))
        return response
    }

    createTransaction = async (fromCoin, toCoin, addr, value) => {
        const response = await this.promisify(cb => this.changelly.createTransaction(fromCoin, toCoin, addr, value, undefined, cb))
        return response
    }

    getMinAmount = async (fromCoin, toCoin) => {
        const response = await this.promisify(cb => this.changelly.getMinAmount(fromCoin, toCoin, cb))
        return response
    }

    getExchangeAmount = async (fromCoin, toCoin, value) => {
        const response = await this.promisify(cb => this.changelly.getExchangeAmount(fromCoin, toCoin, value, cb))
        return response
    }

    getTransactions = async (limit, offset, coin) => {
        const response = await this.promisify(cb => this.changelly.getTransactions(limit, offset, coin, undefined, undefined, cb))
        return response
    }

    getStatus = async (txid) => {
        const response = await this.promisify(cb => this.changelly.getStatus(txid, cb))
        return response
    }

    promisify(inner) {
        return new Promise((resolve, reject) =>
            inner((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            })
        );;
    }

}

