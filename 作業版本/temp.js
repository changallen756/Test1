
            console.log("confirm");
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
            console.log(objs[i].phoneImage);
            floatWindowOuterBox[0].innerHTML=`
            <div class="successfullyAddItemWindow">
            <div class="successfullyAddItemTitle">
                新增成功
            </div>
            <div class="successfullyAddItemWindowInnerBox">
                <div class="successfullyAddItemTextImageBox">
                    <div class="successfullyAddItemTextBox">
                        <div class="successfullyAddItemBrandOuterBox successfullyAddItemOuterBox">
                            <div class="successfullyAddItemBrandTitle successfullyAddItemTitle">廠牌：&nbsp;&nbsp;&nbsp;&nbsp; </div>
                            <div class="successfullyAddItemDataOuterBox"> 
                                <div class="successfullyAddItemBrand successfullyAddItemData">${objs[i].brand}</div>
                            </div>
                        </div>
                        <div class="successfullyAddItemNameOuterBox successfullyAddItemOuterBox">
                            <div class="successfullyAddItemNameTitle successfullyAddItemTitle">名稱：&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <div class="successfullyAddItemDataOuterBox">
                                <div class="successfullyAddItemName successfullyAddItemData">${objs[i].phoneName}</div>
                            </div>
                        </div>
                        <div class="successfullyAddItemChipBrandOuterBox successfullyAddItemOuterBox">
                            <div class="successfullyAddItemChipBrandTitle successfullyAddItemTitle">處理器品牌:&nbsp;</div>
                            <div class="successfullyAddItemDataOuterBox">   
                                <div class="successfullyAddItemChipBrand successfullyAddItemData">${objs[i].chipBrand}</div>
                            </div>
                        </div>
                        <div class="successfullyAddItemChipNameOuterBox successfullyAddItemOuterBox">
                            <div class="successfullyAddItemChipNameTitle successfullyAddItemTitle">處理器名稱:&nbsp;</div>
                            <div class="successfullyAddItemDataOuterBox">
                                <div class="successfullyAddItemChipName successfullyAddItemData">${objs[i].chipName}</div>
                            </div>
                        </div>
                        <div class="successfullyAddItemRamOuterBox successfullyAddItemOuterBox">
                            <div class="successfullyAddItemRamTitle successfullyAddItemTitle">記憶體大小:</div>
                            <div class="successfullyAddItemRamUnitBox successfullyAddItemUnitBox">
                                <div class="successfullyAddItemDataOuterBox">
                                    <div class="successfullyAddItemRam successfullyAddItemUnitData">${objs[i].ram}</div>
                                </div>
                                <div class="successfullyAddItemUnitOuterBox">
                                    <div class="successfullyAddItemRamUnit successfullyAddItemUnit">GB</div>
                                </div>
                            </div>
                        </div>
                        <div class="successfullyAddItemRomOuterBox successfullyAddItemOuterBox">
                            <div class="successfullyAddItemRomTitle successfullyAddItemTitle">儲存空間大小:</div>
                            <div class="successfullyAddItemRomUnitBox successfullyAddItemUnitBox">
                                <div class="successfullyAddItemDataOuterBox">
                                    <div class="successfullyAddItemRom successfullyAddItemUnitData">${objs[i].rom}</div>
                                </div>
                                <div class="successfullyAddItemUnitOuterBox">
                                    <div class="successfullyAddItemRomUnit successfullyAddItemUnit">GB</div>
                                </div>
                            </div>
                        </div>
                        <div class="successfullyAddItemScreenOuterBox successfullyAddItemOuterBox">
                            <div class="successfullyAddItemScreenTitle successfullyAddItemTitle">螢幕大小</div>
                            <div class="successfullyAddItemScreenUnitBox successfullyAddItemUnitBox">
                                <div class="successfullyAddItemDataOuterBox">
                                    <div class="successfullyAddItemScreen successfullyAddItemUnitData">${objs[i].screen}</div>
                                </div>
                                <div class="successfullyAddItemUnitOuterBox">
                                    <div class="successfullyAddItemScreenUnit successfullyAddItemUnit">吋</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="successfullyAddItemImageBox">
                        <img class="successfullyAddItemImage" src="${objs[i].phoneImage}" alt="">
                    </div>
                </div>
            </div>
            <div class="successfullyAddItemWindowButtons">
                <button class="successfullyAddItemContinue">
                    繼續新增
                </button>
                <button class="successfullyAddItemEnd">
                    結束新增
                </button>
                <button class="successfullyAddItemDelete">
                    刪除
                </button>
                <button class="successfullyAddItemRevise">
                    修改
                </button>
            </div>
        </div>
            `;
            var successfullyAddItemContinue=document.getElementsByClassName("successfullyAddItemContinue");
            successfullyAddItemContinue.addEventListener("click");
            
        