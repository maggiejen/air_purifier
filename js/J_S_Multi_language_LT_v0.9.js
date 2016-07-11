//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 0.9 LT
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案
//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片、甚至文字
//主要功能3 : 使用DOM方法，更換下拉顯示介面, 須掛入JSON資源文件檔
//主要功能4 : 使用DOM方法，依照語系更改文件內的文字

// 其他功能a (HTML) : 自動偵測瀏覽器語言，更改語言預設值。




//=====程式開始======






function chg_lang(lang_index){


			//更改標題文字
      changeWebTitle(lang_index);

      //更改BODY 語系標籤
      changeCSSTag_Multi_Lang(lang_index);
      //更改Navbar文件
      changeNavBarUIWording(lang_index);


      //讀外部JSON檔案
      var xmlhttp = new XMLHttpRequest();
      var url = "mlang.txt";

      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          console.log(myArr);
          changeAllNavBarUIWording(myArr,lang_index);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();





		}

//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
function changeWebTitle(lang_index){
      //變更多語系網頁Title
      document.getElementsByTagName("title")[0].innerHTML = Multi_Lang_Title[lang_index];
      return;


}

//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片
function changeCSSTag_Multi_Lang(lang_index){
    // jQuery 語法:
    //  $("body").removeClass("tw cn en").addClass($(this).data("資料名"));

    //純DOM語法
    document.getElementsByTagName("body")[0].className = "";
    document.getElementsByTagName("body")[0].className = Multi_Lang_Tag[lang_index];//Multi_Lang_Tag[lang_index];
    return;
}

//主要功能3 : 使用DOM方法，更換下拉&Navbar顯示介面
function changeNavBarUIWording(lang_index){

  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';

  return;
}

function changeAllNavBarUIWording(arr,lang_index){
/*
  document.getElementById('nav_link1_wording').innerHTML = arr[lang_index].NavLink1;
  document.getElementById('nav_link2_wording').innerHTML = arr[lang_index].NavLink2;
  document.getElementById('nav_link3_wording').innerHTML = arr[lang_index].NavLink3;
  document.getElementById('nav_link4_wording').innerHTML = arr[lang_index].NavLink4;
  document.getElementById('nav_link5_wording').innerHTML = arr[lang_index].NavLink5;*/

  document.getElementById('lang_title').innerHTML = arr[lang_index].lang_title;
  document.getElementById('lang_navlink1').innerHTML = arr[lang_index].lang_navlink1;
  document.getElementById('lang_navlink2').innerHTML = arr[lang_index].lang_navlink2;
  document.getElementById('lang_navlink3').innerHTML = arr[lang_index].lang_navlink3;
  document.getElementById('lang_navlink4').innerHTML = arr[lang_index].lang_navlink4;
  document.getElementById('lang_preordertext1').innerHTML = arr[lang_index].lang_preordertext1;
  document.getElementById('lang_preordertext2').innerHTML = arr[lang_index].lang_preordertext2;
  document.getElementById('lang_howitworktext1').innerHTML = arr[lang_index].lang_howitworktext1;
  document.getElementById('lang_howitworktext2').innerHTML = arr[lang_index].lang_howitworktext2;
  document.getElementById('lang_howitworktext3').innerHTML = arr[lang_index].lang_howitworktext3;
  document.getElementById('lang_howitworktext4').innerHTML = arr[lang_index].lang_howitworktext4;
  document.getElementById('lang_howitworktext5').innerHTML = arr[lang_index].lang_howitworktext5;
  document.getElementById('lang_howitworktext6').innerHTML = arr[lang_index].lang_howitworktext6;
  document.getElementById('lang_howitworktext7').innerHTML = arr[lang_index].lang_howitworktext7;
  document.getElementById('lang_howitworktext8').innerHTML = arr[lang_index].lang_howitworktext8;
  document.getElementById('lang_howitworktext9').innerHTML = arr[lang_index].lang_howitworktext9;
  document.getElementById('lang_howitworktext10').innerHTML = arr[lang_index].lang_howitworktext10;
  document.getElementById('lang_howitworktext11').innerHTML = arr[lang_index].lang_howitworktext11;
  document.getElementById('lang_howitworktext12').innerHTML = arr[lang_index].lang_howitworktext12;
  document.getElementById('lang_downloadtext1').innerHTML = arr[lang_index].lang_downloadtext1;
  document.getElementById('lang_downloadtext2').innerHTML = arr[lang_index].lang_downloadtext2;
  document.getElementById('lang_downloadtext3').innerHTML = arr[lang_index].lang_downloadtext3
  document.getElementById('lang_downloadtext4').innerHTML = arr[lang_index].lang_downloadtext4;
  document.getElementById('lang_downloadtext5').innerHTML = arr[lang_index].lang_downloadtext5;
  document.getElementById('lang_downloadtext6').innerHTML = arr[lang_index].lang_downloadtext6;
  document.getElementById('lang_downloadtext7').innerHTML = arr[lang_index].lang_downloadtext7;
  document.getElementById('lang_downloadtext8').innerHTML = arr[lang_index].lang_downloadtext8;
  document.getElementById('lang_downloadtext9').innerHTML = arr[lang_index].lang_downloadtext9;
  document.getElementById('lang_downloadtext10').innerHTML = arr[lang_index].lang_downloadtext10;
  document.getElementById('lang_downloadtext11').innerHTML = arr[lang_index].lang_downloadtext11;
  document.getElementById('lang_spectext1').innerHTML = arr[lang_index].lang_spectext1;
  document.getElementById('lang_tabletext1').innerHTML = arr[lang_index].lang_tabletext1;
  document.getElementById('lang_tabletext2').innerHTML = arr[lang_index].lang_tabletext2;
  document.getElementById('lang_tabletext3').innerHTML = arr[lang_index].lang_tabletext3;
  document.getElementById('lang_tabletext4').innerHTML = arr[lang_index].lang_tabletext4;
  document.getElementById('lang_tabletext5').innerHTML = arr[lang_index].lang_tabletext5;
  document.getElementById('lang_tabletext6').innerHTML = arr[lang_index].lang_tabletext6;
  document.getElementById('lang_tabletext7').innerHTML = arr[lang_index].lang_tabletext7;
  document.getElementById('lang_tabletext8').innerHTML = arr[lang_index].lang_tabletext8;
  document.getElementById('lang_tabletext9').innerHTML = arr[lang_index].lang_tabletext9;
  document.getElementById('lang_tabletext10').innerHTML = arr[lang_index].lang_tabletext10;
  document.getElementById('lang_tabletext11').innerHTML = arr[lang_index].lang_tabletext11;
  document.getElementById('lang_tabletext12').innerHTML = arr[lang_index].lang_tabletext12;
  document.getElementById('lang_tabletext13').innerHTML = arr[lang_index].lang_tabletext13;
  document.getElementById('lang_tabletext14').innerHTML = arr[lang_index].lang_tabletext14;
  document.getElementById('lang_tabletext15').innerHTML = arr[lang_index].lang_tabletext15;
  document.getElementById('lang_tabletext16').innerHTML = arr[lang_index].lang_tabletext16;
  document.getElementById('lang_tabletext17').innerHTML = arr[lang_index].lang_tabletext17;
  document.getElementById('lang_tabletext18').innerHTML = arr[lang_index].lang_tabletext18;
  document.getElementById('lang_tabletext19').innerHTML = arr[lang_index].lang_tabletext19;
  document.getElementById('lang_tabletext20').innerHTML = arr[lang_index].lang_tabletext20;
  document.getElementById('lang_tabletext21').innerHTML = arr[lang_index].lang_tabletext21;
  document.getElementById('lang_tabletext22').innerHTML = arr[lang_index].lang_tabletext22;
  document.getElementById('lang_tabletext23').innerHTML = arr[lang_index].lang_tabletext23;
  document.getElementById('lang_tabletext24').innerHTML = arr[lang_index].lang_tabletext24;
  document.getElementById('lang_footer_shortcuts').innerHTML = arr[lang_index].lang_footer_shortcuts;
  document.getElementById('lang_footer_EQLs').innerHTML = arr[lang_index].lang_footer_EQLs;
  document.getElementById('lang_footer_Homie').innerHTML = arr[lang_index].lang_footer_Homie;
  document.getElementById('lang_footer_ripple').innerHTML = arr[lang_index].lang_footer_ripple;
  document.getElementById('lang_footer_essence').innerHTML = arr[lang_index].lang_footer_essence;
  document.getElementById('lang_footer_pcstick').innerHTML = arr[lang_index].lang_footer_pcstick;
  document.getElementById('lang_footer_service').innerHTML = arr[lang_index].lang_footer_service;
  document.getElementById('lang_footer_shop').innerHTML = arr[lang_index].lang_footer_shop;
  document.getElementById('lang_footer_FAQ').innerHTML = arr[lang_index].lang_footer_FAQ;
  document.getElementById('lang_footer_contactus').innerHTML = arr[lang_index].lang_footer_contactus;
  document.getElementById('lang_footer_seenenough').innerHTML = arr[lang_index].lang_footer_seenenough;
  document.getElementById('lang_footer_buy').innerHTML = arr[lang_index].lang_footer_buy;


  return;
}





function detectUserLang(){

    var tempLang = window.navigator.userLanguage || window.navigator.language ;
    var currentBrowserLang = tempLang.toLowerCase();
    console.log(currentBrowserLang);

    switch (currentBrowserLang) {
      case "zh-tw":
            chg_lang(0);
        break;
      case "zh-cn":
            chg_lang(0);
        break;
      case "zh-hk":
            chg_lang(0);
        break;
      case "ja":
            chg_lang(2);
        break;

      default:
            chg_lang(1);
        break;
    }
}




//=====文字儲存區======
//多語系body標籤
Multi_Lang_Tag = new Array();
Multi_Lang_Tag[0]="tw";
Multi_Lang_Tag[1]="eng";
Multi_Lang_Tag[2]="jp";

//Multi_Lang_Wording 供介面顯示
Multi_Lang_Wording = new Array();
Multi_Lang_Wording[0]="TW - 繁體中文";
Multi_Lang_Wording[1]="EN - English";
Multi_Lang_Wording[2]="JP - 日本語";


//多語系網頁Title招呼語 (顯示在瀏覽TAB上)
Multi_Lang_Title= new Array();
Multi_Lang_Title[0]="歡迎來到EQL - PC Stick網站";
Multi_Lang_Title[1]="Welcome to EQL - PC Stick";
Multi_Lang_Title[2]="EQLへようこそ - PC Stick";


//=====文字儲存區 END======
