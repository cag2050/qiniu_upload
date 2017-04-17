/**
 * Created by yixia on 4/17/17.
 */
var qiniu = require("qiniu");
//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'iUTbwTRLotclpFa8kHoeSUvgxgvH1WL2-ROdbY7B';
qiniu.conf.SECRET_KEY = 'pArurQYI4YcMJK1hA6HAvArS0xNMmRVH70627SkQ';
//要上传的空间
bucket = 'testvideo2';
//上传到七牛后保存的文件名
// key = 'my-nodejs-logo.png';
//构建上传策略函数
function uptoken(bucket) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket);
    return putPolicy.token();
}
//生成上传 Token
var token = uptoken(bucket);

console.log('uptoken_create =')
console.log(token)