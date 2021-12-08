import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';

@Pipe({
    name: 'localCurrency',
})
export class LocalcurrencyPipe implements PipeTransform {
    constructor(private httpClient: HttpClient) {
       
    }
    languageList: any[] = [{ code: 'en', label: 'English', currencyCode: 'USD', locale: 'en-US',exchangeRate:1 },
    { code: 'fr', label: 'French', currencyCode: 'EUR', locale: 'fr-FR',exchangeRate:0.88842 }, 
        { code: 'de', label: 'German', currencyCode: 'EUR', locale: 'de-DE',exchangeRate:0.88842 },
        { code: 'hi', label: 'Hindi', currencyCode:'INR',locale:'en-IN',exchangeRate:75.409 },
        { code: 'zh-Hans', label: 'Chinese', currencyCode:'CNY',locale:'zh_HK', exchangeRate:6.3674 }   
    ] || [];
    transform(
        value: number,
        currencyCode: string = 'USD',
        display:
            | 'code'
            | 'symbol'
            | 'symbol-narrow'
            | string
            | boolean = 'symbol',
        digitsInfo: string = '3.2-2',
        locale: string = 'en-US',
    ): string | null {
        let localizeValue: any = window.localStorage.getItem('localizeLng') || '';
        if(!localizeValue || localizeValue == 'undefined'){             
            localizeValue = { code: 'en', label: 'English', currencyCode: 'USD', locale: 'en-US',exchangeRate:1 }
        }
        else{
            localizeValue = JSON.parse(window.localStorage.getItem('localizeLng') || '');
        }
        let convertedCurrencyValue = value * localizeValue.exchangeRate;     

        return formatCurrency(
            convertedCurrencyValue,
            localizeValue.locale,
            getCurrencySymbol(localizeValue.currencyCode, 'wide'),
            localizeValue.currencyCode,
            digitsInfo,
        );
    }
}