class Obj{
    constructor(number){
        this.isEmpty=1;
        this.brand="未知";
        this.phoneName="未知";
        this.phoneImage="./empty.png";
        this.chipBrand="未知";
        this.chipName="未知";
        this.ram="未知";
        this.rom="未知";
        this.screen="未知";
        this.number=number;
    }
}
var dataAmount=100;
var i;
var j;
var k;
var page=0;
var maxPage=0;
var objs=new Array();
var result=new Array();
var maxResultPage=0;
var isResult2=0;
var backup=new Array();
for(i=0;i<dataAmount;i++){
    objs[i]=new Obj(i);
}
for(i=0;i<dataAmount;i++){
    result[i]=new Obj(i);
}
for(i=0;i<dataAmount;i++){
    backup[i]=new Obj(i);
}

objs[0].phoneImage="https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/SAMSUNG_samsung_galaxy_s20_0212063512931_360x270.jpg";

objs[1].brand="Apple";
objs[1].isEmpty=0;
objs[1].phoneName="iPhone 5s";
objs[1].phoneImage="https://d3c6c8kv4if4l0.cloudfront.net/www/Product/10220/main_image/big/10220.jpg";
objs[1].chipBrand="Apple"
objs[1].chipName="A7"
objs[1].ram="1"
objs[1].rom="16"
objs[1].screen="4"
objs[2].brand="Samsung";
objs[2].isEmpty=0;
objs[2].phoneName="Galaxy A32";
objs[2].phoneImage="https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/SAMSUNG_samsung_galaxy_a32_5g_0118053518577_360x270.jpg";
objs[2].chipBrand="MediaTek";
objs[2].chipName="Dimensity 720";
objs[2].ram="6";
objs[2].rom="128";
objs[2].screen="6.5";
objs[3].brand="Xiaomi";
objs[3].phoneName="小米手機 5s plus";
objs[3].phoneImage="https://d3c6c8kv4if4l0.cloudfront.net/www/Product/12814/main_image/big/Xiaomi_小米手機_5s_64GB20170119111322uid905.jpg";
objs[3].chipBrand="Qualcomm";
objs[3].chipName="Snapdragon 821";
objs[3].ram="6";
objs[3].rom="128";
objs[3].screen="5.7";
objs[3].isEmpty=0;
objs[4].brand="Nokia";
objs[4].isEmpty=0;
objs[4].phoneName="G50";
objs[4].phoneImage="https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/NOKIA_nokia_g50_0923062323633_360x270.jpg";
objs[4].chipBrand="Qualcomm";
objs[4].chipName="Snapdragon 480";
objs[4].ram="6";
objs[4].rom="128";
objs[4].screen="6.82";
objs[5].brand="Apple";
objs[5].isEmpty=0;
objs[5].phoneName="iPhone 12";
objs[5].phoneImage="https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/Apple_apple_iphone_12_1013194613791_360x270.jpg";
objs[5].chipBrand="Apple";
objs[5].chipName="A14 Bionic";
objs[5].ram="4";
objs[5].rom="128";
objs[5].screen="6.1";
objs[6].brand="Samsung";
objs[6].isEmpty=0;
objs[6].phoneImage="https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/SAMSUNG_samsung_galaxy_m32_0719031919845_360x270.jpg";
objs[6].phoneName="Galaxy M32";
objs[6].chipBrand="MediaTek";
objs[6].chipName="Helio G80";
objs[6].ram="6";
objs[6].rom="128";
objs[6].screen="6.4";
objs[0].brand="Samsung";
objs[0].phoneName="Galaxy S20";
objs[0].chipBrand="Qualcomm";
objs[0].chipName="Snapdragon 865";
objs[0].ram="12";
objs[0].rom="128";
objs[0].screen="6.2";
objs[0].isEmpty=0;
objs[7].brand="";
objs[7].phoneName="";
objs[7].phoneImage="./empty.png";
objs[7].chipBrand="";
objs[7].chipName="";
objs[7].ram="";
objs[7].rom="";
objs[7].screen="";

var jsNeedBox=document.getElementsByClassName("jsNeedBox");
var closeFunction=document.getElementsByClassName("closeFunction");
var isClose=0;
var box1=document.getElementById("box1");
var box2=document.getElementById("box2");
var box3=document.getElementById("box3");
var box4=document.getElementById("box4");
var box5=document.getElementById("box5");
var box6=document.getElementById("box6");
var isAddItemWindowOpen=0;
var isSuccessfullyAddItemWindowOpen=0;
var dataNumberRecord;
var addItemButton=document.getElementsByClassName("addItemButton");
var searchButton=document.getElementsByClassName("searchButton");
var floatWindowOuterBox=document.getElementsByClassName("floatWindowOuterBox");
var left=document.getElementsByClassName("left");
var right=document.getElementsByClassName("right");
var cursorBox1=document.getElementsByClassName("cursorBox1");
var cursorBox2=document.getElementsByClassName("cursorBox2");
var cursorBox3=document.getElementsByClassName("cursorBox3");
var cursorBox4=document.getElementsByClassName("cursorBox4");
var cursorBox5=document.getElementsByClassName("cursorBox5");
var cursorBox6=document.getElementsByClassName("cursorBox6");
var jsNeedShowButtonBox=document.getElementsByClassName("jsNeedShowButtonBox");
var headerRightBox=document.getElementsByClassName("headerRightBox");
//var addItemWindow=document.getElementsByClassName("addItemWindow");
//var AddItemWindow=document.getElementById("AddItemWindow");
//var successfullyAddItemWindow=getElementsByClassName("successfullyAddItemWindow");
function closeWindow(isResult){
    floatWindowOuterBox[0].innerHTML="";
    isAddItemWindowOpen=0;
    isSuccessfullyAddItemWindowOpen=0;
    //checkButton();
}

function showAddItemWindow(){
    if(isAddItemWindowOpen==0){
        floatWindowOuterBox[0].innerHTML=floatWindowOuterBox[0].innerHTML+`
    <div class="addItemWindow">
    <div class="addItemTitle">
        新增手機
    </div>
    <div class="addItemWindowInnerBox">
        <div class="addItemBrandOuterBox addItemOuterBox">
            <div class="addItemBrandTitle addItemTitle">廠牌：&nbsp;&nbsp;&nbsp;&nbsp; </div>
            <input type="text" class="addItemBrand addItemInputBox" placeholder="請輸入手機廠牌">
        </div>
        <div class="addItemNameOuterBox addItemOuterBox">
            <div class="addItemNameTitle addItemTitle">名稱：&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <input type="text" class="addItemName addItemInputBox" placeholder="請輸入手機名稱">
        </div>
        <div class="addItemImageOuterBox addItemOuterBox">
            <div class="addItemImageTitle addItemTitle">手機相片網址：</div>
            <textarea class="addItemImage addItemInputBox"name="" id="" cols="30" rows="3" placeholder="請輸入手機相片網址"></textarea>
        </div>
        <div class="addItemChipBrandOuterBox addItemOuterBox">
            <div class="addItemChipBrandTitle addItemTitle">處理器品牌:&nbsp;</div>
            <input type="text" class="addItemChipBrand addItemInputBox" placeholder="請輸入處理器品牌">
        </div>
        
        <div class="addItemChipNameOuterBox addItemOuterBox">
            <div class="addItemChipNameTitle addItemTitle">處理器名稱:&nbsp;</div>
            <input type="text" class="addItemChipName addItemInputBox" placeholder="請輸入處理器名稱">
        </div>
        <div class="addItemRamOuterBox addItemOuterBox">
            <div class="addItemRamTitle addItemTitle">記憶體大小:</div>
            <div class="addItemRamUnitBox addItemUnitBox">
                <input type="text" class="addItemRam addItemInputBox" placeholder="請輸入記憶體大小">
                <div class="addItemUnitOuterBox">
                    <div class="addItemRamUnit addItemUnit">GB</div>
                </div>
            </div>
        </div>
        <div class="addItemRomOuterBox addItemOuterBox">
            <div class="addItemRomTitle addItemTitle">儲存空間大小:</div>
            <div class="addItemRomUnitBox addItemUnitBox">
                <input type="text" class="addItemRom addItemInputBox" placeholder="請輸入儲存空間大小">
                <div class="addItemUnitOuterBox">
                    <div class="addItemRomUnit addItemUnit">GB</div>
                </div>
            </div>
        </div>
        <div class="addItemScreenOuterBox addItemOuterBox">
            <div class="addItemScreenTitle addItemTitle">螢幕大小</div>
            <div class="addItemScreenUnitBox addItemUnitBox">
                <input type="text" class="addItemScreen addItemInputBox" placeholder="請輸入螢幕大小">
                <div class="addItemUnitOuterBox">
                    <div class="addItemScreenUnit addItemUnit">吋</div>
                </div>
            </div>
        </div>
    </div>
    <div class="addItemWindowButtons">
        <button class="addItemWindowCancel">
            取消
        </button>
        <button class="addItemWindowConfirm">
            確定
        </button>
    </div>
</div>
        `;
        isAddItemWindowOpen=1;
        var addItemWindowCancel=document.getElementsByClassName("addItemWindowCancel");
        addItemWindowCancel[0].addEventListener("click",function(){
            floatWindowOuterBox[0].innerHTML="";
            closeWindow(0);
            isAddItemWindowOpen=0;
        });
        var addItemWindowConfirm=document.getElementsByClassName("addItemWindowConfirm");
        addItemWindowConfirm[0].addEventListener("click",function(){
            var addItemBrand=document.getElementsByClassName("addItemBrand");
            var addItemName=document.getElementsByClassName("addItemName");
            var addItemImage=document.getElementsByClassName("addItemImage");
            var addItemChipBrand=document.getElementsByClassName("addItemChipBrand");
            var addItemChipName=document.getElementsByClassName("addItemChipName");
            var addItemRam=document.getElementsByClassName("addItemRam");
            var addItemRom=document.getElementsByClassName("addItemRom");
            var addItemScreen=document.getElementsByClassName("addItemScreen");
            for(i=0;i<dataAmount;i++){
                if(objs[i].isEmpty==1){
                    break;
                }
            }
            objs[i].brand=addItemBrand[0].value;
            objs[i].phoneName=addItemName[0].value;
            objs[i].phoneImage=addItemImage[0].value;
            objs[i].chipBrand=addItemChipBrand[0].value;
            objs[i].chipName=addItemChipName[0].value;
            objs[i].ram=addItemRam[0].value;
            objs[i].rom=addItemRom[0].value;
            objs[i].screen=addItemScreen[0].value;
            if(objs[i].brand==""&&objs[i].phoneName==""){
                alert("廠牌和名稱請至少輸入一項");
                closeWindow(0);
                showAddItemWindow();
            }else{
                if(objs[i].brand==""){
                    objs[i].brand="未知";
                }
                if(objs[i].phoneName==""){
                    objs[i].phoneName="未知";
                }
                if(objs[i].phoneImage==""){
                    objs[i].phoneImage="./empty.png";
                }
                if(objs[i].chipBrand==""){
                    objs[i].chipBrand="未知";
                }
                if(objs[i].chipName==""){
                    objs[i].chipName="未知";
                }
                if(objs[i].ram==""){
                    objs[i].ram="未知";
                }
                if(objs[i].rom==""){
                    objs[i].rom="未知";
                }
                if(objs[i].screen==""){
                    objs[i].screen="未知";
                }
                objs[i].isEmpty=0;
                var recordData=i;
                var recordAmount=0;
                for(i=0;i<100;i++){
                    if(objs[i].isEmpty==0){
                        recordAmount++;
                    }
                }
                maxPage=(recordAmount-1)/6;
                maxPage=Math.floor(maxPage);
                page=maxPage;
                listPhones(page);
                floatWindowOuterBox[0].innerHTML="";
                isAddItemWindowOpen=0;
            }
        });
    }else if(isAddItemWindowOpen==1){
        floatWindowOuterBox[0].innerHTML="";
        isAddItemWindowOpen=0;
    }
}

function deleteItemFunction(record,isResult){
    objs[record].isEmpty=1;
    objs[record].brand="未知";
    objs[record].phoneName="未知";
    objs[record].phoneImage="./empty.png";
    objs[record].chipBrand="未知";
    objs[record].chipName="未知";
    objs[record].ram="未知";
    objs[record].rom="未知";
    objs.screen="未知";
    if(isResult==0){
        alert("刪除成功");
        closeWindow(isResult);
        listPhones(page);
    }
}
function listPhones(page){
    isResult2=0;
    var n=0;
    for(i=0;i<dataAmount;i++){
        if(objs[i].isEmpty==0){
            n++;
        }
    }
    maxPage=(n-1)/6;
    maxPage=Math.floor(maxPage);
    var i,n=0;
    var record=0;
    var record2=countItem(page,0);
    jsNeedBox[0].innerHTML="";
    if(record2==-1){
        jsNeedBox[0].innerHTML="";
        return;
    }
    for(i=record2;i<dataAmount;i++){
        if(record==6){
            break;
        }
        if(objs[i].isEmpty==0){
            jsNeedBox[0].innerHTML=jsNeedBox[0].innerHTML+`
            <div class="containerInnerBox">
                        <div class="numberOuterBox">
                            <div class="number">
                                ${objs[i].number+1}
                            </div>
                        </div>
                        <div class="brandOuterBox">
                            <div class="brand">
                                ${objs[i].brand}
                            </div>
                        </div>
                        <div class="phoneNameOuterBox">
                            <div class="phoneName">
                                ${objs[i].phoneName}
                            </div>
                        </div>
                        <img class="phoneImage" src="${objs[i].phoneImage}" alt="">
                        </div>
            `
            record++;
        }
    }
    maxPage=countItemsAmount();
    maxPage=Math.floor(maxPage);
    var record;
    var containerInnerBox=document.getElementsByClassName("containerInnerBox");
    /*if(containerInnerBox[0]!=undefined){
        containerInnerBox[0].removeEventListener("click",function(){
            return;
        })
    }
    
    if(containerInnerBox[1]!=undefined){
        containerInnerBox[1].removeEventListener("click",function(){
            return;
        })
    }

    if(containerInnerBox[2]!=undefined){
        containerInnerBox[2].removeEventListener("click",function(){
            return;
        })
    }

    if(containerInnerBox[3]!=undefined){
        containerInnerBox[3].removeEventListener("click",function(){
            return;
        })
    }

    if(containerInnerBox[4]!=undefined){
        containerInnerBox[4].removeEventListener("click",function(){
            return;
        })
    }

    if(containerInnerBox[5]!=undefined){
        containerInnerBox[5].removeEventListener("click",function(){
            return;
        })
    }*/
    if(containerInnerBox[0]!=undefined){
        containerInnerBox[0].addEventListener("click",function(){
            for(i=0;i<7;i++){
                console.log(objs[i]);
            }
            record=countItem(page,0);
            showItem(record,0);
        })
    }
    if(containerInnerBox[1]!=undefined){
        containerInnerBox[1].addEventListener("click",function(){
            record=countItem(page,1);
            showItem(record,0);
        })
    }
    if(containerInnerBox[2]!=undefined){
        containerInnerBox[2].addEventListener("click",function(){
            record=countItem(page,2);
            showItem(record,0);
        })
    }
    if(containerInnerBox[3]!=undefined){
        containerInnerBox[3].addEventListener("click",function(){
            record=countItem(page,3);
            showItem(record,0);
        })
    }
    if(containerInnerBox[4]!=undefined){
        containerInnerBox[4].addEventListener("click",function(){
            record=countItem(page,4);
            showItem(record,0);
        })
    }
    if(containerInnerBox[5]!=undefined){
        containerInnerBox[5].addEventListener("click",function(){
            record=countItem(page,5);
            showItem(record,0);
        })
    }

addItemButton[0].addEventListener("click",showAddItemWindow);
}
function changePage(){
    right[0].addEventListener("click",function(){
        if(page<maxPage){
            page++;
            listPhones(page);
        }
    })
    left[0].addEventListener("click",function(){
        if(page!=0){
            page--;
            listPhones(page);
        }
    })
}

function showItem(number,isResult){
    floatWindowOuterBox[0].innerHTML=`
    <div class="showDataWindow">
    <div class="showDataTitle">
        檢視資料
    </div>
    <div class="showDataWindowInnerBox">
        <div class="showDataTextImageBox">
            <div class="showDataTextBox">
                <div class="showDataBrandOuterBox showDataOuterBox">
                    <div class="showDataBrandTitle showDataTitle">廠牌：&nbsp;&nbsp;&nbsp;&nbsp; </div>
                    <div class="showDataDataOuterBox"> 
                        <div class="showDataBrand showDataData">${objs[number].brand}</div>
                    </div>
                </div>
                <div class="showDataNameOuterBox showDataOuterBox">
                    <div class="showDataNameTitle showDataTitle">名稱：&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div class="showDataDataOuterBox">
                        <div class="showDataName showDataData">${objs[number].phoneName}</div>
                    </div>
                </div>
                <div class="showDataChipBrandOuterBox showDataOuterBox">
                    <div class="showDataChipBrandTitle showDataTitle">處理器品牌:&nbsp;</div>
                    <div class="showDataDataOuterBox">   
                        <div class="showDataChipBrand showDataData">${objs[number].chipBrand}</div>
                    </div>
                </div>
                <div class="showDataChipNameOuterBox showDataOuterBox">
                    <div class="showDataChipNameTitle showDataTitle">處理器名稱:&nbsp;</div>
                    <div class="showDataDataOuterBox">
                        <div class="showDataChipName showDataData">${objs[number].chipName}</div>
                    </div>
                </div>
                <div class="showDataRamOuterBox showDataOuterBox">
                    <div class="showDataRamTitle showDataTitle">記憶體大小:</div>
                    <div class="showDataRamUnitBox showDataUnitBox">
                        <div class="showDataDataOuterBox">
                            <div class="showDataRam showDataUnitData">${objs[number].ram}</div>
                        </div>
                        <div class="showDataUnitOuterBox">
                            <div class="showDataRamUnit showDataUnit">GB</div>
                        </div>
                    </div>
                </div>
                <div class="showDataRomOuterBox showDataOuterBox">
                    <div class="showDataRomTitle showDataTitle">儲存空間大小:</div>
                    <div class="showDataRomUnitBox showDataUnitBox">
                        <div class="showDataDataOuterBox">
                            <div class="showDataRom showDataUnitData">${objs[number].rom}</div>
                        </div>
                        <div class="showDataUnitOuterBox">
                            <div class="showDataRomUnit showDataUnit">GB</div>
                        </div>
                    </div>
                </div>
                <div class="showDataScreenOuterBox showDataOuterBox">
                    <div class="showDataScreenTitle showDataTitle">螢幕大小</div>
                    <div class="showDataScreenUnitBox showDataUnitBox">
                        <div class="showDataDataOuterBox">
                            <div class="showDataScreen showDataUnitData">${objs[number].screen}</div>
                        </div>
                        <div class="showDataUnitOuterBox">
                            <div class="showDataScreenUnit showDataUnit">吋</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="showDataImageBox">
                <img class="showDataImage" src="${objs[number].phoneImage}" alt="">
            </div>
        </div>
    </div>
    <div class="showDataWindowButtons">
        <button class="showDataWindowDelete">
            刪除
        </button>
        <button class="showDataWindowRevise">
            修改
        </button>
        <button class="showDataWindowConfirm">
            確定
        </button>
    </div>
</div>
    `
    var showDataWindowConfirm=document.getElementsByClassName("showDataWindowConfirm");
    var revise=document.getElementsByClassName("showDataWindowRevise");
    showDataWindowConfirm[0].addEventListener("click",function(){
        
        closeWindow(isResult);
    });
    revise[0].addEventListener("click",function(){
        reviseItem(number,isResult);
    });
    var deleteItem=document.getElementsByClassName("showDataWindowDelete");
    deleteItem[0].addEventListener("click",function(){
        deleteItemFunction(number,isResult);
    });
}
function showSearchWindow(){
    floatWindowOuterBox[0].innerHTML=`
    <div class="searchItemWindow">
    <div class="searchItemHeaderTitle">
        搜尋資料
    </div>
    <div class="searchItemWindowInnerBox">
        <div class="searchItemBrandOuterBox searchItemOuterBox">
            <div class="searchItemBrandTitle searchItemTitle">請輸入搜尋內容：</div>
            <input type="text" class="searchItemBrand searchItemInputBox" id="test">
        </div>
        
    </div>
    <div class="searchItemWindowButtons">
        <button class="searchItemWindowCancel">
            取消
        </button>
        <button class="searchItemWindowConfirm">
            確定
        </button>
    </div>
</div>
    `
    var cancel=document.getElementsByClassName("searchItemWindowCancel");
    var confirm=document.getElementsByClassName("searchItemWindowConfirm");
    for(i=0;i<dataAmount;i++){
        a=objs[i].brand;
        b=objs[i].phoneName;
        c=objs[i].phoneImage;
        d=objs[i].chipBrand;
        e=objs[i].chipName;
        f=objs[i].ram;
        g=objs[i].rom;
        h=objs[i].screen;
        x=objs[i].isEmpty;
        y=objs[i].number;
        backup[i].brand=a;
        backup[i].phoneName=b;
        backup[i].phoneImage=c;
        backup[i].chipBrand=d;
        backup[i].chipName=e;
        backup[i].ram=f;
        backup[i].rom=g;
        backup[i].screen=h;
        backup[i].isEmpty=x;
        backup[i].number=y;
    }
    closeFunction[0].addEventListener("click",function(){
        floatWindowOuterBox[0].innerHTML=""; 
        console.log("show common result");
        for(i=0;i<dataAmount;i++){
            a=backup[i].brand;
            b=backup[i].phoneName;
            c=backup[i].phoneImage;
            d=backup[i].chipBrand;
            e=backup[i].chipName;
            f=backup[i].ram;
            g=backup[i].rom;
            h=backup[i].screen;
            x=backup[i].isEmpty;
            y=backup[i].number;
            objs[i].brand=a;
            objs[i].phoneName=b;
            objs[i].phoneImage=c;
            objs[i].chipBrand=d;
            objs[i].chipName=e;
            objs[i].ram=f;
            objs[i].rom=g;
            objs[i].screen=h;
            objs[i].isEmpty=x;
            objs[i].number=y;
        }
        listPhones(page);
        console.log("here");
        //addItemButton[0].addEventListener("click",showAddItemWindow);
    })
    cancel[0].addEventListener("click",function(){
        floatWindowOuterBox[0].innerHTML="";
        listPhones(page);
    })
    confirm[0].addEventListener("click",function(){
        var text=document.getElementById("test").value;
        var a,b,c,d,e,f,g,h,x,y;
        for(i=0;i<dataAmount;i++){
            a=objs[i].brand;
            b=objs[i].phoneName;
            c=objs[i].phoneImage;
            d=objs[i].chipBrand;
            e=objs[i].chipName;
            f=objs[i].ram;
            g=objs[i].rom;
            h=objs[i].screen;
            x=objs[i].isEmpty;
            y=objs[i].number;
            backup[i].brand=a;
            backup[i].phoneName=b;
            backup[i].phoneImage=c;
            backup[i].chipBrand=d;
            backup[i].chipName=e;
            backup[i].ram=f;
            backup[i].rom=g;
            backup[i].screen=h;
            backup[i].isEmpty=x;
            backup[i].number=y;
        }
        /*for(i=0;i<7;i++){
            console.log(backup[i]);
        }
        
        console.log("divide");
        for(i=0;i<7;i++){
            console.log(objs[i]);
        }
        console.log("end");*/
        for(i=0;i<dataAmount;i++){
            objs[i].isEmpty=1;
        }
        for(i=0;i<dataAmount;i++){
            if(objs[i].brand==text){
                objs[i].isEmpty=0;
            }else if(objs[i].phoneName==text){
                objs[i].isEmpty=0;
            }
        }
        page=0;
        listPhones(page);
        console.log("show search result");
        floatWindowOuterBox[0].innerHTML="";
    })
    
}
function reviseItem(number,isResult){
    closeWindow(isResult);
    floatWindowOuterBox[0].innerHTML=`
    <div class="addItemWindow">
    <div class="addItemTitle">
    修改手機
    </div>
    <div class="addItemWindowInnerBox">
        <div class="addItemBrandOuterBox addItemOuterBox">
            <div class="addItemBrandTitle addItemTitle">廠牌：&nbsp;&nbsp;&nbsp;&nbsp; </div>
            <input type="text" class="addItemBrand addItemInputBox" value="${objs[number].brand}">
        </div>
        <div class="addItemNameOuterBox addItemOuterBox">
            <div class="addItemNameTitle addItemTitle">名稱：&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <input type="text" class="addItemName addItemInputBox" value="${objs[number].phoneName}">
        </div>
        <div class="addItemImageOuterBox addItemOuterBox">
            <div class="addItemImageTitle addItemTitle">手機相片網址：</div>
            <textarea class="addItemImage addItemInputBox"name="" id="" cols="30" rows="3" value="${objs[number].phoneImage}"></textarea>
        </div>
        <div class="addItemChipBrandOuterBox addItemOuterBox">
            <div class="addItemChipBrandTitle addItemTitle">處理器品牌:&nbsp;</div>
            <input type="text" class="addItemChipBrand addItemInputBox" value="${objs[number].chipBrand}">
        </div>
        
        <div class="addItemChipNameOuterBox addItemOuterBox">
            <div class="addItemChipNameTitle addItemTitle">處理器名稱:&nbsp;</div>
            <input type="text" class="addItemChipName addItemInputBox" value="${objs[number].chipName}">
        </div>
        <div class="addItemRamOuterBox addItemOuterBox">
            <div class="addItemRamTitle addItemTitle">記憶體大小:</div>
            <div class="addItemRamUnitBox addItemUnitBox">
                <input type="text" class="addItemRam addItemInputBox" value="${objs[number].ram}">
                <div class="addItemUnitOuterBox">
                    <div class="addItemRamUnit addItemUnit">GB</div>
                </div>
            </div>
        </div>
        <div class="addItemRomOuterBox addItemOuterBox">
            <div class="addItemRomTitle addItemTitle">儲存空間大小:</div>
            <div class="addItemRomUnitBox addItemUnitBox">
                <input type="text" class="addItemRom addItemInputBox" value="${objs[number].rom}">
                <div class="addItemUnitOuterBox">
                    <div class="addItemRomUnit addItemUnit">GB</div>
                </div>
            </div>
        </div>
        <div class="addItemScreenOuterBox addItemOuterBox">
            <div class="addItemScreenTitle addItemTitle">螢幕大小</div>
            <div class="addItemScreenUnitBox addItemUnitBox">
                <input type="text" class="addItemScreen addItemInputBox" value="${objs[number].screen}">
                <div class="addItemUnitOuterBox">
                    <div class="addItemScreenUnit addItemUnit">吋</div>
                </div>
            </div>
        </div>
    </div>
    <div class="addItemWindowButtons">
        <button class="reviseItemWindowCancel">
            取消
        </button>
        <button class="reviseItemWindowConfirm">
            完成
        </button>
    </div>
</div>
        
        
    `
    var cancel=document.getElementsByClassName("reviseItemWindowCancel");
    var confirm=document.getElementsByClassName("reviseItemWindowConfirm");
    cancel[0].addEventListener("click",function(){
        closeWindow(isResult);
        showItem(number);
    });
    confirm[0].addEventListener("click",function(){
        var addItemBrand=document.getElementsByClassName("addItemBrand");
        var addItemName=document.getElementsByClassName("addItemName");
        var addItemImage=document.getElementsByClassName("addItemImage");
        var addItemChipBrand=document.getElementsByClassName("addItemChipBrand");
        var addItemChipName=document.getElementsByClassName("addItemChipName");
        var addItemRam=document.getElementsByClassName("addItemRam");
        var addItemRom=document.getElementsByClassName("addItemRom");
        var addItemScreen=document.getElementsByClassName("addItemScreen");
        if(objs[number].brand==addItemBrand[0].value&&objs[number].phoneName==addItemName[0].value
            &&objs[number].phoneImage==addItemImage[0].value&&objs[number].chipBrand==addItemChipBrand[0].value
            &&objs[number].chipName==addItemChipName[0].value&&objs[number].ram==addItemRam[0].value
            &&objs[number].rom==addItemRom[0].value&&objs[number].screen==addItemScreen[0].value){
                return;
            }
        if(addItemImage[0].value!=""){
            objs[number].phoneImage=addItemImage[0].value;
        }
        objs[number].brand=addItemBrand[0].value;
        objs[number].phoneName=addItemName[0].value;
        objs[number].chipBrand=addItemChipBrand[0].value;
        objs[number].chipName=addItemChipName[0].value;
        objs[number].ram=addItemRam[0].value;
        objs[number].rom=addItemRom[0].value;
        objs[number].screen=addItemScreen[0].value;
        if(objs[number].brand==""&&objs[number].phoneName==""){
            alert("廠牌和名稱請至少輸入一項");
            closeWindow(isResult);
            reviseItem(number,isResult);
        }else{
            /*objs[number].isEmpty=0;
            var recordAmount=0;
            for(i=0;i<100;i++){
                if(objs[i].isEmpty==0){
                    recordAmount++;
                }
            }
            maxPage=recordAmount/6;*/
            alert("修改成功");
            floatWindowOuterBox[0].innerHTML="";
            // showSuccessfullyReviseItemWindow(number,isResult);
        }
    });
}
function countItemsAmount(){
    var record=0;
    for(i=0;i<dataAmount;i++){
        if(objs[i].isEmpty==0){
            record++;
        }
    }
    return (record-1)/6;
}
function countItem(page,number){
    var record=page*6;
    var recordI=0;
    for(i=0;i<dataAmount;i++){
        if(objs[i].isEmpty==0){
            recordI++;
        }
        if(recordI==record+number+1){
            return i;
        }
    }
        
        if(recordI==0){
            return -1;
        }
}
listPhones(page);
//closeSearchResults.style.visibility="hidden";
addItemButton[0].addEventListener("click",showAddItemWindow);
searchButton[0].addEventListener("click",showSearchWindow);
right[0].addEventListener("click",function(){
    if(page<maxPage){
            page++;
            listPhones(page);
    }
})
left[0].addEventListener("click",function(){
    if(page!=0){
            page--;
            listPhones(page);
    }
})
/*searchButton[0].addEventListener("click",function(){
    showSearchWindow();
})*/
