let $ = {
    cookie(key,value,json = {}){
        let cookie_str = encodeURIComponent(key) + '=' + encodeURIComponent(value);
        //有效期
        if(!isNaN(json.expires)){
            let date = new Date();
            date.setDate(date.getDate() + json.expires);
            cookie_str += ';expires=' + date;
        }
        //路径
        if(json.path){
            cookie_str += ';path=' + json.path;
        }
        document.cookie = cookie_str;
    },
    getCookie(key){
        let arr = document.cookie.split('; ');
        for(let i = 0,len = arr.length;i < len;i ++){
            let list = arr[i].split('=');
            if(encodeURIComponent(key) === list[0]){
                return decodeURIComponent(list[1]);
            }
        }
    },
    removeCookie(key,json = {}){
        if(json.path){
            document.cookie = `${encodeURIComponent(key)}=;path=${json.path};expires=${new Date(0)}`;
        }else{
            document.cookie = `${encodeURIComponent(key)}=;expires=${new Date(0)}`;
        }
    }
}