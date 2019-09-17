import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtils {

  constructor() { }

  dateToString(date = new Date(), pattern = 'dd/MM/yyyy', monthPlusOne = true) {

    function padLeft(s, l, c = '0') {
      return Array(l - String(s).length + 1).join(c) + s;
    }

    let parsed = pattern;

    const mm = date.getMinutes();
    const HH = date.getHours();

    const dd = date.getDate();
    const MM = monthPlusOne ? date.getMonth() + 1 : date.getMonth();
    const yyyy = date.getFullYear();

    parsed = parsed.replace('yyyy', String(yyyy));
    parsed = parsed.replace('MM', padLeft(MM, 2));
    parsed = parsed.replace('dd', padLeft(dd, 2));
    parsed = parsed.replace('HH', padLeft(HH, 2));
    parsed = parsed.replace('mm', padLeft(mm, 2));

    return parsed;
  }

  dateToNgModelT(date = new Date()) {
    const hour = date.getHours();
    const minute = date.getMinutes();

    return { 'hour': hour, 'minute': minute };
  }

  dateToNgModelD(date = new Date()) {
    const dd = date.getDate();
    const MM = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    return { 'year': yyyy, 'month': MM, 'day': dd };
  }

  convertToCurrentOffset(date, serverOffset) {
    return new Date(
      date.getTime() + (60000 * (date.getTimezoneOffset() - serverOffset))
    );
  }
}
