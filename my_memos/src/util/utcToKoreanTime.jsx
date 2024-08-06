import moment from "moment-timezone";

export function utcToKoreanTime({utcTime}) {
    console.log(utcTime)
    return {
        fullTime: moment(utcTime).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'),
        date: moment(utcTime).tz('Asia/Seoul').format('YYYY-MM-DD'),
        time: moment(utcTime).tz('Asia/Seoul').format('HH:mm'),
    };
}


// 코드 복사
// import moment from 'moment-timezone';
//
// const dateString = "2024-07-11T04:32:57.849034Z";
// const kstDate = moment.utc(dateString).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
//
// console.log(kstDate);