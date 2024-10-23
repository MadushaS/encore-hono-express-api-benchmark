import http from 'k6/http';
import { check } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vus: 1,
    duration: '60s',
};

export default function() {
    let res = http.get('http://localhost:4000/hello');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
    }