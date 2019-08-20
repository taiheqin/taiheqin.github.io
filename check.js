function checkCCN(){
    var college_class_name=document.getElementById("college_class_name").value;
    var reg=/^[0-9][\u4e00 - \u9fa5]{6,20}$/
    var CCNwarning=document.getElementById("CCNwarning");
    if(college_class_name=="" || college_class_name==null ){
        CCNwarning.innerHTML="这个不能为空";
        CCNwarning.style.color="red";
        CCNwarning.style.fontSize="15px";
        CCNwarning.style.fontWeight="bold";
        return false;
    }else if(reg.test(college_class_name)){
        CCNwarning.innerHTML="perfect";
        return true;
    }else{
        CCNwarning.innerHTML="有没有感觉字太少了";
        CCNwarning.style.color="red";
        CCNwarning.style.fontSize="15px";
        CCNwarning.style.fontWeight="bold";
        return false;
    }
}

function checkName(){
    var name1=document.getElementById("name1").value;
    var reg=/^[\u4e00 - \u9fa5]{2,20}$/
    var Namewarning=document.getElementById("Namewarning");
    if(name1=="" || name1==null ){
        Namewarning.innerHTML="用户名不能为空";
        Namewarning.style.color="red";
        Namewarning.style.fontWeight="bold";
        Namewarning.style.fontSize="15px";
        return false;
    }else if(reg.test(name1)){
        Namewarning.innerHTML="perfect";
        return true;
    }else{
        Namewarning.innerHTML="输入的格式似乎不太对";
        Namewarning.style.color="red";
        Namewarning.style.fontWeight="bold";
        Namewarning.style.fontSize="15px";
        return false;
    }
}

function checkSex(){
    var sex=document.getElementById("sex").value;
    var reg=/^['男'|'女']$/
    var sexwarning=document.getElementById("Sexwarning");
    if(sex=="" || sex==null ){
        sexwarning.innerHTML="不能为空";
        sexwarning.style.color="red";
        sexwarning.style.fontSize="15px";
        sexwarning.style.fontWeight="bold";
        return false;
    }else if(reg.test(sex)){
        sexwarning.innerHTML="perfect";
        return true;
    }else{
        sexwarning.innerHTML="输入的格式似乎不太对";
        sexwarning.style.color="red";
        sexwarning.style.fontSize="15px";
        sexwarning.style.fontWeight="bold";
        return false;
    }
}
function checkQQ(){
    var qq_num=document.getElementById("qq_num").value;
    var reg=/^\d{10}$/
    var QQwarning=document.getElementById("QQwarning");
    if(qq_num=="" || qq_num==null ){
        QQwarning.innerHTML="不能为空";
        QQwarning.style.color="red";
        QQwarning.style.fontSize="15px";
        QQwarning.style.fontWeight="bold";
        return false;
    }else if(reg.test(qq_num)){
        QQwarning.innerHTML="perfect";
        return true;
    }else{
        QQwarning.innerHTML="输入的格式似乎不太对";
        QQwarning.style.color="red";
        QQwarning.style.fontSize="15px";
        QQwarning.style.fontWeight="bold";
        return false;
    }
}

function checkPhone(){
    var phone_num=document.getElementById("phone_num").value;
    var reg=/^1\d{10}$/
    var PNwarning=document.getElementById("PNwarning");
    if(phone_num=="" || phone_num==null ){
        PNwarning.innerHTML="不能为空";
        PNwarning.style.color="red";
        PNwarning.style.fontSize="15  px";
        PNwarning.style.fontWeight="bold";
        return false;
    }else if(reg.test(phone_num)){
        PNwarning.innerHTML="perfect";
        return true;
    }else{
        PNwarning.innerHTML="输入的格式似乎不太对";
        PNwarning.style.color="red";
        PNwarning.style.fontSize="15px";
        PNwarning.style.fontWeight="bold";
        return false;
    }
}


function checkHoppy(){
    var hoppy=document.getElementById("hoppy").value;
    var reg=/^[\u4e00 - \u9fa5]{2,40}$/
    var Hoppywarning=document.getElementById("Hoppywarning");
    if(hoppy=="" || hoppy==null ){
        Hoppywarning.innerHTML="总得填一些的呢";
        Hoppywarning.style.color="red";
        Hoppywarning.style.fontSize="15px";
        Hoppywarning.style.fontWeight="bold";
        return false;
    }else if(reg.test(hoppy)){
        Hoppywarning.innerHTML="perfect";
        return true;
    }else{
        Hoppywarning.innerHTML="输入的格式似乎不太对呢";
        Hoppywarning.style.color="red";
        Hoppywarning.style.fontSize="15px";
        Hoppywarning.style.fontWeight="bold";
        return false;
    }
}

function checkdepartment(){
    var num=0;
    var departments=document.getElementsByName("department");
    var departmentwarning=document.getElementById("Departmentwarning");
    for(var i=0;i<departments.length;i++){
        if(departments[i].checked){
            num++;
        }
    }
    if(num==0){
        departmentwarning.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp**总得选一个吧";
        departmentwarning.style.color="red";
        return false;
    }else if(num==1||num==2){
        departmentwarning.innerHTML="";
        return true;
    }else{
        departmentwarning.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp**只能选两个喔"; 
        departmentwarning.style.color="red";
        return false;
    }
}

function checkAll(){
    var CCN=checkCCN();
    var name1=checkName();
    var sex=checkSex();
    var qq=checkQQ();
    var phone_num=checkPhone();
    var hoppy=checkHoppy();
    var department=checkdepartment();
    if(CCN&&name1&&sex&&qq&&phone_num&&hoppy&&department){
        return turn;
    }else{
        return false;
    }
}
