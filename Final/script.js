const bars=document.querySelector('.rwd_header box2 i');
const menu1_icon1=document.querySelector('.menu1_icon1');
const menu1_icon2=document.querySelector('.menu1_icon2');
const menu2_icon1=document.querySelector('.menu2_icon1');
const menu2_icon2=document.querySelector('.menu2_icon2');
const menu3_icon1=document.querySelector('.menu3_icon1');
const menu3_icon2=document.querySelector('.menu3_icon2');
const rwd_header_icon1=document.querySelector('.rwd_header_icon1');
const rwd_header_icon2=document.querySelector('.rwd_header_icon2');
const btn_1=document.querySelector('.btn_1');
const btn_2=document.querySelector('.btn_2');
const btn_3=document.querySelector('.btn_3');
const rwd_menu=document.querySelector('.rwd_menu');
const detail1=document.querySelector('.detail1');
const detail2=document.querySelector('.detail2');
const detail3=document.querySelector('.detail3');
const menu2=document.querySelector('.menu2');
const menu3=document.querySelector('.menu3');
const menu4=document.querySelector('.menu4');
const info_btn_1=document.querySelector('.info_btn_1');
const info_btn_2=document.querySelector('.info_btn_2');
const info_btn_3=document.querySelector('.info_btn_3');
const info_btn_4=document.querySelector('.info_btn_4');
const info_detail1=document.querySelector('.info_detail1');
const info_detail2=document.querySelector('.info_detail2');
const info_detail3=document.querySelector('.info_detail3');
const info_detail4=document.querySelector('.info_detail4');
const info1_icon1=document.querySelector('.info1_icon1');
const info1_icon2=document.querySelector('.info1_icon2');
const info2_icon1=document.querySelector('.info2_icon1');
const info2_icon2=document.querySelector('.info2_icon2');
const info3_icon1=document.querySelector('.info3_icon1');
const info3_icon2=document.querySelector('.info3_icon2');
const info4_icon1=document.querySelector('.info4_icon1');
const info4_icon2=document.querySelector('.info4_icon2');
const search_icon=document.querySelector('.fixedBtn');
const p1=document.querySelector('.fixedBtn');
const detail_item1=document.querySelector('.detail_item1');

var indicator1=1;
var indicator2=1;
var indicator3=1;
var detail_flag1=1;
var detail_flag2=1;
var detail_flag3=1;
var info_flag1=1;
var info_flag2=1
var info_flag3=1;
var info_flag4=1
p1.addEventListener('mouseenter',function (){
    detail_item1.classList.toggle('show');
 })
 p1.addEventListener('mouseleave',function (){
    detail_item1.classList.toggle('show');
 })
 /*function f1(){
    detail_item1.classList.toggle('show');
 }*/
function bars_onclick() {
    rwd_menu.classList.toggle('show');
    rwd_header_icon1.classList.toggle('show');
    rwd_header_icon2.classList.toggle('show');
}
/*function change_icon() {
    menu_icon.innerHTML=`<i class="fas fa-times"></i>`;
}*/
function menu1_onclick1() {
    if (!(menu2.classList.contains('show'))) {
        menu2.classList.toggle('show');
     }
     indicator1=indicator1+1;
}
function menu1_onclick2() {
    if (indicator1==2){
        indicator1=indicator1-1;
        setTimeout("close1()",50);
    }
}
function close1(){
    if (indicator1==1){
            if (menu2.classList.contains('show')){
            menu2.classList.toggle('show');
        }
    }
    
}
function menu2_onclick1() {
    if (!(menu3.classList.contains('show'))) {
        menu3.classList.toggle('show');
     }
     indicator2=indicator2+1;
}
function menu2_onclick2() {
    if (indicator2==2){
        indicator2=indicator2-1;
    setTimeout("close2()",50);
    }
}
function close2(){
    if (indicator2==1){
            if (menu3.classList.contains('show')){
            menu3.classList.toggle('show');
        }
    }
    
}
function menu3_onclick1() {
    if (!(menu4.classList.contains('show'))) {
        menu4.classList.toggle('show');
     }
     indicator3=indicator3+1;
}
function menu3_onclick2() {
    indicator3=indicator3-1;
    setTimeout("close3()",50);
}
function close3(){
    if (indicator3==1){
            if (menu4.classList.contains('show')){
            menu4.classList.toggle('show');
        }
    }
    
}
function toggle_detail1() {
    if(detail_flag1==2){
        close_detail1();
    }else{
        show_detail1();
    }
    close_detail2();
    close_detail3();
}
function toggle_detail2() {
    if(detail_flag2==2){
        close_detail2();
    }else{
        show_detail2();
    }
    close_detail1();
    close_detail3();
}
function toggle_detail3() {
    if(detail_flag3==2){
        close_detail3();
    }else{
        show_detail3();
    }
    close_detail1();
    close_detail2();
}
function show_detail1(){
    if (!(detail1.classList.contains('show'))){
        detail1.classList.toggle('show');
    }
    if (!(menu1_icon1.classList.contains('show'))){
        menu1_icon1.classList.toggle('show');
    }
    if (!(menu1_icon2.classList.contains('show'))){
        menu1_icon2.classList.toggle('show');
    }
    if (!(btn_1.classList.contains('show'))){
        btn_1.classList.toggle('show');
    }
    detail_flag1=2;
}
function close_detail1(){
    if (detail1.classList.contains('show')){
        detail1.classList.toggle('show');
    }
    if (menu1_icon1.classList.contains('show')){
        menu1_icon1.classList.toggle('show');
    }
    if (menu1_icon2.classList.contains('show')){
        menu1_icon2.classList.toggle('show');
    }
    if (btn_1.classList.contains('show')){
        btn_1.classList.toggle('show');
    }
    detail_flag1=1;
}
function show_detail2(){
    if (!(detail2.classList.contains('show'))){
        detail2.classList.toggle('show');
    }
    if (!(menu2_icon1.classList.contains('show'))){
        menu2_icon1.classList.toggle('show');
    }
    if (!(menu2_icon2.classList.contains('show'))){
        menu2_icon2.classList.toggle('show');
    }
    if (!(btn_2.classList.contains('show'))){
        btn_2.classList.toggle('show');
    }
    detail_flag2=2;
}
function close_detail2(){
    if (detail2.classList.contains('show')){
        detail2.classList.toggle('show');
    }
    if (menu2_icon1.classList.contains('show')){
        menu2_icon1.classList.toggle('show');
    }
    if (menu2_icon2.classList.contains('show')){
        menu2_icon2.classList.toggle('show');
    }
    if (btn_2.classList.contains('show')){
        btn_2.classList.toggle('show');
    }
    detail_flag2=1;
}
function show_detail3(){
    if (!(detail3.classList.contains('show'))){
        detail3.classList.toggle('show');
    }
    if (!(menu3_icon1.classList.contains('show'))){
        menu3_icon1.classList.toggle('show');
    }
    if (!(menu3_icon2.classList.contains('show'))){
        menu3_icon2.classList.toggle('show');
    }
    if (!(btn_3.classList.contains('show'))){
        btn_3.classList.toggle('show');
    }
    detail_flag3=2;
}
function close_detail3(){
    if (detail3.classList.contains('show')){
        detail3.classList.toggle('show');
    }
    if (menu3_icon1.classList.contains('show')){
        menu3_icon1.classList.toggle('show');
    }
    if (menu3_icon2.classList.contains('show')){
        menu3_icon2.classList.toggle('show');
    }
    if (btn_3.classList.contains('show')){
        btn_3.classList.toggle('show');
    }
    detail_flag3=1;
}
function show_detail4(){
    if (!(detail4.classList.contains('show'))){
        detail4.classList.toggle('show');
    }
    if (!(menu4_icon1.classList.contains('show'))){
        menu4_icon1.classList.toggle('show');
    }
    if (!(menu4_icon2.classList.contains('show'))){
        menu4_icon2.classList.toggle('show');
    }
    if (!(btn_4.classList.contains('show'))){
        btn_4.classList.toggle('show');
    }
}
function close_detail4(){
    if (detail4.classList.contains('show')){
        detail4.classList.toggle('show');
    }
    if (menu4_icon1.classList.contains('show')){
        menu4_icon1.classList.toggle('show');
    }
    if (menu4_icon2.classList.contains('show')){
        menu4_icon2.classList.toggle('show');
    }
    if (btn_4.classList.contains('show')){
        btn_4.classList.toggle('show');
    }
}
function toggle_info_detail1() {
    if(info_flag1==2){
        close_info_detail1();
    }else{
        show_info_detail1();
    }
    close_info_detail2();
    close_info_detail3();
    close_info_detail4();
}
function toggle_info_detail2() {
    if(info_flag2==2){
        close_info_detail2();
    }else{
        show_info_detail2();
    }
    close_info_detail1();
    close_info_detail3();
    close_info_detail4();
}
function toggle_info_detail3() {
    if(info_flag3==2){
        close_info_detail3();
    }else{
        show_info_detail3();
    }
    close_info_detail1();
    close_info_detail2();
    close_info_detail4();
}
function toggle_info_detail4() {
    if(info_flag4==2){
        close_info_detail4();
    }else{
        show_info_detail4();
    }
    close_info_detail1();
    close_info_detail2();
    close_info_detail3();
}
function close_info_detail1(){
    if (info_detail1.classList.contains('show')){
        info_detail1.classList.toggle('show');
    }
    if (info1_icon1.classList.contains('show')){
        info1_icon1.classList.toggle('show');
    }
    if (info1_icon2.classList.contains('show')){
        info1_icon2.classList.toggle('show');
    }
    if (info_btn_1.classList.contains('show')){
        info_btn_1.classList.toggle('show');
    }
    info_flag1=1;
}
function show_info_detail1(){
    if (!(info_detail1.classList.contains('show'))){
        info_detail1.classList.toggle('show');
    }
    if (!(info1_icon1.classList.contains('show'))){
        info1_icon1.classList.toggle('show');
    }
    if (!(info1_icon2.classList.contains('show'))){
        info1_icon2.classList.toggle('show');
    }
    if (!(info_btn_1.classList.contains('show'))){
        info_btn_1.classList.toggle('show');
    }
    info_flag1=2;
}
function close_info_detail2(){
    if (info_detail2.classList.contains('show')){
        info_detail2.classList.toggle('show');
    }
    if (info2_icon1.classList.contains('show')){
        info2_icon1.classList.toggle('show');
    }
    if (info2_icon2.classList.contains('show')){
        info2_icon2.classList.toggle('show');
    }
    if (info_btn_2.classList.contains('show')){
        info_btn_2.classList.toggle('show');
    }
    info_flag2=1;
}
function show_info_detail2(){
    if (!(info_detail2.classList.contains('show'))){
        info_detail2.classList.toggle('show');
    }
    if (!(info2_icon1.classList.contains('show'))){
        info2_icon1.classList.toggle('show');
    }
    if (!(info2_icon2.classList.contains('show'))){
        info2_icon2.classList.toggle('show');
    }
    if (!(info_btn_2.classList.contains('show'))){
        info_btn_2.classList.toggle('show');
    }
    info_flag2=2;
}
function close_info_detail3(){
    if (info_detail3.classList.contains('show')){
        info_detail3.classList.toggle('show');
    }
    if (info3_icon1.classList.contains('show')){
        info3_icon1.classList.toggle('show');
    }
    if (info3_icon2.classList.contains('show')){
        info3_icon2.classList.toggle('show');
    }
    if (info_btn_3.classList.contains('show')){
        info_btn_3.classList.toggle('show');
    }
    info_flag3=1;
}
function show_info_detail3(){
    if (!(info_detail3.classList.contains('show'))){
        info_detail3.classList.toggle('show');
    }
    if (!(info3_icon1.classList.contains('show'))){
        info3_icon1.classList.toggle('show');
    }
    if (!(info3_icon2.classList.contains('show'))){
        info3_icon2.classList.toggle('show');
    }
    if (!(info_btn_3.classList.contains('show'))){
        info_btn_3.classList.toggle('show');
    }
    info_flag3=2;
}
function close_info_detail4(){
    if (info_detail4.classList.contains('show')){
        info_detail4.classList.toggle('show');
    }
    if (info4_icon1.classList.contains('show')){
        info4_icon1.classList.toggle('show');
    }
    if (info4_icon2.classList.contains('show')){
        info4_icon2.classList.toggle('show');
    }
    if (info_btn_4.classList.contains('show')){
        info_btn_4.classList.toggle('show');
    }
    info_flag4=1;
}
function show_info_detail4(){
    if (!(info_detail4.classList.contains('show'))){
        info_detail4.classList.toggle('show');
    }
    if (!(info4_icon1.classList.contains('show'))){
        info4_icon1.classList.toggle('show');
    }
    if (!(info4_icon2.classList.contains('show'))){
        info4_icon2.classList.toggle('show');
    }
    if (!(info_btn_4.classList.contains('show'))){
        info_btn_4.classList.toggle('show');
    }
    info_flag4=2;
}