var LM = {
  alert: {},
  code: {},
  info: {},
};
LM.alert.Over = function(settings) {
  var defaultSetting = {
    phone: "",
    src: "",
    title: "提示",
    toggle: function() {
      this.src = this.base + this.phone + "?" + new Date().getTime();
      $(".code-img").attr("src", this.src);
    },
    yes: function() {
      console.log(this.phone + "\n" + $("#img_code").val());
      console.log(1);
    },
    no: function() {
      $(".shade").remove();
    }
  };
  $.extend(defaultSetting, settings);
  window.defaultSetting = defaultSetting;
  defaultSetting.toggle();
  var htmlStr =
    '<div class="shade"><div class="shade-con"><h2 class="title">' +
    defaultSetting.title + "</h2>" + "<h2 class='content'>该活动已下架</h2>" +'<div class="btn">' +
    '<span class="btn-yes" onclick="defaultSetting.yes()">确定</span>' + "</div>"+"</div>" + "</div>";
  $("body").append(htmlStr);
  if($("#shade-style").length === 0 ){
	addCssByStyle(
		".content{margin-top: 2rem;}.mask,.shade{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;background:rgba(0,0,0,.5)}.shade .shade-con{width:15rem;height:10.5rem;border-radius:.25rem;background:#fff;position:fixed;top:50%;left:50%;margin:-5.25rem 0 0 -7.5rem;padding-top:1rem}.shade-con h2{font-size:.9rem;font-weight:400;text-align:center;color:#282828;position:relative}.shade-con h2:first-child{font-size:.8rem;color:#646464}.shade-con h2 span{position:absolute;top:50%;font-size:.55rem;text-align:center;line-height:1.1rem;color:#fff;background-color:#a01f24;border-radius:.11rem;margin-top:-.55rem;margin-left:.75rem;width:2.2rem;height:1.1rem}.shade-con img{width:4rem;margin:.7rem 0;height:2rem;border-color:none}.shade-con p{height:2rem;width:13rem;margin-left:1rem;background-color:#f5f5f5;border-radius:.25rem;margin-top:-.25rem;position:relative}.shade-con p input{padding-left:.75rem;font-size:.9rem;top:50%;margin-top:.36rem;width:100%;left:.45rem;line-height:1rem;border:none;background-color:transparent}.shade-con .btn{position:absolute;bottom:0;width:100%;text-align:center;height:2.45rem;line-height:2.45rem;}.shade-con .btn span{font-size:.9rem;float:left;width:50%;height:100%;color:#646464}.shade-con .btn span.btn-yes{color:#a01f24;float:right;}"
	  ,'shade-style');
  }
}
LM.alert.Wechat = function(t) {
  var t = t || "已收藏";
  $("#alertWechat,#alertLoading").remove();
  clearTimeout(LM.alert.Time);
  var alertWechat =
    '<div id="alertWechat" style=" position:fixed;left:50%;top:45%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%); -moz-transform: translate(-50%,-50%);text-align:center"><span style="background-color:rgba(0,0,0,.6);padding:10px 15px;min-width:100px;color:#fff;border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,.6);display:inline-block;">' +
    t +
    "</span></div>";
  $("body").append(alertWechat);
  LM.alert.Time = setTimeout(function() {
    $("#alertWechat").fadeOut(500);
  }, 1500);
};
LM.code.show = function(settings) {
  var defaultSetting = {
    base: "${base}/photoValidate/captcha/",
    phone: "",
    src: "",
    title: "请输入图片中的内容，不区分大小写",
    toggle: function() {
      this.src = this.base + this.phone + "?" + new Date().getTime();
      $(".code-img").attr("src", this.src);
    },
    yes: function() {
      console.log(this.phone + "\n" + $("#img_code").val());
      console.log(1);
    },
    no: function() {
      $(".shade").remove();
    }
  };
  $.extend(defaultSetting, settings);
  window.defaultSetting = defaultSetting;
  defaultSetting.toggle();
  var htmlStr =
    '<div class="shade"><div class="shade-con"><h2>' +
    defaultSetting.title + "</h2>" + "<h2>" + '<img class="code-img" onclick="defaultSetting.toggle()" src="' +
    defaultSetting.src + '" />' +'<span class="toggle-img" onclick="defaultSetting.toggle()">换一张</span>' +
    "</h2>" +"<p>" +
    '<input type="text" id="img_code" placeholder="请输入4位验证码" />' +"</p>" +'<div class="btn">' +
    '<span class="btn-no" onclick="defaultSetting.no()">取消</span>' +
    '<span class="btn-yes" onclick="defaultSetting.yes()">确定</span>' + "</div>"+"</div>" + "</div>";
  $("body").append(htmlStr);
  if($("#shade-style").length === 0 ){
	addCssByStyle(
		".mask,.shade{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;background:rgba(0,0,0,.5)}.shade .shade-con{width:15rem;height:10.5rem;border-radius:.25rem;background:#fff;position:fixed;top:50%;left:50%;margin:-5.25rem 0 0 -7.5rem;padding-top:1rem}.shade-con h2{font-size:.9rem;font-weight:400;text-align:center;color:#282828;position:relative}.shade-con h2:first-child{font-size:.8rem;color:#646464}.shade-con h2 span{position:absolute;top:50%;font-size:.55rem;text-align:center;line-height:1.1rem;color:#fff;background-color:#a01f24;border-radius:.11rem;margin-top:-.55rem;margin-left:.75rem;width:2.2rem;height:1.1rem}.shade-con img{width:4rem;margin:.7rem 0;height:2rem;border-color:none}.shade-con p{height:2rem;width:13rem;margin-left:1rem;background-color:#f5f5f5;border-radius:.25rem;margin-top:-.25rem;position:relative}.shade-con p input{padding-left:.75rem;font-size:.9rem;top:50%;margin-top:.36rem;width:100%;left:.45rem;line-height:1rem;border:none;background-color:transparent}.shade-con .btn{position:absolute;bottom:0;width:100%;text-align:center;height:2.45rem;line-height:2.45rem;border-top:1px solid #dcdcdc}.shade-con .btn span{font-size:.9rem;float:left;width:50%;height:100%;color:#646464}.shade-con .btn span.btn-yes{color:#a01f24;border-left:1px solid #dcdcdc}"
	  ,'shade-style');
  }
};
LM.info.show = function (settings) {
  var defaultSetting = {
    base: "",
    phone: "",
    src: "",
    title: "请填写信息",
    toggle: function () {
      this.src = this.base + this.phone + "?" + new Date().getTime();
      $(".code-img").attr("src", this.src);
    },
    yes: function () {
      console.log(this.phone + "\n" + $("#img_code").val());
      console.log(1);
      var name = $.trim($('#name').val());
      var phone = $.trim($('#phone').val());
      var picker = $.trim($('#city-picker').val());
      var addr = $.trim($('#addr').val());
      if (!isName(name)) {
        tips('请输入正确的姓名');
        return false;
      } else if (!isMobile(phone)) {
        tips('请输入正确的手机号码');
        return false;
      } else if (picker === '') {
        tips('请选择地区');
        return false;
      } else if (addr === ''){
        tips('请填写详细地址');
      }

    },
    no: function () {
      $(".shade").remove();
    }
  };
  $.extend(defaultSetting, settings);
  window.defaultSetting = defaultSetting;
  defaultSetting.toggle();
  // var htmlStr =
  //   '<div class="shade"><div class="shade-con"><h2>' +
  //   defaultSetting.title + "</h2>" + "<h2>" + '<img class="code-img" onclick="defaultSetting.toggle()" src="' +
  //   defaultSetting.src + '" />' + '<span class="toggle-img" onclick="defaultSetting.toggle()">换一张</span>' +
  //   "</h2>" + "<p>" +
  //   '<input type="text" id="img_code" placeholder="请输入4位验证码" />' + "</p>" + '<div class="btn">' +
  //   '<span class="btn-no" onclick="defaultSetting.no()">取消</span>' +
  //   '<span class="btn-yes" onclick="defaultSetting.yes()">确定</span>' + "</div>" + "</div>" + "</div>";

  var htmlStr = `
    <div class="shade" ontouchmove="return false">
      <div class="shade-con">
        <h2>请填写收货信息</h2>
        <h2>
          <label class="title">姓 名</label>
          <input id="name" type="text">
        </h2>
        <h2>
          <label class="title">手 机</label>
          <input id="phone" type="number">
        </h2>
        <h2>
          <label class="title">选择地区</label>
          <input id="city-picker" type="text" readonly placeholder="请选择省市区" name="">    
        </h2>
        <h2>
          <label class="title">详细地址</label>
          <textarea id="addr" type="text" placeholder="点击输入详细地址" name=""></textarea>
        </h2>
        <div class="btn">
          <span class="btn-no" onclick="defaultSetting.no()">取消</span>
          <span class="btn-yes" onclick="defaultSetting.yes()">确定</span>
        </div>
      </div>
    </div>
  `
    
    
  $("body").append(htmlStr);
  $("#city-picker").cityPicker({});
  if ($("#shade-style").length === 0) {
    addCssByStyle(
      `.mask,.shade{
        position:fixed;
        top:0;left:0;
        width:100%;
        height:100%;
        z-index:9999;
        background:rgba(0,0,0,.5)
      }
      .title {
        display: inline-block;
        width: 4rem;
        font-size: 0.7rem;
        color: #646464;
      }
      #city-picker {
        width: 9rem;
      }
      .shade .shade-con{
        width:15rem;
        height:12.5rem;
        border-radius:.25rem;
        background:#fff;
        position:fixed;
        top:50%;
        left:50%;
        margin:-7.25rem 0 0 -7.5rem;
        padding-top:1rem
      }
      .shade-con input {
        margin-bottom: 0.3rem;
        width: 9rem;
        font-size: 0.8rem;
        padding: 2px;
        color: #646464;
        outline: none;
        border: 1px solid #A2A2A2;
        box-shadow: none;
        -webkit-appearance: none;
        border-radius: 3px;
      }
      .shade-con textarea {
        width: 9rem;
        font-size: 0.8rem;
        padding: 2px;
        color: #646464;
        border: 1px solid #A2A2A2;
        border-radius: 3px;
        vertical-align: text-top;
        resize: none;
      }
      .shade-con input:focus {
        background: #fff;
      }
      .shade-con h2{
        font-size:.9rem;
        font-weight:400;
        text-align:center;
        color:#282828;
        position:relative
      }
      .shade-con h2:first-child{
        font-size:.8rem;
        color:#646464
      }
      .shade-con .btn{
        position:absolute;
        bottom:0;width:100%;
        text-align:center;
        height:2.45rem;
        line-height:2.45rem;
        border-top:1px solid #dcdcdc
      }
      .shade-con .btn span{
        font-size:.9rem;
        float:left;width:50%;
        height:100%;
        color:#646464
      }
      .shade-con .btn span.btn-yes{
        color:#a01f24;
        border-left:1px solid #dcdcdc
      }`
      , 'shade-style');
  }
};
var Load = {
  alert: {}
};
Load.alert.Loading = function(x) {
  var x = x || "努力加载中";
  $("#alertLoading,#alertWechat").remove();
  clearTimeout(Load.alert.Time);
  var alertLoading =
    '<div id="alertLoading" style="padding:1rem .5rem .5rem;background:rgba(0,0,0,.6);position: fixed;top: 45%;left: 50%;transform: translate(-50%,-50%);border-radius: 1rem;"><div style="width:2.75rem;height: 2.75rem;margin: 0 auto;background: url(img/loading.gif) no-repeat;background-size: 100% 100%;"></div><p style="margin: .5rem auto .2rem;text-align: center;color: #fff;font-size: 1rem;">' +
    x +
    "</p></div>";
  $("body").append(alertLoading);
  Load.alert.Time = setTimeout(function() {
    $("#alertLoading").fadeOut(500);
  }, 1500);
};
function isIdcard(Idcard) {
  var searchStr = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  if (!searchStr.test(Idcard)) {
    return false;
  } else {
    return true;
  }
}
function isMobile(mobile) {
  var searchStr = /^(1+\d{10})$/;
  if (!searchStr.test(mobile)) {
    return false;
  }
  return true;
}
function isName(Name) {
  var searchStr = /^[\u4e00-\u9fa5|A-Z|a-z]{2,}$/;
  if (!searchStr.test(Name)) {
    return false;
  } else {
    return true;
  }
}
var countdown = 60;
function settime(obj) {
  if (countdown == 0) {
    obj.removeAttribute("disabled");
    obj.value = "获取验证码";
    countdown = 60;
    return;
  } else {
    obj.setAttribute("disabled", "disabled");
    obj.value = countdown + "秒后重试";
    countdown--;
  }
  setTimeout(function() {
    settime(obj);
  }, 1000);
}

if (!("maxLength" in document.createElement("textarea"))) {
  $("textarea[maxlength]").on("keyup blur input", function() {
    var that = $(this);
    var that_val = that.val();
    var max = parseInt(that.attr("maxlength"));

    if (that_val.length > max) {
      that.val(that_val.substr(0, max));
    }
  });
}

/**
 * 
 * @param {cssString} cssString 
 * @param {id} style标签id 
 */
function addCssByStyle(cssString,id) {
  var doc = document;
  var style = doc.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("id", id);
  if (style.styleSheet) {
    // IE
    style.styleSheet.cssText = cssString;
  } else {
    // w3c
    var cssText = doc.createTextNode(cssString);
    style.appendChild(cssText);
  }
  var heads = doc.getElementsByTagName("head");
  if (heads.length) heads[0].appendChild(style);
  else doc.documentElement.appendChild(style);
}
